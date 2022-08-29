import BungalowIcon from '../../assets/images/stay/stay_icon_bungalow.png'
import CampIcon from '../../assets/images/stay/stay_icon_camp.png'
import HomeStayIcon from '../../assets/images/stay/stay_icon_homestay.png'
import ResortIcon from '../../assets/images/stay/stay_icon_resort.png'
import './PropertyTypeStrip.css'
import Carousel from 'react-bootstrap/Carousel';

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
                                    <Carousel>
                                      <Carousel.Item>
                                        <div className="filter-stay-item">
                                            <div className="filter-stay-icon">
                                                <a href="#">
                                                    <img src={HomeStayIcon} alt="property image" className="img-responsive"/>
                                                </a>
                                            </div>
                                                <h6>HOMESTAY</h6>
                                        </div>
                                      </Carousel.Item>
                                      <Carousel.Item>
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={BungalowIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                            <h6>BANGLOW</h6>
                                      </div>
                                      </Carousel.Item>
                                      <Carousel.Item>
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={CampIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                          <h6>CAMPING</h6>
                                      </div>
                                      </Carousel.Item>
                                      <Carousel.Item>
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={ResortIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                        <h6>RESORT</h6>
                                      </div>
                                      </Carousel.Item>
                                      <Carousel.Item>
                                      <div className="filter-stay-item">
                                          <div className="filter-stay-icon">
                                              <a href="#">
                                                  <img src={HomeStayIcon} alt="property image" className="img-responsive"/>
                                              </a>
                                          </div>
                                         <h6>HOMESTAY</h6>
                                      </div>
                                      </Carousel.Item>
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