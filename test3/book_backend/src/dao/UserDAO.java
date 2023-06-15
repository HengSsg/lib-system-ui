package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import db.ConnectionManager;
import dto.UserDTO;

public class UserDAO {
	 public List<UserDTO> selectAll() {
	        List<UserDTO>  userList = new ArrayList<>();
	        Connection con = ConnectionManager.getConnection();
	        String sql = "select * from bookUser;";

	        try {
	            PreparedStatement pstmt = con.prepareStatement(sql);
	            ResultSet rs = pstmt.executeQuery();
	            while (rs.next()) {

	                userList.add(new UserDTO(rs.getInt(1), rs.getString(2), rs.getString(3),
	                        rs.getString(4), rs.getString(5)));
	            }
	            pstmt.close();
	            rs.close();
	            con.close();
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        return userList;
	    }
}
