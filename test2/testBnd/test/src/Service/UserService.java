package Service;

import DAO.UserDAO;
import DTO.UserDTO;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class UserService {

    UserDAO userDAO;

    public UserService() {
        userDAO = new UserDAO();
    }


    public List<UserDTO> selectUser() { // 사용자 로그인
        List<UserDTO> userList = userDAO.selectAll();
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        File file = new File("C:\\Users\\금정산2_PC28\\vsWorkSpace\\lib-system-ui\\test2\\testFe\\data\\data.json");

        try {
            if (file.createNewFile()) {
                System.out.println("File created");
                //true 써주면 덮어쓰기 가능
                FileWriter fw = new FileWriter(file, true);
                BufferedWriter writer = new BufferedWriter(fw);
                for(UserDTO user : userList) {
                    //jsonobject 정의
                    jsonObject.put("no", user.getNo());
                    jsonObject.put("ID", user.getID());
                    jsonObject.put("PW", user.getPW());
                    jsonObject.put("name", user.getName());
                    jsonObject.put("phone_num", user.getPhone_num());
                    jsonObject.put("email", user.getEmail());
                    jsonObject.put("address", user.getAddress());

                    //jsonobject 배열로 변환
                    jsonArray.add(jsonObject);
                }
                writer.write(jsonArray.toJSONString());
                writer.close();
            } else {
                System.out.println("File already exists");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println(userList.size());
        return userList;
    }

}
