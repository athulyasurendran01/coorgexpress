import Banner from "../../Common/Banner"
import './ResponsibleTourism.css'
import AboutGallery from "../AboutGallery/AboutGallery"
import { Link } from "react-router-dom"

function ResponsibleTourism() {
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
                                            <h2 className="heading--title">Travel Conduct Policy. A Clean Coorg Initiative.</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>We follow a strict “ Leave No Trace ” policy while visiting Coorg/Western Ghats.</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="heading">
                                            <h2 className="heading--title">PLAN AHEAD & PREPARE</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>Coorg/Western Ghats is a eco sensitive area .Plan your trip by thinking about how it will impact the environment and also how it may affect others as well.</p>

                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="heading">
                                            <h2 className="heading--title">DISPOSE OF WASTE PROPERLY</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>You are responsible for anything you bring into the place. Carry out all your trash.</p>
                                            <p>Pick up trash that others may have missed or that were dropped by accident.</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="heading">
                                            <h2 className="heading--title">MINIMIZE IMPACT</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>Wherever possible, avoid the use of plastic bags and disposable plastic water bottles.</p>
                                            <p>Do not remove/Tamper objects from the natural environment or any site you visit.</p>
                                            <p>Take only pictures, leave only the lightest of footprints, and bring home only memories.</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="heading">
                                            <h2 className="heading--title">RESPECT PEOPLE, PLACE & PRIVACY</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>Travelers are expected to respect others. This includes other travellers, Coorgexpress staff, third-party service providers and the local people and cultures during the visit.</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="heading">
                                            <h2 className="heading--title">RESPONSIBLE TRAVEL WITH INDIGENOUS PEOPLE</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>Connecting curious travellers with best local experiences of the Indigenous communities is an essential part of our identity, apart from tourism, we also promote the artisan’s products through our marketplace to which supports their well-being.</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="heading">
                                            <h2 className="heading--title">RESPECT WILDLIFE</h2>
                                        </div>
                                        <div className="property--details">
                                            <p>Observe wildlife from a distance.</p>
                                            <p>Do Not Feed Animals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12" style={{ "margin-top": "50px" }}>
                                        <AboutGallery />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 text-left prev-page">
                                        <Link to="/why-coorg">
                                            <h3><i className="fa fa-arrow-left"></i>Why Coorgexpress</h3>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 text-right next-page">
                                        <Link to="/about-coorg">
                                            <h3>About Coorg<i className="fa fa-arrow-right"></i></h3>
                                        </Link>
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

export default ResponsibleTourism