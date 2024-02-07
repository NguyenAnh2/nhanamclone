import './Comming.css'
import CImg1 from './photos/c1.webp'

function Comming() {
    return (
        <div>
            <div className='comming_wrapper'>
                <div className='comming_header'>
                    <a href="#" className="comming_title" title="Sắp xuất bản">Sắp xuất bạn</a>
                    <a href="#" className="show_more_comming" title="Xem thêm">
                        <div className="comming_show_title">Xem thêm</div>
                        <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span>
                    </a>
                </div>

                <div className='comming_books_info'>
                    <a href='back' className='books_arrow arrow-back'><ion-icon name="chevron-back-outline"></ion-icon></a>
                    <a href='next' className='books_arrow arrow-next'><ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <a href='#' className='comming_book'>
                        <div className='comming_book_img'><img src={CImg1} alt='comming book'/></div>
                        <div className='comming_book_name'>BỐN NGHÌN TUẦN</div>
                        <div className='comming_price'>
                            <div className='comming_price_new'>134.500đ</div>
                            <div className='comming_price_old'>158.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                    <a href='#' className='comming_book'>
                        <div className='comming_book_img'><img src={CImg1} alt='comming book'/></div>
                        <div className='comming_book_name'>BỐN NGHÌN TUẦN</div>
                        <div className='comming_price'>
                            <div className='comming_price_new'>134.500đ</div>
                            <div className='comming_price_old'>158.000đ</div>
                        </div>
                        <div className='book_buy_now'><span>Mua ngay</span></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Comming