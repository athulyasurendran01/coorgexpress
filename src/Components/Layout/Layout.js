
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
import GridContainer from '../Common/GridContainer'
import Blogs from '../Home/Blogs/Blogs'

function Layout() {
    const propsData = [{
        title: 'about',
        img1: stay_head,
        img2: stay1,
        img3: stay2
    },
    {
        title: 'experience',
        img1: experience_head,
        img2: experience1,
        img3: experience2
    },
    {
        title: 'events',
        img1: event_head,
        img2: event1,
        img3: event2
    }]
    return (
        <>
            <main id="main">
                {
                    propsData.map(inputData => {
                        return (
                            <GridContainer data={inputData} />
                        )
                    })
                }
                {/* <div id="about" className="about-area area-padding stay-property text-center pb-70  pt-60">
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
                </div> */}
                {/* <div id="experience" className="experience-property text-center bg-white pb-70  pt-60">
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
                </div>*/}
                
                <Blogs title = {'blog'} blog = {blog}/>
                
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