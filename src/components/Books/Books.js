import imgbook1 from './photos/p1.webp'
import imgbook2 from './photos/p2.webp'
import imgbook3 from './photos/p3.webp'
import imgbook4 from './photos/p4.webp'
import imgbook5 from './photos/p5.webp'
import imgbook6 from './photos/p6.webp'
import imgbook7 from './photos/p7.webp'
import imgbook8 from './photos/p8.webp'
import './Books.css'

function Books() {
    return (
        <div>
            <div className='books_wrapper'>
                <div className='books_header'>
                    <a href="#books" className="books_title" title="Sách mới">Sách mới</a>
                    <a href="#more" className="show_more_books" title="Xem thêm">
                        <div className="books_show_title">Xem thêm</div>
                        <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span>
                    </a>
                </div>

                <div className='books_info'>
                    <a href='back' className='books_arrow arrow-back'><ion-icon name="chevron-back-outline"></ion-icon></a>
                    <a href='next' className='books_arrow arrow-next'><ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook1} alt="img1"/></div>
                        <div className='book_name'>LƯU ĐÀY VÀ VƯƠNG QUỐCLƯU ĐÀY VÀ VƯƠNG QUỐCLƯU ĐÀY VÀ VƯƠNG QUỐCLƯU ĐÀY VÀ VƯƠNG QUỐCLƯU ĐÀY VÀ VƯƠNG QUỐCLƯU ĐÀY VÀ VƯƠNG QUỐCLƯU ĐÀY VÀ VƯƠNG QUỐC</div>
                        <div className='book_price'>
                            <div className='book_price_new'>110.500đ</div>
                            <div className='book_price_old'>130.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook2} /></div>
                        <div className='book_name'>Lá Thư</div>
                        <div className='book_price'>
                            <div className='book_price_new'>119.500đ</div>
                            <div className='book_price_old'>140.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook3} /></div>
                        <div className='book_name'>KHI TRẺ NGƯỜI TA NGHĨ KHÁC</div>
                        <div className='book_price'>
                            <div className='book_price_new'>136.500đ</div>
                            <div className='book_price_old'>160.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook4} /></div>
                        <div className='book_name'>CÁCH SỐNG TRÊN ĐỜI</div>
                        <div className='book_price'>
                            <div className='book_price_new'>91.800đ</div>
                            <div className='book_price_old'>108.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook5} /></div>
                        <div className='book_name'>SAU ĐỘNG ĐÂT</div>
                        <div className='book_price'>
                            <div className='book_price_new'>93.500đ</div>
                            <div className='book_price_old'>110.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook6} /></div>
                        <div className='book_name'>NGÀY MAI, NGÀY MAI, VÀ NGÀY MAI NỮA</div>
                        <div className='book_price'>
                            <div className='book_price_new'>220.150đ</div>
                            <div className='book_price_old'>259.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook7} /></div>
                        <div className='book_name'>HIPPE - NHỮNG KẺ LÃNG DU</div>
                        <div className='book_price'>
                            <div className='book_price_new'>127.500đ</div>
                            <div className='book_price_old'>150.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='book_info' className='book_info'>
                        <div className='book_img'><img src={imgbook8} /></div>
                        <div className='book_name'>LƯU ĐÀY VÀ VƯƠNG QUỐC</div>
                        <div className='book_price'>
                            <div className='book_price_new'>110.500đ</div>
                            <div className='book_price_old'>130.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                </div>
            </div>
        </div>
    )
    
}

export default Books