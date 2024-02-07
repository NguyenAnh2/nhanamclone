import './News.css'
import NImg1 from './photos/n1.webp'
import NImg2 from './photos/n2.webp'
import NImg3 from './photos/n3.webp'
import NImg4 from './photos/n4.webp'

function News() {
    return (
        <div>
            <div className='news_wrapper'>
                <div className="news_header">
                    <a href='#' className='news_header_text'>Sách Nhã Nam trên báo chí</a>
                    <a href='#' className='news_show_more'>
                        <div className='news_show_more_text'>Xem thêm</div>
                        <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span>
                    </a>
                </div>

                <div className='news_info'>
                    <a href='#' className='news_element'>
                        <div className='news_element_img'>
                            <img src={NImg1} alt='newsphoto1'/>
                        </div>
                        <div className='news_element_title'>PGS. TS. Bùi Xuân Đính: Người Việt không bốc mộ, không đốt vàng mã</div>
                        <div className='news_element_desc'>(PLO)- PGS. TS. Bùi Xuân Đính khẳng định, người Việt chúng ta không bốc mộ. Việc bốc mộ rất tốn kém, phiền hà, mất vệ sinh. </div>
                        <div className='news_element_date'>Thứ Năm, 31/12/2023</div>
                    </a>
                    <a href='#' className='news_element'>
                        <div className='news_element_img'>
                            <img src={NImg2} alt='newsphoto2'/>
                        </div>
                        <div className='news_element_title'>PGS. TS. Bùi Xuân Đính: Người Việt không bốc mộ, không đốt vàng mã</div>
                        <div className='news_element_desc'>(PLO)- PGS. TS. Bùi Xuân Đính khẳng định, người Việt chúng ta không bốc mộ. Việc bốc mộ rất tốn kém, phiền hà, mất vệ sinh. </div>
                        <div className='news_element_date'>Thứ Năm, 31/12/2023</div>
                    </a>
                    <a href='#' className='news_element'>
                        <div className='news_element_img'>
                            <img src={NImg3} alt='newsphoto3'/>
                        </div>
                        <div className='news_element_title'>PGS. TS. Bùi Xuân Đính: Người Việt không bốc mộ, không đốt vàng mã</div>
                        <div className='news_element_desc'>(PLO)- PGS. TS. Bùi Xuân Đính khẳng định, người Việt chúng ta không bốc mộ. Việc bốc mộ rất tốn kém, phiền hà, mất vệ sinh. </div>
                        <div className='news_element_date'>Thứ Năm, 31/12/2023</div>
                    </a>
                    <a href='#' className='news_element'>
                        <div className='news_element_img'>
                            <img src={NImg4} alt='newsphoto4'/>
                        </div>
                        <div className='news_element_title'>PGS. TS. Bùi Xuân Đính: Người Việt không bốc mộ, không đốt vàng mã</div>
                        <div className='news_element_desc'>(PLO)- PGS. TS. Bùi Xuân Đính khẳng định, người Việt chúng ta không bốc mộ. Việc bốc mộ rất tốn kém, phiền hà, mất vệ sinh. </div>
                        <div className='news_element_date'>Thứ Năm, 31/12/2023</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default News