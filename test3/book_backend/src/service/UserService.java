package service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import dao.UserDAO;
import dto.UserDTO;

public class UserService {
	UserDAO userDAO;

    public UserService() {
        userDAO = new UserDAO();
    }


    public List<UserDTO> selectUser() { 
        List<UserDTO> userList = userDAO.selectAll();
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        File file = new File("C:\\Users\\금정산2_PC22\\Documents\\lib-system-ui\\test3\\data\\data.json");

        try {
            if (file.createNewFile()) {
                System.out.println("파일 생성 완료");
     
                FileWriter fw = new FileWriter(file, true);
                BufferedWriter writer = new BufferedWriter(fw);
                for(UserDTO user : userList) {
  
                    jsonObject.put("id", user.getId());
                    jsonObject.put("username", user.getUsername());
                    jsonObject.put("email", user.getEmail());
                    jsonObject.put("password", user.getPassword());
                    jsonObject.put("regdate", user.getRegdate());

                    jsonArray.add(jsonObject);
                }
                writer.write(jsonArray.toJSONString());
                writer.close();
            } else {
                System.out.println("해당 파일 존재함");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println(userList.size());
        return userList;
    }
}
