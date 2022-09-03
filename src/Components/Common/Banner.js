import StayBanner from '../../assets/images/stay/stay_banner.jpg'
import ExperienceBanner from '../../assets/images/stay/experience_banner.jpg'
import EventBanner from '../../assets/images/stay/events_banner.jpg'
import './Banner.css'

function Banner(){
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
    }]
    return(
        <section id="page-title" className ="page-title" style={{"height": "75vh"}}>
            <div className="bg-section">
                <img src={StayBanner} alt="Coorge Express Stay Banner" />
            </div>
        </section>
    )
}

export default Banner