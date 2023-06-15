package dto;

public class BookDTO {
	private String bname;
	private String bauthor;
	private String bpublisher;
	private String rentDate;
	private String returnDate;
	
	public BookDTO(String bname, String bauthor, String bpublisher, String rentDate, String returnDate) {
		super();
		this.bname = bname;
		this.bauthor = bauthor;
		this.bpublisher = bpublisher;
		this.rentDate = rentDate;
		this.returnDate = returnDate;
	}
	
	public BookDTO() {
		
	}

	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getBauthor() {
		return bauthor;
	}
	public void setBauthor(String bauthor) {
		this.bauthor = bauthor;
	}
	public String getBpublisher() {
		return bpublisher;
	}
	public void setBpublisher(String bpublisher) {
		this.bpublisher = bpublisher;
	}
	public String getRentDate() {
		return rentDate;
	}
	public void setRentDate(String rentDate) {
		this.rentDate = rentDate;
	}
	public String getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}

	@Override
	public String toString() {
		return "BookDTO [bname=" + bname + ", bauthor=" + bauthor + ", bpublisher=" + bpublisher + ", rentDate="
				+ rentDate + ", returnDate=" + returnDate + "]";
	}
	
}
