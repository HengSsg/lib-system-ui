package DB;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

public class ConnectionManager {
    public static Connection getConnection() {
        Connection con = null;
        Properties properties = new Properties();

        try {// static 메소드 안에서 getClass()사용을 못함
            // ex) Reader reader = getClass().getResourceAsStream("db.properties");
            // 해결하기 위해서는 InputStream reader = DBConnection.class.getResourceAsStream("db.properties");를 사용
            InputStream reader = ConnectionManager.class.getResourceAsStream("db.properties");
            properties.load(reader);

            String jdbcURL = properties.getProperty("jdbcURL");
            String driver = properties.getProperty("driver");
            String id = properties.getProperty("id");
            String password = properties.getProperty("password");
            Class.forName(driver);
            con = DriverManager.getConnection(jdbcURL, id, password);
        } catch (IOException | SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return con;
    }
    public static void closeConnection(Connection con) {
        try {
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static void closeConnection(Connection con, PreparedStatement pstmt) {
        try {
            pstmt.close();
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
