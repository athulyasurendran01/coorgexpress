import PropertyImage from '../../assets/images/property/property_image.jpg';
import './PropertyDetail.css';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import ImageSliderComponent from './ImageSliderComponent';
import { serverURL_ } from "../../app/Config"

import { useSelector, useDispatch } from 'react-redux';
import { propertyData, getPropertyDetail, sendMail } from '../../reducers/propertyDetail';

import guests from '../../assets/images/property/icons/guests.png'
import beds from '../../assets/images/property/icons/beds.png'
import baths from '../../assets/images/property/icons/baths.png'
import pet_friendly from '../../assets/images/property/icons/pet-friendly.png'
import ReactPlayer from 'react-player'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../Loader/Loader";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Total amount based on the room selected or the entire banglw So childern price is not neccessary

import { Container, Row, Col } from 'react-bootstrap';
import RoomList from '../Common/RoomList';

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


function PropertyDetail() {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate()

    const [dateRange, setDateRange] = useState([null, null]);
    const [no_guest, setPerson] = useState(0);
    const [no_guest_child, setChild] = useState(0);
    // const [no_guest_infant, setInfant] = useState(0);
    const [startDate, endDate] = dateRange;
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('')
    const [isChecked, setChecked] = useState(false)
    const [extraBedNo, setExtraBed] = useState(0)
    const [extraBedTotal, setExtraBedTotal] = useState(0)
    const [isExtraChecked, setExtraChecked] = useState(false)

    const [input0, setEnqInput0] = useState()
    const [input1, setEnqInput1] = useState()
    const [input2, setEnqInput2] = useState()
    const [input3, setEnqInput3] = useState()
    const [input4, setEnqInput4] = useState()
    const [input5, setEnqInput5] = useState()
    const [input6, setEnqInput6] = useState()
    const [input7, setEnqInput7] = useState()
    const [input8, setEnqInput8] = useState()

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselInner = useRef(null);

    const location = useLocation();
    const selectedRooms = location.state;

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

    //Get product detail API
    const response = useSelector(propertyData);
    const propertyDetails = response.value;
    const loadingStatus = response.status;

    useEffect(() => {
        dispatch(getPropertyDetail({ type: 'stay', id: params.id }))
    }, [])

    useMemo(() => {
        let max_no_person = parseInt(no_guest) + parseInt(no_guest_child)
        if (propertyDetails.data && propertyDetails.data[0].max_no_of_guest < max_no_person) {
            setMessage(`${propertyDetails.data[0].max_no_of_guest} is the Maximum number guest.`)
        } else {
            setMessage('')
        }
    }, [no_guest, no_guest_child]);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setRooms((prev) => [...prev, value]);
        } else {
            setRooms((prev) => prev.filter((x) => x !== value));
        }
    };

    const handleExtrabedChange = (count, total) => {
        setExtraBed(count)
        setExtraBedTotal(total)
    }

    const roomRent = () => {
        let roomPrice = 0;
        rooms.map(room => {
            roomPrice += parseFloat(propertyDetails.rooms[room].room_base_price)
        })
        return roomPrice
    }

    const sendEnquiry = () => {
        let data = new FormData();
        data.append("date1", input0);
        data.append("date2", input1);
        data.append("adult", input2);
        data.append("children", input3);
        data.append("extra_bd", extraBedNo);
        data.append("extrabedPrice", extraBedTotal);
        data.append("name", input5);
        data.append("contact", input6);
        data.append("email", input7);
        data.append("message", input8);
        data.append("finalprice", ((rooms.length && rooms.length > 0) ? roomRent() : propertyDetails.data[0].base_price) + extraBedTotal);
        data.append("roomrent", (rooms.length && rooms.length > 0) ? roomRent() : propertyDetails.data[0].base_price);
        dispatch(sendMail(data))
    }

    const booknow = () => {
        setMessage("")
        let max_no_person = parseInt(no_guest) + parseInt(no_guest_child)

        if (no_guest <= 0 || dateRange[0] == null || dateRange[1] == null) {
            setMessage("Please fill all the details")
            return;
        }

        // if (rooms.length <= 0) {
        //     setMessage(`Please select room.`)
        //     return;
        // }

        // if (isChecked && extraBedNo <= 0) {
        //     setMessage(`Please add number of extra bed required.`);
        //     return;
        // }

        if (propertyDetails.data[0].max_no_of_guest < max_no_person) {
            setMessage(`${propertyDetails.data[0].max_no_of_guest} is the Maximum number guest.`)
            return;
        }

        let bannerURL = `${serverURL_}/${propertyDetails.data[0].file_path}/${propertyDetails.data[0].file_name}`
        const bookingDetails = {
            name: propertyDetails.data[0].name,
            image: bannerURL,
            daterange: dateRange,
            check_in_time: propertyDetails.data[0].check_in_time,
            check_out_time: propertyDetails.data[0].check_out_time,
            no_guest: no_guest,
            no_guest_child: no_guest_child,
            // no_guest_infant: no_guest_infant,
            total: (rooms.length && rooms.length > 0) ? roomRent() : propertyDetails.data[0].base_price,
            category: 'stay',
            extraBedNo: extraBedNo,
            extrabedPrice: extraBedTotal
        }
        navigate('/booking', { state: bookingDetails })
    }

    const checkAvailability = (id) => {
        if(!selectedRooms){
            return false
        }
        if (selectedRooms.status == -1) {
            return true
        } else if (selectedRooms.status == 0) {
            return false
        } else {
            const searchObject = selectedRooms.roomdata && selectedRooms.roomdata.find((property) => property.id == id);
            if (searchObject) {
                return true
            } else {
                return false
            }
        }
    }

    if (!loadingStatus) {
        return (
            <>
                <Loader />
            </>
        )
    } else {
        if (propertyDetails) {
            let bannerURL = `${serverURL_}/${propertyDetails.data[0].file_path}/${propertyDetails.data[0].file_name}`
            return (
                <>
                    <section id="page-title" className="page-title" >
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
                    {/*
                    <section id="page-title" className="page-title bg-overlay bg-overlay-dark2">
                        <div className="bg-section">
                            <img src={bannerURL} alt="Background" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                    <div className="title title-1 text-center">
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    */}
                    {/*
                    <section id="page-title" className="page-title bg-overlay bg-overlay-dark2">
                        <div className="bg-section">
                            <img src={bannerURL} alt="Background" style={{ width: "100%" }} />
                        </div>
                    </section>
                     */}
                    <section id="property-single-gallery" className="property-single-gallery"
                        style={{
                            paddingTop: "60px"
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="property-single-gallery-info">
                                        <div className="property--info clearfix">
                                            <div className="pull-left">
                                                <h5 className="property--title">{propertyDetails.data[0].name}</h5>
                                                <p className="property--location">{propertyDetails.data[0].address} </p>
                                                <p className="property--location">Address Address </p>
                                            </div>
                                            <div className="pull-right verified-listing">
                                                <input
                                                    type="submit"
                                                    value="Verified Listing"
                                                    name="submit"
                                                    className="btn btn--success mb-20"
                                                    style={{
                                                        cursor: "auto",
                                                        width: "275px",
                                                        background: "#34a20d",
                                                        color: "#fff"
                                                    }}
                                                />
                                                <span className="property--status"><i className="fa fa-share-alt"></i> <span>Share</span> <span>|</span> <span onClick={() => window.scrollTo(0, 4800)}><i className="fa fa fa-pencil"></i> <span>Review</span></span></span>
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
                                                <ImageSliderComponent images={propertyDetails.files} />
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
                                                        <p>Check In Timing<span>{propertyDetails.data[0].check_in_time}</span></p>
                                                        <p>Check Out Timing<span>{propertyDetails.data[0].check_out_time}</span></p>
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
                                                        <p><strong>T</strong> - {propertyDetails.data[0].telephone}, {propertyDetails.data[0].mobile1}</p>
                                                        <p><strong>M</strong> - {propertyDetails.data[0].email}</p>
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
                                                        <img src={guests} alt="icon" />
                                                    </div>
                                                    <div className="feature--content">
                                                        <h5>{propertyDetails.data[0].max_no_of_guest} Guests</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-3 col-md-3">
                                                <div className="feature-panel">
                                                    <div className="feature--img">
                                                        <img src={beds} alt="icon" />
                                                    </div>
                                                    <div className="feature--content">
                                                        <h5>{propertyDetails.data[0].no_of_beds} Beds</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-xs-6 col-sm-3 col-md-3">
                                                <div className="feature-panel">
                                                    <div className="feature--img">
                                                        <img src={baths} alt="icon" />
                                                    </div>
                                                    <div className="feature--content">
                                                        <h5>{propertyDetails.data[0].no_of_bathrooms} Baths</h5>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-xs-6 col-sm-3 col-md-3">
                                                <div className="feature-panel">
                                                    <div className="feature--img">
                                                        <img src={pet_friendly} alt="icon" />
                                                    </div>
                                                    <div className="feature--content">
                                                        <h5>Pet Friendly</h5>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="property--details">
                                                    <p>{propertyDetails.data[0].description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="property-single-features inner-box property-single-desc">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="heading">
                                                    <h2 className="heading--title">Amenities</h2>
                                                </div>
                                            </div>
                                            {propertyDetails.amenities && propertyDetails.amenities.map((amenity, idx) => {
                                                return (
                                                    <div className="col-xs-6 col-sm-4 col-md-4" key={idx}>
                                                        <div className="feature-item amenities">
                                                            <p>
                                                                <i className="fa fa-check" aria-hidden="true" />
                                                                {amenity.amenity}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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
                                                <Container className="property-review">
                                                    {propertyDetails.rooms && propertyDetails.rooms.map((room, idx) => {
                                                        return (
                                                            <Row className="review-comment row" key={idx}>
                                                                {/* <Col sm={1}>
                                                                    <input
                                                                        type="checkbox"
                                                                        name="lang"
                                                                        value={idx}
                                                                        onChange={handleChange}
                                                                    />
                                                                </Col> */}
                                                                <Col sm={11}>
                                                                    {/*<div className="avatar">R</div>*/}
                                                                    <div className="comment"
                                                                        style={{ paddingLeft: "0px", display: "grid" }}
                                                                    >
                                                                        <h5>{room.room_no_name} - ₹ {room.room_base_price} {checkAvailability(room.id) ? '' : <span style={{ color: 'red' }}>- Not available</span>}</h5>
                                                                        {/* <div className="property-rating">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                        </div> */}
                                                                        <div>
                                                                            <h6>Type: {room.type} </h6>
                                                                            <h6>Available Beds: {room.no_of_bed} </h6>
                                                                            <h6>Maximum Extra Beds: {room.extra_bed} </h6>
                                                                            <h6>Extra Per Bed Charge:  ₹ {room.extra_bed_charge} </h6>
                                                                        </div>

                                                                        <p>{room.room_description}</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        )
                                                    })}
                                                </Container>
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
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                    <div className="property--details">
                                                        <div dangerouslySetInnerHTML={{ __html: propertyDetails.data[0].other_details }} />
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
                                                    <iframe src={`https://maps.google.com/maps?q=${propertyDetails.data[0].latitude}, ${propertyDetails.data[0].longitude}&z=15&output=embed`} width="100%" height="450" frameBorder="0"></iframe>
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


                                    <div id="review_section" className="property-single-leave-review inner-box">
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
                                        {/* <div className="widget--title">
                                            <h5><span><i className="fa fa-rupee"></i>
                                                {(rooms.length && rooms.length > 0) ? roomRent() : propertyDetails.data[0].base_price}
                                            </span> per night</h5>
                                            <hr />
                                        </div> */}
                                        <div className="widget--content tab-form">
                                            <Tabs
                                                defaultActiveKey="first"
                                                id="fill-tab-example"
                                                className="mb-1"
                                                fill
                                            >
                                                <Tab eventKey="first" title="Book Now">
                                                    <div
                                                        style={{ padding: "10px" }}
                                                    >
                                                        <form className="mb-0">
                                                            <div className="form-group">

                                                                <label for="contact-name">Pick a Date Range*</label>
                                                                <DatePicker selectsRange={true}
                                                                    startDate={startDate}
                                                                    endDate={endDate}
                                                                    minDate={new Date()}
                                                                    onChange={(update) => {
                                                                        setDateRange(update);
                                                                    }}
                                                                    isClearable={true}
                                                                    style={{ zIndex: 1 }}
                                                                />

                                                            </div>

                                                            <div className="form-group">
                                                                <label for="">Adults*</label>
                                                                <input type="number" className="form-control" required
                                                                    onChange={(e) => setPerson(e.target.value)} />
                                                            </div>
                                                            {/* <div className="form-group">
                                                                    <label for="">Infants (0 - 5 years)</label>
                                                                    <input type="number" className="form-control" required
                                                                        onChange={(e) => setInfant(e.target.value)} />
                                                                </div> */}
                                                            <div className="form-group">
                                                                <label for="">Children (6 - 12)</label>
                                                                <input type="number" className="form-control" required
                                                                    onChange={(e) => setChild(e.target.value)} />
                                                            </div>
                                                            {propertyDetails.rooms && <RoomList rooms={propertyDetails.rooms} 
                                                                handleChange={handleChange}
                                                                type="booknow"
                                                                handleExtrabedChange={handleExtrabedChange}
                                                                checkRooms={checkAvailability} />}
                                                            <hr />
                                                            <span style={{ color: 'red' }}>{message}</span>
                                                            <br />
                                                            <button className="btn btn--success mb-20"
                                                                onClick={booknow}
                                                                type="button"
                                                                style={{ marginTop: "10px", width: "100%", background: "#34a20d", color: "#fff", zIndex: 0 }} >
                                                                Book Now
                                                            </button>
                                                        </form>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="second" title="Enquiry">
                                                    <div
                                                        style={{ padding: "10px" }}
                                                    >
                                                        <form className="mb-0 row">
                                                            <div className="form-group col-lg-6">
                                                                <label for="start-date">Start Date</label>
                                                                <input type="date" className="form-control" name="start-date" id="start-date" onChange={(e) => setEnqInput0(e.target.value)} placeholder="Start Date" />
                                                            </div>

                                                            <div className="form-group col-lg-6">
                                                                <label for="end-date">End Date</label>
                                                                <input type="date" className="form-control" name="end-date" id="end-date" onChange={(e) => setEnqInput1(e.target.value)} placeholder="End Date" />
                                                            </div>

                                                            <div className="form-group col-lg-6">
                                                                <label for="adults">Adults: &gt; 12</label>
                                                                <input type="number" className="form-control" name="adults" id="adults" onChange={(e) => setEnqInput2(e.target.value)} placeholder="Adults" />
                                                            </div>

                                                            <div className="form-group col-lg-6">
                                                                <label for="children">Children: &lt; 12</label>
                                                                <input type="number" className="form-control" name="children" id="children" onChange={(e) => setEnqInput3(e.target.value)} placeholder="Children" />
                                                            </div>

                                                            <div className="form-group col-lg-12">
                                                                {propertyDetails.rooms && <RoomList rooms={propertyDetails.rooms} 
                                                                    handleChange={handleChange}
                                                                    type="enquiry"
                                                                    handleExtrabedChange={handleExtrabedChange}
                                                                    checkRooms={checkAvailability} />}
                                                                {/* <div className="input-checkbox">
                                                                        <label className="label-checkbox">
                                                                            <span
                                                                                style={{
                                                                                    marginRight: "10px"
                                                                                }}
                                                                            >Do you want an extra bed?</span>
                                                                            <input type="checkbox"
                                                                                checked={isExtraChecked}
                                                                                onChange={(e) => setExtraChecked(!isExtraChecked)} />
                                                                            {isExtraChecked ? <input type="number"
                                                                                placeholder="Enter number of extra bed" className="form-control"
                                                                                onChange={e => setEnqInput4(e.target.value)} /> : ''}
                                                                            <span className="check-indicator"></span>
                                                                        </label>
                                                                    </div> */}
                                                            </div>

                                                            {/* <div className="form-group col-lg-12">
                                                                    <label for="price">Final Price</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control price-box"
                                                                        name="price"
                                                                        id="price"
                                                                        placeholder={`Rs. ${(rooms.length && rooms.length > 0) ? roomRent() : propertyDetails.data[0].base_price}`}
                                                                        disabled
                                                                        style={{
                                                                            backgroundColor: "#fff",
                                                                            borderColor: "#fff"
                                                                        }}
                                                                    />
                                                                </div> */}

                                                            <div className="form-group col-lg-6">
                                                                <label for="name">Name</label>
                                                                <input type="text" className="form-control" name="name" onChange={(e) => setEnqInput5(e.target.value)} id="name" placeholder="Name" />
                                                            </div>

                                                            <div className="form-group col-lg-6">
                                                                <label for="contact-no">Phone</label>
                                                                <input type="text" className="form-control" name="contact-no" onChange={(e) => setEnqInput6(e.target.value)} id="contact-no" placeholder="Phone" />
                                                            </div>

                                                            <div className="form-group col-lg-12">
                                                                <label for="email">Email</label>
                                                                <input type="email" className="form-control" name="email" id="email" onChange={(e) => setEnqInput7(e.target.value)} placeholder="Email" />
                                                            </div>

                                                            <div className="form-group col-lg-12">
                                                                <label for="message">Message</label>
                                                                <textarea className="form-control" name="message" id="message" onChange={(e) => setEnqInput8(e.target.value)} placeholder="Message"></textarea>
                                                            </div>

                                                            <input type="button" value="Enquiry" name="submit" onClick={() => sendEnquiry()} className="btn btn--primary btn--block" />
                                                        </form>
                                                    </div>
                                                </Tab>
                                            </Tabs>

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

export default PropertyDetail