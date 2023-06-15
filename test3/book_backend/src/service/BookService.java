package service;

import dao.BookDao;
import dto.BookDTO;

public class BookService {
	private BookDao dao;
	
	public BookService() {
        dao = new BookDao();
    }
	
	public BookDTO getBookById(String bname) {
        // 필요한 비즈니스 로직 처리
        
        // BookDAO를 통해 bookId에 해당하는 책 정보를 조회
		BookDTO book = dao.getBookById(bname);
        
        // 추가적인 로직 처리 가능
        
        return book;
    }
}
