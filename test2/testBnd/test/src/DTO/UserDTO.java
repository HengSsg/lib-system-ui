package DTO;

public class UserDTO {
    private int no;
    private String ID;
    private String PW;
    private String name;
    private String phone_num;
    private String address;
    private String email;
    private String AUTH_code;
    private String Comunity_YN;
    private String CDT;


    public UserDTO(int no, String ID, String PW, String name, String phone_num, String address, String email, String AUTH_code, String comunity_YN, String CDT) {
        this.no = no;
        this.ID = ID;
        this.PW = PW;
        this.name = name;
        this.phone_num = phone_num;
        this.address = address;
        this.email = email;
        this.AUTH_code = AUTH_code;
        this.Comunity_YN = comunity_YN;
        this.CDT = CDT;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getPW() {
        return PW;
    }

    public void setPW(String PW) {
        this.PW = PW;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone_num() {
        return phone_num;
    }

    public void setPhone_num(String phone_num) {
        this.phone_num = phone_num;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAUTH_code() {
        return AUTH_code;
    }

    public void setAUTH_code(String AUTH_code) {
        this.AUTH_code = AUTH_code;
    }

    public String getComunity_YN() {
        return Comunity_YN;
    }

    public void setComunity_YN(String comunity_YN) {
        Comunity_YN = comunity_YN;
    }

    public String getCDT() {
        return CDT;
    }

    public void setCDT(String CDT) {
        this.CDT = CDT;
    }

}
