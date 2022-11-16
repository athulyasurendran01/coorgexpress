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
import { useParams, useNavigate } from 'react-router-dom';
import { propertyData, getPropertyDetail } from '../../reducers/propertyDetail';
import ImageSliderComponent from '../PropertyDetail/ImageSliderComponent';
import { serverURL_ } from "../../app/Config"
import Loader from "../Loader/Loader";

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

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams();

    const [message, setMessage] = useState('')
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [no_guest, setPerson] = useState(0);
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
    const response = useSelector(propertyData);
    const experienceDetails = response.value;
    const loadingStatus = response.status;

    useEffect(() => {
        dispatch(getPropertyDetail({ type: 'experience', id: params.id }))
    }, [])

    const booknow = () => {
        setMessage("")

        if (no_guest <= 0 || dateRange[0] == null || dateRange[1] == null) {
            setMessage("Please check the input")
            return;
        }

        let bannerURL = `${serverURL_}/${experienceDetails.files[0].file_path}/${experienceDetails.files[0].file_name}`
        const bookingDetails = {
            name: experienceDetails.data[0].name,
            image: bannerURL,
            daterange: dateRange,
            check_in_time: experienceDetails.data[0].check_in_time,
            check_out_time: experienceDetails.data[0].check_out_time,
            no_guest: no_guest,
            total: experienceDetails.data[0].event_price
        }
        navigate('/booking', { state: bookingDetails })
    }

    if (!loadingStatus) {
        return (
            <>
                <Loader />
            </>
        )
    } else {
        if (experienceDetails &&
            experienceDetails.data &&
            experienceDetails.data.length > 0) {
            let bannerURL = `${serverURL_}/${experienceDetails.files[0].file_path}/${experienceDetails.files[0].file_name}`

            return (
                <>
                    <section id="page-title" className="page-title">
                        <div className="bg-section">
                            <img src={bannerURL} alt="Background"
                                style={{
                                    height: "500px",
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </section>

                    <section id="property-single-gallery" className="property-single-gallery">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="property-single-gallery-info">
                                        <div className="property--info clearfix">
                                            <div className="pull-left">
                                                <h5 className="property--title">{experienceDetails.data[0].name}</h5>
                                                <p className="property--location" style={{ "margin-bottom": "15px" }}>{experienceDetails.data[0].address}</p>
                                                { /*<p className="property--location">Address Address </p>*/}
                                                <p>
                                                    <span className="property--status"><i className="fa fa-pencil"></i>
                                                        <span>{experienceDetails.data[0].trialtype_name} </span>
                                                        <span>|</span> <i className="fa fa fa-pencil"></i> <span>{experienceDetails.data[0].duration} Hours</span></span>
                                                </p>
                                            </div>
                                            <div className="pull-right verified-listing" style={{textAlign: "end"}}>
                                                <input type="submit" value="Verified Listing" name="submit" className="btn btn--success mb-20" style={{ width: "275px", background: "#34a20d", color: "#fff" }} />
                                                <div className="property-rating" style={{ "margin-top": "0px", "margin-bottom": "20px" }}>
                                                    <span>Hosted By : </span>{experienceDetails.data[0].hosted_by}
                                                </div>
                                                <p className="property--status"><i className="fa fa-phone"></i> <span>{experienceDetails.data[0].host_contact_no}</span>
                                                    <span>|</span> <i className="fa fa-envelope"></i> <span>{experienceDetails.data[0].host_contact_email}</span>
                                                </p>
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
                                                <ImageSliderComponent images={experienceDetails.files} />
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
                                                    <p>{experienceDetails.data[0].about_experience}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="property-single-desc inner-box property-det">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="feature-panel">
                                                    <div className="heading">
                                                        <h2 className="heading--title">Inclusion</h2>
                                                    </div>
                                                    <div>
                                                        {experienceDetails.data[0].includes_in &&
                                                            experienceDetails.data[0].includes_in.split(',').map(item => {
                                                                return <p>{item}</p>
                                                            })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="feature-panel">
                                                    <div className="heading">
                                                        <h2 className="heading--title">Who can attend</h2>
                                                    </div>
                                                    <div>
                                                        {experienceDetails.data[0].who_can_attend &&
                                                            experienceDetails.data[0].who_can_attend.split(',').map(item => {
                                                                return <p>{item}</p>
                                                            })}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            
                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                <div className="feature-panel upcoming-slots">
                                                    <div className="heading">
                                                        <h2 className="heading--title">Upcoming Availability</h2>
                                                    </div>
                                                    <div className='slot-availability'>
                                                        <p>08.00AM - 01.00PM <span className='amount'>Rs. 3000</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="property-single-design inner-box">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="heading"
                                                    style={{
                                                        marginBottom : "20px"
                                                    }}
                                                >
                                                    <h2 className="heading--title">Tour Notes</h2>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                    <div className="property--details">
                                                        <p>{experienceDetails.data[0].about_host}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="heading"
                                                    style={{
                                                        marginBottom : "20px"
                                                    }}
                                                >
                                                    <h2 className="heading--title">Things to Bring/Carry</h2>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                    <div className="property--details">
                                                        <p>{experienceDetails.data[0].about_host}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="heading"
                                                    style={{
                                                        marginBottom : "20px"
                                                    }}
                                                >
                                                    <h2 className="heading--title">Cancellation Policy</h2>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                    <div className="property--details">
                                                        <p>{experienceDetails.data[0].about_host}</p>
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
                                                <ReactPlayer url='https://youtu.be/A2p8CuTt4_Y' width="100%" />
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
                                                    <iframe src={`https://maps.google.com/maps?q=${experienceDetails.data[0].latitude}, ${experienceDetails.data[0].longitude}&z=15&output=embed`} width="100%" height="450" ></iframe>
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
                                            <h5><span><i className="fa fa-rupee"></i> {experienceDetails.data[0].event_price}</span> per night</h5>
                                            <hr />
                                        </div>
                                        <div className="widget--content">
                                            <form className="mb-0">
                                                <div className="form-group">
                                                    <label for="contact-name">Pick a Date*</label>
                                                    <input type="date" className="form-control" name="date" id="date" placeholder="Date" />
                                                    {/*
                                                    <DatePicker selectsRange={true}
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        onChange={(update) => {
                                                            setDateRange(update);
                                                        }}
                                                        minDate={new Date()}
                                                        isClearable={true}
                                                        style={{ zIndex: 1 }}
                                                    />
                                                    */}
                                                </div>
                                                <div className="form-group col-lg-12" 
                                                    style={{
                                                        marginBottom : "0px"
                                                    }}
                                                >
                                                <label for="">Available Slots</label>
                                                </div>
                                                <div className="form-group col-lg-12" 
                                                    style={{
                                                        marginBottom : "0px"
                                                    }}
                                                >
                                                    <input type="radio" name="slots" id=""  
                                                        style={{
                                                            marginRight : "20px"
                                                        }}
                                                    />
                                                    <label> 12:00 PM − 11:00 AM</label>
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <input type="radio" name="slots" id=""   
                                                        style={{
                                                            marginRight : "20px"
                                                        }}
                                                    />
                                                   <label> 01:00 PM − 12:00 PM</label> 
                                                </div>
                                                <div className="form-group">
                                                    <label for="contact-email">No of Person*</label>
                                                    <input type="number" className="form-control"
                                                        name="contact-email"
                                                        onChange={(e) => setPerson(e.target.value)}
                                                        id="contact-email" required />
                                                </div>
                                                <span style={{ color: 'red' }}>{message}</span>
                                                <input type="submit" value="Book Now" name="submit"
                                                    className="btn btn--success mb-20"
                                                    onClick={booknow}
                                                    style={{ width: "100%", background: "#34a20d", color: "#fff", zIndex: 0 }} />
                                            </form>
                                        </div>
                                    </div>

                                    <div className="widget widget-mortgage-calculator">
                                    <div className="widget--title">
                                            <h5>Enquiry</h5>
                                        </div>
                                        <div className="widget--content">
                                            <form className="mb-0 row">
                                                <div className="form-group col-lg-6">
                                                    <label for="date">Date</label>
                                                    <input type="date" className="form-control" name="date" id="date" placeholder="Date" />
                                                </div>

                                                <div className="form-group col-lg-6">
                                                    <label for="adults">Adults: &gt; 12</label>
                                                    <input type="text" className="form-control" name="adults" id="adults" placeholder="Adults" />
                                                </div>

                                                <div className="form-group col-lg-12">
                                                    <input type="checkbox" name="lang"  
                                                        style={{
                                                            marginRight : "20px"
                                                        }}
                                                    />
                                                    12:00 PM − 11:00 AM ₹ 3,333(per person)
                                                </div>

                                                <div className="form-group col-lg-12">
                                                    <label for="price">Final Price</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control price-box" 
                                                        name="price" 
                                                        id="price" 
                                                        placeholder='Rs. 3333'
                                                        disabled 
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#fff"
                                                        }}
                                                    />
                                                </div>

                                                <div className="form-group col-lg-6">
                                                    <label for="name">Name</label>
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                </div>

                                                <div className="form-group col-lg-6">
                                                    <label for="contact-no">Contact Number</label>
                                                    <input type="text" className="form-control" name="contact-no" id="contact-no" placeholder="Contact Number" />
                                                </div>

                                                <div className="form-group col-lg-12">
                                                    <label for="email">Email</label>
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                </div>

                                                <div className="form-group col-lg-12">
                                                    <label for="message">Message</label>
                                                    <textarea className="form-control" name="message" id="message" placeholder="Message"></textarea>
                                                </div>

                                                <input type="button" value="Enquiry" name="submit"  className="btn btn--primary btn--block" />
                                            </form>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/*<section id="properties-carousel" className="properties-carousel pt-0">
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
                    </section>*/}
                </>
            )
        } else {
            return (
                <p></p>
            )
        }
    }
}

export default ExperienceDetail