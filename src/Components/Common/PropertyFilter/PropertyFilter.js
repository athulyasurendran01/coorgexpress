import BungalowIcon from '../../../assets/images/stay/stay_icon_bungalow.png'
import CampIcon from '../../../assets/images/stay/stay_icon_camp.png'
import HomeStayIcon from '../../../assets/images/stay/stay_icon_homestay.png'
import ResortIcon from '../../../assets/images/stay/stay_icon_resort.png'
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function PropertyFilter() {
    let url="";
    return (
        <>
            <Carousel responsive={responsive} autoPlaySpeed={4000} transitionDuration={200}
                                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                                        infinite={true}
                                        swipeable={false}
                                        draggable={true}
                                        showDots={false}
                                        ssr={false}
                                        autoPlay={true}>
                                     
                                        <div className="filter-stay-item">
                                            <div className="filter-stay-icon">
                                                <a href={url}>
                                                    <img src={HomeStayIcon} alt="property image" className="img-responsive"/>
                                                </a>
                                            </div>
                                                <h6>HOMESTAY</h6>
                                        </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href={url}>
                                                  <img src={BungalowIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                            <h6>BANGLOW</h6>
                                      </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href={url}>
                                                  <img src={CampIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                          <h6>CAMPING</h6>
                                      </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href={url}>
                                                  <img src={ResortIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                        <h6>RESORT</h6>
                                      </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href={url}>
                                                  <img src={HomeStayIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                         <h6>HOMESTAY</h6>
                                      </div>
                                      
                                    </Carousel>
        </>
    )
}

export default PropertyFilter