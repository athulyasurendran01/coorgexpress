import PropertyBanner from '../../assets/images/property/property_banner.jpg'
import './PropertyListing.css'
function PropertyListing() {
    return(
        <section id="page-title" className="page-title bg-overlay bg-overlay-dark2" style={{"height": "75vh"}}>
            <div className="bg-section">
                <img src={PropertyBanner} alt="Background" />
            </div>
        </section>
    )
}

export default PropertyListing