import './Footer.css'
import FImg1 from './photos/ph1.webp'
import FImg2 from './photos/ph2.webp'

function Footer() {
    return (
        <div>
            <div className='footer_wrapper'>
                <div className='footer_info'>
                    <div className='footer_info_logo'>
                        <img src='https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/logo.png?1704690471681' alt='logo'/>
                        <div className='footer_info_slogan'>Bởi vì sách là thế giới</div>
                    </div>
                    <div className='footer_info_addr footer_info_text'>
                        <span><ion-icon name="location-outline"></ion-icon></span>
                        Số 59, Đỗ Quang, Trung Hoà, Cầu Giấy, Hà Nội.
                    </div>
                    <a href='#' className='footer_info_email footer_info_text footer_item'>
                        <span><ion-icon name="mail-outline"></ion-icon></span>
                        info@nhanam.vn
                    </a>
                    <a href='#' className='footer_info_phone footer_info_text footer_item'>
                        <span><ion-icon name="phone-portrait-outline"></ion-icon></span>
                        0903244248
                    </a>
                </div>

                <div className='footer_greet'>
                    <ul>
                        <a href='#'><li className='footer_greet_item footer_greet_item_title footer_item_title'>Giới thiệu</li></a>
                        <a href='#'><li className='footer_greet_item footer_item'>Về Nhã Nam</li></a>
                        <a href='#'><li className='footer_greet_item footer_item'>Hệ thống hiệu sách</li></a>
                        <a href='#'><li className='footer_greet_item footer_item'>Hệ thống phát hành</li></a>
                        <a href='#'><li className='footer_greet_item footer_item'>Tuyển dụng</li></a>
                        <a href='#'><li className='footer_greet_item footer_item'>Liên hệ với chúng tôi</li></a>
                    </ul>

                </div>
                <div className='footer_policy'>
                    <ul>
                        <a href='#'><li className='footer_policy_item footer_policy_item_title footer_item_title'>Giới thiệu</li></a>
                        <a href='#'><li className='footer_policy_item footer_item'>Chính sách bảo mật</li></a>
                        <a href='#'><li className='footer_policy_item footer_item'>Chính sách đổi trả/hoàn tiền</li></a>
                        <a href='#'><li className='footer_policy_item footer_item'>Chính sách thanh toán/ vận chuyển</li></a>
                    </ul>
                </div>

                <div className='footer_payment'>
                    <a href='#' className='footer_payment_title footer_item_title'>Giới thiệu</a>
                    <div className='footer_payment_img'><img src={FImg1} alt='paymentOptions'/></div>
                    <div className='footer_payment_check'><img src={FImg2} alt='checkLicense' /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer