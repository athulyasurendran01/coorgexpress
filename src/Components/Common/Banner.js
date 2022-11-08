import AboutBanner from '../../assets/images/banner/about_banner.png'
import StayBanner from '../../assets/images/stay/stay_banner.jpg'
import ExperienceBanner from '../../assets/images/stay/experience_banner.jpg'
import EventBanner from '../../assets/images/stay/events_banner.jpg'
import BlogBanner from '../../assets/images/blog/blog_banner.jpg'
import './Banner.css'

function Banner({category}){
    const propsData = [{
        title: 'stay',
        banner: StayBanner
    },
    {
        title: 'experience',
        banner: ExperienceBanner
    },
    {
        title: 'events',
        banner: EventBanner
    },
    {
        title: 'blog',
        banner: BlogBanner
    },
    {
        title: 'about',
        banner: AboutBanner
    }]
    return(
        <section id="page-title" className ="page-title" >
            <div className="bg-section">
                {category === 'about' && <img src={AboutBanner} alt="Coorge Express About Banner" />}
                {category === 'stay' && <img src={StayBanner} alt="Coorge Express Stay Banner" />}
                {category === 'experience' && <img src={ExperienceBanner} alt="Coorge Express Stay Banner" />}
                {category === 'events' && <img src={EventBanner} alt="Coorge Express Stay Banner" />}
                {category === 'blog' && <img src={BlogBanner} alt="Coorge Express Blog Banner" />}
            </div>
        </section>
    )
}

export default Banner