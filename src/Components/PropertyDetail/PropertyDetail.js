import PropertyBanner from '../../assets/images/property/property_banner.jpg';
import './PropertyDetail.css';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import ImageSliderComponent from './ImageSliderComponent';

import { useSelector, useDispatch } from 'react-redux';
import { propertyData, getPropertyDetail } from '../../reducers/propertyDetail';

function PropertyDetail() {

    const dispatch = useDispatch();
    const params = useParams();


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


    //Get product detail API
    const propertyDetails = useSelector(propertyData)

    console.log(propertyDetails)
    useEffect(() => {
        dispatch(getPropertyDetail(params.id))
    }, [])

    if (propertyDetails) {
        let bannerURL = `https://www.coorgexpress.com/${propertyDetails.HomestayFile.file_path}/${propertyDetails.HomestayFile.file_name}`
        return (
            <>
                <section id="page-title" className="page-title bg-overlay bg-overlay-dark2" style={{ "height": "75vh" }}>
                    <div className="bg-section">
                        <img src={bannerURL} alt="Background" width="100%"/>
                    </div>
                </section>

                <section id="property-single-gallery" className="property-single-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="property-single-gallery-info">
                                    <div className="property--info clearfix">
                                        <div className="pull-left">
                                            <h5 className="property--title">{propertyDetails.Homestay.name}</h5>
                                            <p className="property--location">{propertyDetails.Homestay.address} </p>
                                            {/* <p className="property--location">Address Address </p> */}
                                        </div>
                                        <div className="pull-right verified-listing">
                                            <input type="submit" value="Verified Listing" name="submit" className="btn btn--success mb-20" style={{ width: "275px", background: "#34a20d", color: "#fff" }} />
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
                        <ImageSliderComponent images={propertyDetails.HomestayFile}/>
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
    } else {
        return (
            <p></p>
        )
    }
}

export default PropertyDetail