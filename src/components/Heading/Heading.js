import './Heading.css'

function Heading() {
    return (
        <div>
            <div className="header_wrapper">
                <a href='http://localhost:3000/'>
                    <img src='https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/logo.png?1704690471681' alt='logo'/>
                </a>
                <div className="header_nav">
                    <a title='Trang Chủ' className="header_nav_link header_home" href="#">Trang Chủ</a>
                    <a title='Sách Nhã Nam' className="header_nav_link header_more_books" href="#">Sách Nhã Nam 
                        <span className='up_arrow'><ion-icon name="chevron-up-outline"></ion-icon></span>
                        <span className='down_arrow'><ion-icon name="chevron-down-outline"></ion-icon></span>
                        <div className="header_more_books_show">
                            <div className='show_col show_col_1'>
                                <a className='title_col title_col_1' href='#'>Hư cấu</a>
                                <a className='header_mone_book_name' href='#'>Văn học hiện đại</a>
                                <a className='header_mone_book_name' href='#'>Văn học kinh điển</a>
                                <a className='header_mone_book_name' href='#'>Văn học thiếu nhi</a>
                                <a className='header_mone_book_name' href='#'>Lãng mạn</a>
                                <a className='header_mone_book_name' href='#'>Kỳ ảo</a>
                                <a className='header_mone_book_name' href='#'>Trinh thám - Kinh dị</a>
                            </div>
                            <div className='show_col show_col_2'>
                                <a className='title_col title_col_1' href='#'>Phi hư cấu</a>
                                <a className='header_mone_book_name' href='#'>Triết học</a>
                                <a className='header_mone_book_name' href='#'>Khoa học</a>
                                <a className='header_mone_book_name' href='#'>Sử học</a>
                                <a className='header_mone_book_name' href='#'>Kinh doanh</a>
                                <a className='header_mone_book_name' href='#'>Kinh tế chính trị</a>
                                <a className='header_mone_book_name' href='#'>Kỹ năng</a>
                            </div>
                            <div className='show_col show_col_3'>
                                <a className='title_col title_col_1' href='#'>Thiếu nhi</a>
                                <a className='header_mone_book_name' href='#'>0-5 tuổi</a>
                                <a className='header_mone_book_name' href='#'>6-8 tuổi</a>
                                <a className='header_mone_book_name' href='#'>9-12 tuổi</a>
                                <a className='header_mone_book_name' href='#'>13-15 tuổi</a>
                            </div>
                            <div className='show_col show_col_4'>
                                <a className='title_col title_col_1' href='#'>Phân loại khác</a>
                                <a className='header_mone_book_name' href='#'>Sách bán chạy</a>
                                <a className='header_mone_book_name' href='#'>Sách mới xuất bản</a>
                                <a className='header_mone_book_name' href='#'>Sách được giải thưởng</a>
                                <a className='header_mone_book_name' href='#'>Nghiên cứu Việt Nam</a>
                            </div>
                        </div>
                    </a>
                    <a title='Tác Giả' className="header_nav_link header_authors" href="#">Tác Giả</a>
                    <a title='Về Nhã Nam' className="header_nav_link header_info" href="#">Về Nhã Nam</a>
                    <a title='Liên Hệ' className="header_nav_link header_contact" href="#">Liên Hệ</a>
                </div>

                <div className='header_right'>
                    <div className="search_input">
                        <input placeholder='Tìm kiếm...'></input>
                        <div className='search_icon'><ion-icon name="search-outline"></ion-icon></div>
                    </div>
                    <div className="account_wrap">
                        <a href='#1' className="account_info"><ion-icon name="person-circle-outline"></ion-icon>
                            <div className='account_options'>
                                <a className='account_option_sign' href='sign'>Đăng ký</a>
                                <a className='account_option_log' href='log'>Đăng nhập</a>
                            </div>
                        </a>
                        <a href='#2' title='Giỏ Hàng' className="account_cart"><ion-icon name="bag-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading