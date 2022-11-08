import Banner from "../../Common/Banner"
import './OurStory.css'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { homeBasics, getHomepage } from '../../../reducers/homeBasic';
import ImageSliderComponent from "../../PropertyDetail/ImageSliderComponent";
import Loader from "../../Loader/Loader";

function OurStory() {
    const dispatch = useDispatch();
    const response = useSelector(homeBasics);
    const homeBasic = response.value;
    const loadingStatus = response.status;

    useEffect(() => {
        dispatch(getHomepage(0))
    }, [])

    if (!loadingStatus) {
        return (
            <>
                <Loader />
            </>
        )
    } else {
        return (
            <>
                <Banner category={'about'} />
                <section id="property-single-gallery" className="property-single-gallery">
                    <div className="container">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="property-single-carousel inner-box about-page-sec">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">Together Everyone Achieves More</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>Coorgexpress, that started out as a travel portal exclusively for Coorg has now found it calling in several other destinations of Western Ghats. Coorgexpress was started by Ricky Monnappa, the founder of organisation as a final year project for his master’s with a passion to change the way people travelled to Coorg.</p>
                                                <p>We fix you a holiday, " a pretty good one we must say! ".</p>
                                                <p>We, the team of Coorgexpress is vigorously into promoting the authentic cultural heritage of Coorg in terms of food, homemade wines and several other homemade products exclusively marketed to encourage and bring into picture the best and rich produce of this land. Coorgexpress has been actively participating in sharing cultural and social responsibilities.</p>
                                                <p>We have also undertaken an initiative of Clean Coorg Campaign to create awareness not only about cleanliness around Coorg, but also to make people (both hosts and tourists) aware of the responsible and sustainable tourism to help conserve the monuments, the environment, the wildlife and the holy Kaveri. Unlike other travel portals we not only thrive in giving out the best of stays, but we also bring the best of adventures and experiences to our customers looking for a perfect vacation. The very essence of the land of Coorg, the nature can be experienced in its best form through various adventure activities exclusively hosted by us. The stays are handpicked and experienced by the team and qualify as the best around Coorg to make your stay well worth it. We aim at bringing Coorg and its exquisiteness on the World tourism.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12" style={{ "margin-top": "50px" }}>
                                            <ImageSliderComponent images={homeBasic.sliders ? homeBasic.sliders : []} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 text-left prev-page">
                                            <a href="about-coorg">
                                                <h3><i className="fa fa-arrow-left"></i>About Coorg</h3>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 text-right next-page">
                                            <a href="why-coorg">
                                                <h3>Why Coorgexpress<i className="fa fa-arrow-right"></i></h3>
                                            </a>
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

}

export default OurStory