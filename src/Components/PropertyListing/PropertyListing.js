import PropertyBanner from '../../assets/images/property/property_banner.jpg';
import PropertyImage from '../../assets/images/property/property_image.jpg';
import './PropertyListing.css';
import React, { useCallback, useRef, useState } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBContainer,
} from "mdb-react-ui-kit";

function PropertyListing() {

        const [currentSlide, setCurrentSlide] = useState(0);

        const carouselInner = useRef(null);

        const slideChanged = useCallback(() => {
            const activeItem = carouselInner.current.querySelector(".active");
            setCurrentSlide(
            Array.from(carouselInner.current.children).indexOf(activeItem)
            );
        }, []);

        const changeSlide = useCallback((position) => {
            Array.from(carouselInner.current.children).forEach((el, i) => {
            if (i !== position) {
                el.classList.remove("active");
            } else {
                el.classList.add("active");
                slideChanged();
            }
            });
        }, []);

    return(
        <>
        <section id="page-title" className="page-title bg-overlay bg-overlay-dark2" style={{"height": "75vh"}}>
            <div className="bg-section">
                <img src={PropertyBanner} alt="Background" />
            </div>
        </section>

        <section id="property-single-gallery" className="property-single-gallery">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="property-single-gallery-info">
                        <div className="property--info clearfix">
                            <div className="pull-left">
                                <h5 className="property--title">Property 1</h5>
                                <p className="property--location">Listing Address Address Address Address </p>
                                  <p className="property--location">Address Address </p>
                            </div>
                            <div className="pull-right verified-listing">
                                  <input type="submit" value="Verified Listing" name="submit" className="btn btn--success mb-20" style={{width: "275px", background: "#34a20d", color: "#fff"}} />
                                  <span className="property--status"><i className="fa fa-share-alt"></i> Share | <i className="fa fa fa-pencil"></i> Review</span>
                                  <div className="property-rating">
                                                  <span>Rating : </span>
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
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8">
                    <div className="property-single-carousel inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                            <MDBContainer className="mt-5">
                                <MDBCarousel
                                    id="carouselExampleIndicators"
                                    showControls
                                    fade
                                    onSlide={slideChanged}
                                >
                                    <MDBCarouselInner ref={carouselInner}>
                                    <MDBCarouselItem className="active">
                                        <MDBCarouselElement
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp"
                                        alt="..."
                                        />
                                    </MDBCarouselItem>

                                    <MDBCarouselItem>
                                        <MDBCarouselElement
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp"
                                        alt="..."
                                        />
                                    </MDBCarouselItem>

                                    <MDBCarouselItem>
                                        <MDBCarouselElement
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
                                        alt="..."
                                        />
                                    </MDBCarouselItem>
                                    </MDBCarouselInner>

                                    <div className="carousel-indicators" style={{ marginBottom: "-20px" }}>
                                    <button
                                        className={`carousel-indicator ${currentSlide === 0 ? "active" : ""}`}
                                        onClick={() => changeSlide(0)}
                                        style={{ width: "100px" }}
                                    >
                                        <img
                                        className="d-block w-100 img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp"
                                        />
                                    </button>
                                    <button
                                        className={`carousel-indicator ${currentSlide === 1 ? "active" : ""}`}
                                        onClick={() => changeSlide(1)}
                                        style={{ width: "100px" }}
                                    >
                                        <img
                                        className="d-block w-100 img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp"
                                        />
                                    </button>
                                    <button
                                        className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
                                        onClick={() => changeSlide(2)}
                                        style={{ width: "100px" }}
                                    >
                                        <img
                                        className="d-block w-100 img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
                                        />
                                    </button>
                                    </div>
                                </MDBCarousel>
                                </MDBContainer>
                                <div className="property-single-carousel-content">
                                    <div className="carousel carousel-thumbs slider-navs" data-slide="1" data-slide-res="1" data-autoplay="true" data-thumbs="true" data-nav="true" data-dots="false" data-space="30" data-loop="true" data-speed="800" data-slider-id="1">
                                        <img src={PropertyImage} alt="Property Image" />
                                        <img src={PropertyImage} alt="Property Image" />
                                        <img src={PropertyImage} alt="Property Image" />
                                        <img src={PropertyImage} alt="Property Image" />
                                        <img src={PropertyImage} alt="Property Image" />
                                    </div>
                                    <div className="owl-thumbs thumbs-bg" data-slider-id="1">
                                        <button className="owl-thumb-item">
                                            <img src="assets/images/properties/slider/thumbs/1.jpg" alt="Property Image thumb" />
                                        </button>
                                                        <button className="owl-thumb-item">
                                            <img src="assets/images/properties/slider/thumbs/2.jpg" alt="Property Image thumb" />
                                       </button>
                                                        <button className="owl-thumb-item">
                                            <img src="assets/images/properties/slider/thumbs/3.jpg" alt="Property Image thumb" />
                                        </button>
                                                        <button className="owl-thumb-item">
                                            <img src="assets/images/properties/slider/thumbs/4.jpg" alt="Property Image thumb" />
                                        </button>
                                                        <button className="owl-thumb-item">
                                            <img src="assets/images/properties/slider/thumbs/5.jpg" alt="Property Image thumb" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-single-desc inner-box property-det">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="feature-panel">
                                      <div className="heading">
                                        <h2 className="heading--title">Opening Hours</h2>
                                    </div>
                                    <div className="feature--content">
                                        <p>Check In Timing<span>11 AM</span></p>
                                          <p>Check Out Timing<span>11 AM</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="feature-panel">
                                      <div className="heading">
                                        <h2 className="heading--title">Hosted By</h2>
                                    </div>
                                    <div className="feature--content">
                                        <p>coorgexpress.com</p>
                                          <p><strong>T</strong> - +91 (963) 2338 11</p>
                                          <p><strong>M</strong> - info@coorgexpress.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                  <div className="property-single-desc inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">Overview</h2>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <div className="feature-panel">
                                    <div className="feature--img">
                                        <img src="assets/images/property-single/features/1.png" alt="icon" />
                                    </div>
                                    <div className="feature--content">
                                        <h5>12 Guests</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <div className="feature-panel">
                                    <div className="feature--img">
                                        <img src="assets/images/property-single/features/1.png" alt="icon" />
                                    </div>
                                    <div className="feature--content">
                                        <h5>3 Beds</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <div className="feature-panel">
                                    <div className="feature--img">
                                        <img src="assets/images/property-single/features/1.png" alt="icon" />
                                    </div>
                                    <div className="feature--content">
                                        <h5>2 Baths</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <div className="feature-panel">
                                    <div className="feature--img">
                                        <img src="assets/images/property-single/features/1.png" alt="icon" />
                                    </div>
                                    <div className="feature--content">
                                        <h5>Pet Friendly</h5>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="property--details">
                                    <p>Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="property-single-features inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">Amenities</h2>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Center Cooling</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Balcony</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Pet Friendly</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Fire Alarm</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Modern Kitchen</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Storage</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Heating</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Pool</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Laundry</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Gym</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Elevator</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4">
                                <div className="feature-item">
                                    <p>Dish Washer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    
                    <div className="property-single-reviews inner-box room-details">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">Rooms</h2>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <ul className="property-review">
                                    <li className="review-comment row">
                                          <div className="col-xs-10">
                                            <div className="avatar">R</div>
                                            <div className="comment">
                                                <h6>Room 1</h6>
                                                <div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                            </div>
                                        </div>
                                          <div className="col-xs-2">
                                              Book Now
                                        </div>
                                    </li>
                                    <li className="review-comment row">
                                          <div className="col-xs-10">
                                            <div className="avatar">S</div>
                                            <div className="comment">
                                                <h6>Room 2</h6>
                                                <div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                            </div>
                                        </div>
                                          <div className="col-xs-2">
                                              Book Now
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                      <div className="property-single-design inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">More Details</h2>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="accordion accordion-1" id="accordion01">
                                    <div className="panel">
                                        <div className="panel--heading clearfix">
                                            <div className="pull-left">
                                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" href="#collapse01-1">First Floor</a>
                                            </div>
                                            <div className="pull-right">
                                                <ul className="list-unstyled list-inline mb-0">
                                                    <li><span>Size:</span>635 sq ft</li>
                                                    <li><span>Rooms:</span>3</li>
                                                    <li><span>Baths:</span>1</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="collapse01-1" className="panel--body panel-collapse collapse in">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                                            <img src="assets/images/property-single/1.png" alt="img" className="img-responsive" />
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel--heading clearfix">
                                            <div className="pull-left">
                                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" href="#collapse01-2">Second Floor</a>
                                            </div>
                                            <div className="pull-right">
                                                <ul className="list-unstyled list-inline mb-0">
                                                    <li><span>Size:</span>635 sq ft</li>
                                                    <li><span>Rooms:</span>3</li>
                                                    <li><span>Baths:</span>1</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="collapse01-2" className="panel--body panel-collapse collapse">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                                            <img src="assets/images/property-single/1.png" alt="img" className="img-responsive" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-single-video inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">Video</h2>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="video--content text-center">
                                    <div className="bg-section">
                                        <img src="assets/images/video/1.jpg" alt="Background" />
                                    </div>
                                    <div className="video--button">
                                        <div className="video-overlay">
                                            <div className="pos-vertical-center">
                                                <a className="popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                                        <i className="fa fa-youtube-play"></i>  
                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-single-location inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">Location</h2>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <ul className="list-unstyled mb-20">
                                    <li><span>Address:</span>1220 Petersham Town</li>
                                    <li><span>City:</span>Sydney</li>
                                    <li><span>Country:</span>Australia</li>
                                    <li><span>State:</span>Newcastle</li>
                                    <li><span>Zip/Postal code:</span>54330</li>
                                </ul>
                            </div>
                             

                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div id="googleMap" style={{width:"100%",height:"380px"}}></div>
                            </div>
                             
                        </div>
                         
                    </div>
                     

                    <div className="property-single-reviews inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">3 Reviews</h2>
                                </div>
                            </div>
                             
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <ul className="property-review">
                                    <li className="review-comment">
                                        <div className="avatar">R</div>
                                        <div className="comment">
                                            <h6>Ryan Printz</h6>
                                            <div className="date">Feb 12, 2018</div>
                                            <div className="property-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                        </div>
                                    </li>
                                     
                                    <li className="review-comment">
                                        <div className="avatar">S</div>
                                        <div className="comment">
                                            <h6>Steve Martin</h6>
                                            <div className="date">Jan 16, 2018</div>
                                            <div className="property-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                        </div>
                                    </li>
                                     
                                    <li className="review-comment">
                                        <div className="avatar">N</div>
                                        <div className="comment">
                                            <h6>Nicole Smith</h6>
                                            <div className="date">Nov 25, 2017</div>
                                            <div className="property-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                        </div>
                                    </li>
                                     
                                </ul>
                                
                            </div>
                             
                        </div>
                         
                    </div>
                    

                    <div className="property-single-leave-review inner-box">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading">
                                    <h2 className="heading--title">Leave a Review</h2>
                                </div>
                            </div>
                             
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <form id="post-comment" className="mb-0">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label for="review-name">Your Name*</label>
                                                <input type="text" className="form-control" name="review-name" id="review-name" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label for="review-email">Your Email*</label>
                                                <input type="email" className="form-control" name="review-email" id="review-email" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label>Rating*</label>
                                                <div className="property-rating">
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label for="review-comment">Review*</label>
                                                <textarea className="form-control" id="review-comment" rows="2" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <button type="submit" className="btn btn--primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                             
                        </div>
                         
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="widget widget-request">
                        <div className="widget--title">
                            <h5><span><i className="fa fa-rupee"></i> 6100.00</span> per night</h5>
                              <hr />
                        </div>
                        <div className="widget--content">
                            <form className="mb-0">
                                <div className="form-group">
                                    <label for="contact-name">Your Name*</label>
                                    <input type="text" className="form-control" name="contact-name" id="contact-name" required />
                                </div>
                                 
                                <div className="form-group">
                                    <label for="contact-email">Email Address*</label>
                                    <input type="email" className="form-control" name="contact-email" id="contact-email" required />
                                </div>
                                 
                                <div className="form-group">
                                    <label for="contact-phone">Phone Number</label>
                                    <input type="text" className="form-control" name="contact-phone" id="contact-phone" placeholder="(optional)" />
                                </div>
                                 
                                <div className="form-group">
                                    <label for="message">Message*</label>
                                    <textarea className="form-control" name="contact-message" id="message" rows="2" placeholder="(optional)"></textarea>
                                </div>
                                 
                                <input type="submit" value="Book Now" name="submit" className="btn btn--success mb-20" style={{width: "275px" , background: "#34a20d" , color: "#fff"}} />
                            </form>
                        </div>
                    </div>
                    
                    <div className="widget widget-mortgage-calculator">
                        <div className="widget--title">
                            <h5>Enquiry</h5>
                        </div>
                        <div className="widget--content">
                            <form className="mb-0">
                                <div className="form-group">
                                    <label for="sale-price">Sale Price</label>
                                    <input type="text" className="form-control" name="sale-price" id="sale-price" placeholder="$" />
                                </div>
                                 
                                <div className="form-group">
                                    <label for="down-payment">Down Payment</label>
                                    <input type="text" className="form-control" name="down-payment" id="down-payment" placeholder="$" />
                                </div>
                                 
                                <div className="form-group">
                                    <label for="term">Term</label>
                                    <input type="text" className="form-control" name="term" id="term" placeholder="years" />
                                </div>
                                 
                                <div className="form-group">
                                    <label for="interest-rate">Interest Rate</label>
                                    <input type="text" className="form-control" name="interest-rate" id="interest-rate" placeholder="%" />
                                </div>
                                 
                                <input type="submit" value="Enquiry" name="submit" className="btn btn--primary btn--block" />
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </section>
    
    <section id="properties-carousel" className="properties-carousel pt-0">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="heading heading-2  mb-70">
                        <h2 className="heading--title">Similar Properties</h2>
                    </div>
                    
                </div>
                 
            </div>
             
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="carousel carousel-dots" data-slide="3" data-slide-rs="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                        
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                        <img src="assets/images/properties/3.jpg" alt="property image" className="img-responsive" />
                        <span className="property--status">For Sale</span>
</a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">Apartment in Long St.</a></h5>
                                    <p className="property--location">34 Long St, Jersey City, NJ 07305</p>
                                    <p className="property--price">$70,000</p>
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
                        
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                        <img src="assets/images/properties/11.jpg" alt="property image" className="img-responsive" />
                        <span className="property--status">For Sale</span>
                        </a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">Villa in Chicago IL</a></h5>
                                    <p className="property--location">1445 N State Pkwy, Chicago, IL 60610</p>
                                    <p className="property--price">$235,000</p>
                                </div>
                                
                                <div className="property--features">
                                    <ul className="list-unstyled mb-0">
                                        <li><span className="feature">Beds:</span><span className="feature-num">3</span></li>
                                        <li><span className="feature">Baths:</span><span className="feature-num">2</span></li>
                                        <li><span className="feature">Area:</span><span className="feature-num">1120 sq ft</span></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                        <img src="assets/images/properties/5.jpg" alt="property image" className="img-responsive" />
                        <span className="property--status">For Rent</span>
                        </a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">2750 House in Urban St.</a></h5>
                                    <p className="property--location">2750 Urban Street Dr, Anderson, IN 46011</p>
                                    <p className="property--price">$1,550<span className="time">month</span></p>
                                </div>
                                
                                <div className="property--features">
                                    <ul className="list-unstyled mb-0">
                                        <li><span className="feature">Beds:</span><span className="feature-num">2</span></li>
                                        <li><span className="feature">Baths:</span><span className="feature-num">2</span></li>
                                        <li><span className="feature">Area:</span><span className="feature-num">1390 sq ft</span></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                        <img src="assets/images/properties/4.jpg" alt="property image" className="img-responsive" />
                        <span className="property--status">For Sale</span>
                        </a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">House in Kent Street</a></h5>
                                    <p className="property--location">127 Kent Street, Sydney, NSW 2000</p>
                                    <p className="property--price">$130,000</p>
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
                        
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                        <img src="assets/images/properties/2.jpg" alt="property image" className="img-responsive" />
                        <span className="property--status">For Rent</span>
</a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">Villa in Oglesby Ave</a></h5>
                                    <p className="property--location">1035 Oglesby Ave, Chicago, IL 60617</p>
                                    <p className="property--price">$130,000<span className="time">month</span></p>
                                </div>
                                
                                <div className="property--features">
                                    <ul className="list-unstyled mb-0">
                                        <li><span className="feature">Beds:</span><span className="feature-num">4</span></li>
                                        <li><span className="feature">Baths:</span><span className="feature-num">3</span></li>
                                        <li><span className="feature">Area:</span><span className="feature-num">800 sq ft</span></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="property-item">
                            <div className="property--img">
                                <a href="#">
                        <img src="assets/images/properties/3.jpg" alt="property image" className="img-responsive" />
                        <span className="property--status">For Sale</span>
</a>
                            </div>
                            <div className="property--content">
                                <div className="property--info">
                                    <h5 className="property--title"><a href="#">Apartment in Long St.</a></h5>
                                    <p className="property--location">34 Long St, Jersey City, NJ 07305</p>
                                    <p className="property--price">$70,000</p>
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
                     
                </div>
                 
            </div>
            
        </div>
         
    </section>
    </>
    )
}

export default PropertyListing