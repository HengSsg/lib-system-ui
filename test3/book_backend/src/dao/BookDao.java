package dao;

import dto.BookDTO;

public class BookDao {
	public BookDTO getBookById(String bookId) {
        
        BookDTO book = new BookDTO();
        book.setBname("이것이 자바다");
        book.setBauthor("지은이");
        book.setBpublisher("출판사");
        book.setRentDate("2023-06-15");
        book.setReturnDate("2023-06-30");
        
        return book;
    }
	
}
