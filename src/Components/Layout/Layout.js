
import stay_head from '../../assets/images/home/stay_head.png'
import experience_head from '../../assets/images/home/experience_head.png'
import event_head from '../../assets/images/home/events_head.png'
import stay1 from '../../assets/images/home/resort.png'
import stay2 from '../../assets/images/home/homestay.png'
import experience1 from '../../assets/images/home/trucking.png'
import experience2 from '../../assets/images/home/cycling.png'
import event1 from '../../assets/images/home/event1.png'
import event2 from '../../assets/images/home/event2.png'
import instagram from '../../assets/images/home/instagram.png'
import blog from '../../assets/images/home/blog.jpg'
import Slider from '../Slider/Slider'
import './Layout.css';


function Layout() {
    return (
        <>
            <main id="main">
                <div id="about" className="about-area area-padding stay-property text-center pb-70  pt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12  text-center">
                                <div className='heading heading-2 text-center mb-70'>
                                    <img src={stay_head} />
                                    <p className='heading--desc pt-30'>Quintessential accommodations across Coorg to make your holiday cozy.</p>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={stay1} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>RESORT</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={stay2} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>HOME STAY</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> <br />

                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={stay2} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>BANGLOW</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={stay1} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>CAMPSITE</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                	        <div className="col-xs-12 col-sm-12 col-md-12 col-md-offset-3">
                                <a href="#" className="btn btn--primary">View All</a>
                            </div>
            	        </div>
                    </div>
                </div>
                <div id="experience" className="experience-property text-center bg-white pb-70  pt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12  text-center">
                                <div className='heading heading-2 text-center mb-70'>
                                    <img src={experience_head} />
                                    <p className='heading--desc pt-30'>Unforgettable experiences that are beyond ordinary in the most unique destinations.</p>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={experience1} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>TRUCKING</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={experience2} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>CYCLING</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> <br />

                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={experience2} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>HIKING</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={experience1} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>CAMPSITE</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                	        <div className="col-xs-12 col-sm-12 col-md-12 col-md-offset-3">
                                <a href="#" className="btn btn--primary">View All</a>
                            </div>
            	        </div>
                    </div>
                </div>
                <div id="events" className="events-property text-center pb-70  pt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12  text-center">
                                <div className='heading heading-2 text-center mb-70'>
                                    <img src={event_head} />
                                    <p className='heading--desc pt-30'>A brief overview on all the precious holiday memories made together.</p>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={event1} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>EVENT 1</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={event2} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>EVENT 2</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> <br />

                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={event2} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>EVENT 3</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="well-left property-city-item">
                                    <div className="single-well property--city-img">
                                        <a href="#">
                                            <img src={event1} alt="" />
                                            <div className='property--city-overlay'>
                                                <div className='property--item-content'>
                                                    <h5 className='property--title'>EVENT 4</h5>
                                                    <p className='property--numbers'>Read More <i class="fa fa-angle-double-right"></i></p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                	        <div className="col-xs-12 col-sm-12 col-md-12 col-md-offset-3">
                                <a href="#" className="btn btn--primary">View All</a>
                            </div>
            	        </div>
                    </div>
                </div>
                <section id="blog" className="blog blog-grid bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading heading-2 text-center mb-70">
                                    <h2 className="heading--title">BLOGS</h2>
                                    <p className="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
                                    <img src={blog} alt="entry image"/>
                                </a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">March 09, 2018</a><a href="#">Team Coorgexpress</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">10 Quick Tips About Real Estate</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            In contrast with New York City’s urban atmosphere, the vast majority of the state...
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
                                    <img src={blog} alt="entry image"/>
                                </a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">March 15, 2018</a><a href="#">Team Coorgexpress</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">Marketing Ideas to Sell a Listing</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            Many Realtors, like most companies, continue to market their businesses
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
                                    <img src={blog} alt="entry image"/>
                                </a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">April 05, 2018</a><a href="#">Team Coorgexpress</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">Effective Real Estate Websites</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            In other words, if you’re not tracking your real estate website’s analytics to follow
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="instagram-feeds" className="instagram-feeds text-center pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="heading heading-2 text-center mb-70">
                                    <h2 className="heading--title">INSTAGRAM POST</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                <img src={instagram} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}
export default Layout