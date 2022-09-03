import BungalowIcon from '../../assets/images/stay/stay_icon_bungalow.png'
import CampIcon from '../../assets/images/stay/stay_icon_camp.png'
import HomeStayIcon from '../../assets/images/stay/stay_icon_homestay.png'
import ResortIcon from '../../assets/images/stay/stay_icon_resort.png'
import ProperyImage from '../../assets/images/stay/property-list_img-1.png'
import './PropertyTypeStrip.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
function PropertyTypeStrip(){
    let url="";
    return(
        <section id="properties-grid" style={{"overflow": "inherit"}}>
        <div className="search-properties" >
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <form className="mb-0 ">
                        <div className="form-box ">
                           <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-12">
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
                              </div>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="widget widget-property">
                            <div className="widget--title">
                                <h5>PROPERTY SEARCH</h5>
                            </div>
                          	<div className="input-checkbox">
                                    	<label className="label-checkbox">
                                              <span>Instant Booking</span>
                                              <input type="checkbox" />
                                              <span className="check-indicator"></span>
                                   		</label>
                                   	</div>
                          	
                            <div className="widget--content">
                              <div className="form-group">
                              	<div className="select--box">
                                        <i className="fa fa-angle-down"></i>
                                        <select name="select-location" id="select-location">
                                            <option>Any Location</option>
                                            <option>Madikeri</option>
											<option>Gonikoppal</option>
											<option>Virajpet</option>
											<option>Kutta</option>
											<option>Srimangala</option>
                                        </select>
                                </div>
                              </div>
                              <div className="form-group">
                              	<div className="select--box">
                                        <i className="fa fa-angle-down"></i>
                                        <select name="select-location" id="select-location">
                                            <option>Property Type</option>
                                            <option>Resort</option>
											<option>Banglaw</option>
											<option>Homestay</option>
											<option>Campsite</option>
                                        </select>
                                </div>
                              </div>
                              
                              	<div className="widget--title">
                                	<h5>PRICE RANGE</h5>
                            	</div>
                            	<div className="widget--content">
                                	<div className="filter mb-30">
                                     	<p>
                                        	<label for="amount">Price Range: </label>
                                            <input id="amount" type="text" className="amount" />
                                        </p>
                                        <div className="slider-range"></div>
                                    </div>
                                </div>
                              
                              	<div className="widget--title">
                                	<h5>OTHER FILTERS</h5>
                            	</div>
                            	<div className="widget--content">
                                	<div className="input-checkbox">
                                    	<label className="label-checkbox">
                                              <span>Air conditioning</span>
                                              <input type="checkbox" />
                                              <span className="check-indicator"></span>
                                   		</label>
                                   	</div>
                                   	<div className="input-checkbox">
                                    	<label className="label-checkbox">
                                              <span>Iron</span>
                                              <input type="checkbox" />
                                              <span className="check-indicator"></span>
                                   		</label>
                                   	</div>
                                  	<div className="input-checkbox">
                                    	<label className="label-checkbox">
                                              <span>Hot water</span>
                                              <input type="checkbox" />
                                              <span className="check-indicator"></span>
                                   		</label>
                                   	</div>
                                  	<div className="input-checkbox">
                                    	<label className="label-checkbox">
                                              <span>TV</span>
                                              <input type="checkbox" />
                                              <span className="check-indicator"></span>
                                   		</label>
                                   	</div>
                                  	<div className="input-checkbox">
                                    	<label className="label-checkbox">
                                              <span>Wireless internet</span>
                                              <input type="checkbox" />
                                              <span className="check-indicator"></span>
                                   		</label>
                                   	</div>
                                </div>
                            </div>
                          	<input type="submit" value="Clear All" name="submit" className="btn btn--primary" style={{"width" : "135px"}} />
                            <input type="submit" value="Search" name="submit" className="btn btn--success" style={{"width" : "135px"}} />
                        </div>

                        <div className="widget widget-featured-property">
                            <div className="widget--title">
                                <h5>Featured Properties</h5>
                            </div>
                            <div className="widget--content">
                                <div className="carousel carousel-dots" data-slide="1" data-slide-rs="1" data-autoplay="false" data-nav="false" data-dots="true" data-space="0" data-loop="true" data-speed="800">
                                    
                                    <div className="property-item">
                                        <div className="property--img">
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 1</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 1200<span className="time">month</span></p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="property-item">
                                        <div className="property--img">
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
                                            <span className="property--status">For Rent</span>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 2</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 130,000<span className="time">month</span></p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="property-item">
                                        <div className="property--img">
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 3</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 70,000</p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="properties-filter clearfix">
                                    <div className="select--box pull-left">
                                        <label>Sort by:</label>
                                        <i className="fa fa-angle-up"></i>
                                        <i className="fa fa-angle-down"></i>
                                        <select>
								<option selected="" value="Default">Default Sorting</option>
								<option value="Larger">Newest Items</option>
								<option value="Larger">oldest Items</option>
								<option value="Larger">Hot Items</option>
								<option value="Small">Highest Price</option>
								<option value="Medium">Lowest Price</option>
							</select>
                                    </div>
                                    
                                    <div className="view--type pull-right">
                                        <a id="switch-list" href="#" className=""><i className="fa fa-th-list"></i></a>
                                        <a id="switch-grid" href="#" className="active"><i className="fa fa-th-large"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="properties properties-grid row">
                                
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    
                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href={url}>
                                                <img src={ProperyImage} alt="property image" className="img-responsive" />
								            </a>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 1</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 130,000</p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>

                                            <div className="property--features">
                                                <ul className="list-unstyled mb-0">
                                                    <li><span className="feature">Beds:</span><span className="feature-num">2</span></li>
                                                    <li><span className="feature">Baths:</span><span className="feature-num">2</span></li>
                                                    <li><span className="feature">Area:</span><span className="feature-num">587 sq ft</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href={url}>
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
								            </a>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 2</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 900<span className="time">month</span></p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            
                                            <div className="property--features">
                                                <ul className="list-unstyled mb-0">
                                                    <li><span className="feature">Beds:</span><span className="feature-num">1</span></li>
                                                    <li><span className="feature">Baths:</span><span className="feature-num">1</span></li>
                                                    <li><span className="feature">Area:</span><span className="feature-num">500 sq ft</span></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href={url}>
                                                <img src={ProperyImage} alt="property image" className="img-responsive" />
								            </a>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 1</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs.  1.550<span className="time">month</span></p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            
                                            <div className="property--features">
                                                <ul className="list-unstyled mb-0">
                                                    <li><span className="feature">Beds:</span><span className="feature-num">2</span></li>
                                                    <li><span className="feature">Baths:</span><span className="feature-num">1</span></li>
                                                    <li><span className="feature">Area:</span><span className="feature-num">1390 sq ft</span></li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href={url}>
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
								            </a>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 2</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 530<span className="time">month</span></p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            
                                            <div className="property--features">
                                                <ul className="list-unstyled mb-0">
                                                    <li><span className="feature">Beds:</span><span className="feature-num">0</span></li>
                                                    <li><span className="feature">Baths:</span><span className="feature-num">1</span></li>
                                                    <li><span className="feature">Area:</span><span className="feature-num">150 sq ft</span></li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href={url}>
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
								            </a>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 1</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 70,000</p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            
                                            <div className="property--features">
                                                <ul className="list-unstyled mb-0">
                                                    <li><span className="feature">Beds:</span><span className="feature-num">2</span></li>
                                                    <li><span className="feature">Baths:</span><span className="feature-num">1</span></li>
                                                    <li><span className="feature">Area:</span><span className="feature-num">200 sq ft</span></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href={url}>
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
								            </a>
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 2</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 210,000</p>
                                              	<div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                           
                                            <div className="property--features">
                                                <ul className="list-unstyled mb-0">
                                                    <li><span className="feature">Beds:</span><span className="feature-num">2</span></li>
                                                    <li><span className="feature">Baths:</span><span className="feature-num">2</span></li>
                                                    <li><span className="feature">Area:</span><span className="feature-num">1370 sq ft</span></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 text-center mt-50">
                                <ul className="pagination">
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">...</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="fa fa-angle-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
    </section>
  
    )
}

export default PropertyTypeStrip