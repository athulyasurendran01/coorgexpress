import Banner from "../Common/Banner"
import BlogBanner from '../../assets/images/blog/blog_banner.jpg'
import Blogs from "../Home/Blogs/Blogs"


function Blog() {
    return (
        <>
            <section id="page-title" className ="page-title" >
                <div className="bg-section">
                    <img src={BlogBanner} alt="Coorge Express Stay Banner" />
                </div>
            </section>
            <Blogs />
            
        </>
    )
}

export default Blog