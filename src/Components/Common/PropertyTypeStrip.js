import BungalowIcon from '../../assets/images/stay/stay_icon_bungalow.png'
import CampIcon from '../../assets/images/stay/stay_icon_camp.png'
import HomeStayIcon from '../../assets/images/stay/stay_icon_homestay.png'
import ResortIcon from '../../assets/images/stay/stay_icon_resort.png'
import './PropertyTypeStrip.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function PropertyTypeStrip(){
    return(
        <div className="search-properties">s
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <form className="mb-0 ">
                        <div className="form-box ">
                           <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-12">
                                    <Carousel responsive={responsive} autoPlaySpeed={2000} transitionDuration={200}
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  infinite={true}
  swipeable={false}
  draggable={true}
  showDots={false}
  ssr={false}
  autoPlay={true}>
                                     
                                        <div className="filter-stay-item">
                                            <div className="filter-stay-icon">
                                                <a href="#">
                                                    <img src={HomeStayIcon} alt="property image" className="img-responsive"/>
                                                </a>
                                            </div>
                                                <h6>HOMESTAY</h6>
                                        </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={BungalowIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                            <h6>BANGLOW</h6>
                                      </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={CampIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                          <h6>CAMPING</h6>
                                      </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={ResortIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                        <h6>RESORT</h6>
                                      </div>
                                      
                                     
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={HomeStayIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                         <h6>HOMESTAY</h6>
                                      </div>
                                      
                                    </Carousel>
                              </div>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  
    )
}

export default PropertyTypeStrip