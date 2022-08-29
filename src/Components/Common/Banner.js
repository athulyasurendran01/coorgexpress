import StayBanner from '../../assets/images/stay/stay_banner.jpg'
import './Banner.css'

function Banner(){
    return(
        <section id="page-title" className ="page-title" style={{"height": "75vh"}}>
            <div className="bg-section">
                <img src={StayBanner} alt="Coorge Express Stay Banner" />
            </div>
        </section>
    )
}

export default Banner