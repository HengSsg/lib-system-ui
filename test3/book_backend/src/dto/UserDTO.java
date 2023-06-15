package dto;

public class UserDTO {
	private int id;
	private String username;
	private String email;
	private String password;
	private String regdate;
			
	public UserDTO(int id, String username, String email, String password, String regdate) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.regdate = regdate;
	}

	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getRegdate() {
		return regdate;
	}



	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}



	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", regdate=" + regdate + "]";
	}
	

}
