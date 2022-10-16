import PropertyBanner from '../../assets/images/property/property_banner.jpg';
import PropertyImage from '../../assets/images/property/property_image.jpg';
import './ExperienceDetail.css';
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { propertyData, getPropertyDetail } from '../../reducers/propertyDetail';
import ImageSliderComponent from '../PropertyDetail/ImageSliderComponent';

const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function ExperienceDetail() {

    const [dateRange, setDateRange] = useState([null, null]);
    const dispatch = useDispatch();
    const params = useParams();

    const [startDate, endDate] = dateRange;
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

    // Get product detail API
    const experienceDetails = useSelector(propertyData)

    useEffect(() => {
        dispatch(getPropertyDetail({ type: 'experience', id: params.id }))
    }, [])

    if (experienceDetails) {
        return (
            <>
                <section id="page-title" className="page-title">
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
                                            <h5 className="property--title">{experienceDetails.Experience.name}</h5>
                                            <p className="property--location" style={{ "margin-bottom": "15px" }}>{experienceDetails.Experience.address}</p>
                                            { /*<p className="property--location">Address Address </p>*/}
                                            <p>
                                                <span className="property--status"><i className="fa fa-pencil"></i> <span>{experienceDetails.TrailType.name} </span>
                                                    <span>|</span> <i className="fa fa fa-pencil"></i> <span>{experienceDetails.Experience.duration} Hours</span></span>
                                            </p>
                                        </div>
                                        <div className="pull-right verified-listing">
                                            <input type="submit" value="Verified Listing" name="submit" className="btn btn--success mb-20" style={{ width: "275px", background: "#34a20d", color: "#fff" }} />
                                            <div className="property-rating" style={{ "margin-top": "0px", "margin-bottom": "20px" }}>
                                                <span>Hosted By : </span>{experienceDetails.Experience.hosted_by}
                                            </div>
                                            <span className="property--status"><i className="fa fa-phone"></i> <span>{experienceDetails.Experience.host_contact_no}</span>
                                                <span>|</span> <i className="fa fa-envelope"></i> <span>{experienceDetails.Experience.host_contact_email}</span></span>
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
                                            <ImageSliderComponent images={experienceDetails.ExperienceFile} />
                                        </div>
                                    </div>
                                </div>

                                <div className="property-single-desc inner-box">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading" style={{ "margin-bottom": "25px" }}>
                                                <h2 className="heading--title">Overview</h2>
                                            </div>
                                        </div>


                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="property--details">
                                                <p>{experienceDetails.Experience.about_experience}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="property-single-desc inner-box property-det">
                                    <div className="row">
                                        <div className="col-xs-4 col-sm-4 col-md-4">
                                            <div className="feature-panel">
                                                <div className="heading">
                                                    <h2 className="heading--title">Inclusion</h2>
                                                </div>
                                                <div>
                                                    {experienceDetails.Experience.includes_in &&
                                                        experienceDetails.Experience.includes_in.split(',').map(item => {
                                                            return <p>{item}</p>
                                                        })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4">
                                            <div className="feature-panel">
                                                <div className="heading">
                                                    <h2 className="heading--title">Who can attend</h2>
                                                </div>
                                                <div>
                                                    {experienceDetails.Experience.who_can_attend &&
                                                        experienceDetails.Experience.who_can_attend.split(',').map(item => {
                                                            return <p>{item}</p>
                                                        })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4">
                                            <div className="feature-panel">
                                                <div className="heading">
                                                    <h2 className="heading--title">Upcoming Availability</h2>
                                                </div>
                                                <div>
                                                    <p>08.00AM - 01.00PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="property-single-design inner-box">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">Tour Notes</h2>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="property--details">
                                                    <p>{experienceDetails.Experience.about_host}</p>
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
                                            <ReactPlayer url='https://www.youtube.com/watch?v=nrJtHemSPW4' />
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
                                            <div className="google-map-code">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: 0 }} aria-hidden="false" tabIndex="0"></iframe>
                                            </div>
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
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                        <div className="form-group">
                                                            <label for="review-comment">Review*</label>
                                                            <textarea value="" className="form-control" cols="30" rows="5"> </textarea>
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
                                        <h5><span><i className="fa fa-rupee"></i> {experienceDetails.Experience.event_price}</span> per night</h5>
                                        <hr />
                                    </div>
                                    <div className="widget--content">
                                        <form className="mb-0">
                                            <div className="form-group">
                                                <label for="contact-name">Pick a Date Range*</label>
                                                <DatePicker selectsRange={true}
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    onChange={(update) => {
                                                        setDateRange(update);
                                                    }}
                                                    isClearable={true}
                                                />

                                            </div>

                                            <div className="form-group">
                                                <label for="contact-email">No of Person*</label>
                                                <input type="email" className="form-control" name="contact-email" id="contact-email" required />
                                            </div>

                                            <input type="submit" value="Book Now" name="submit" className="btn btn--success mb-20" style={{ width: "100%", background: "#34a20d", color: "#fff" }} />
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
                                <Carousel responsive={responsive1} autoPlaySpeed={4000} transitionDuration={200}
                                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                                    infinite={true}
                                    swipeable={false}
                                    draggable={true}
                                    showDots={true}
                                    ssr={false}
                                    autoPlay={true}>

                                    <div className="property-item">
                                        <div className="property--img">
                                            <a href="#">
                                                <img src={PropertyImage} alt="property image" className="img-responsive" />
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
                                                <img src={PropertyImage} alt="property image" className="img-responsive" />
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
                                                <img src={PropertyImage} alt="property image" className="img-responsive" />
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
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <p></p>
        )
    }
}

export default ExperienceDetail