import myImg1 from './photos/avt1.png'
import myImg2 from './photos/avt2.png'
import myImg3 from './photos/avt3.png'
import myImg4 from './photos/avt4.png'
import './Authors.css'
import { Route, Routes, Link } from 'react-router-dom'
import ListAuthors from './ListAuthors/ListAuthors'

function Authors() {
    return (
        <div>
            <div className="authors_wrapper">
                <div className='authors_header'>
                    <Link to='/listauthors' className="authors_title" title="Các tác giả">Các tác giả</Link>
                    <Routes>
                        <Route path='/listauthors' element={<ListAuthors />} />
                    </Routes>
                    <a href="#" className="show_more_authors" title="Xem thêm">
                        <div className="authors_show_title">Xem thêm</div>
                        <span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span>
                    </a>
                </div>
                    <div className='authors_arrow arrow-back arrow_disable'>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </div>

                    <div className='authors_arrow arrow-next'>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                <div className="authors_info">
                    <a title='Caryl Férey' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg2} alt="photo1" /></div>
                        <div className="author_info_name">Caryl Férey</div>
                    </a>
                    <a title='Alan Lightman' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg3} alt="photo1" /></div>
                        <div className="author_info_name">Alan Lightman</div>
                    </a>
                    <a title='Georges Perec' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg4} alt="photo1" /></div>
                        <div className="author_info_name">Georges Perec</div>
                    </a>
                    <a title='Lee Jin Song' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg1} alt="photo1" /></div>
                        <div className="author_info_name">Lee Jin Song</div>
                    </a>
                    <a title='Urakami Tetsuya' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg1} alt="photo1" /></div>
                        <div className="author_info_name">Urakami Tetsuya</div>
                    </a>
                    <a title='Marnie Old' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg1} alt="photo1" /></div>
                        <div className="author_info_name">Marnie Old</div>
                    </a>
                    <a title='Chí Tinh' href="authorid" className="author_info">
                        <div className="author_info_img"><img src={myImg1} alt="photo1" /></div>
                        <div className="author_info_name">Chí Tinh</div>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Authors