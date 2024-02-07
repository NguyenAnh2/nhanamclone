import './Greeting.css'
import GImg from './photos/g1.webp'

function Greeting() {
    return (
        <div>
            <div className='greeting_wrapper'>
                <div className='greeting_text'>
                    <div className='greeting_header'>Nhã Nam</div>
                    <div className='greeting_slogan'>Bởi vì sách là thế giới</div>
                    <div className='greeting_description'>Nhã Nam, tên đầy đủ là Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam, gia nhập thị trường sách Việt Nam vào tháng 2 năm 2005. Ngay từ cuốn sách đầu tiên, độc giả đã dành sự quan tâm và yêu mến cho một thương hiệu sách mới mẻ mang trong mình khát vọng góp phần tạo lập diện mạo mới cho xuất bản văn học tại Việt Nam.</div>
                    <button className='greeting_btn'>Xem thêm</button>
                </div>
                <div className='greeting_img'>
                    <img src={GImg} alt='greeting_img'/>
                </div>
            </div>
        </div>
    )
}

export default Greeting