import './Partner.css'
import PImg1 from './photos/p1.webp'
import PImg2 from './photos/p2.webp'
import PImg3 from './photos/p3.webp'
import PImg4 from './photos/p4.webp'
import PImg5 from './photos/p5.webp'
import PImg6 from './photos/p6.webp'
import PImg7 from './photos/p7.webp'
import PImg8 from './photos/p8.webp'
import PImg9 from './photos/p9.webp'
import PImg10 from './photos/p10.webp'

function Partner() {
    return (
        <div>
            <div className='partner_wrapper'>
                <div className='partner_header'>
                    <a href='#' className='partner_header_title' title='Các đối tác'>Các đối tác</a>
                    <a href='#' className='partner_header_more' title='Xem thêm'>
                        <div className='partner_header_more_show'>Xem thêm</div>
                        <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span>
                    </a>
                </div>
                <div className='partners_info'>
                    <a href='back' className='partner_arrow arrow-back'><ion-icon name="chevron-back-outline"></ion-icon></a>
                    <a href='next' className='partner_arrow arrow-next'><ion-icon name="chevron-forward-outline"></ion-icon></a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg1} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg2} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg3} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg4} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg5} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg6} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg7} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg8} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg9} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                    <a href='#' className='partner_info'>
                        <div className='parner_info_img'><img src={PImg10} alt='partnerphotos'/></div>
                        <div className='partner_info_name'>Simon and Schuster</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Partner