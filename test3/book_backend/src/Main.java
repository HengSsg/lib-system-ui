import service.UserService;

public class Main {
    UserService userService = new UserService();

    public static void main(String[] args) {
        Main main = new Main();
        main.selectUser();
    }

    public void selectUser(){
        System.out.println(userService.selectUser());
    }
}