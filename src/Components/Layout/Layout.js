
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
import React from 'react'

function Layout({ homeStayItem, experienceItem, eventsItem }) {
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
        img3: experience2,
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
                    propsData.map((inputData, idx) => {
                        return (
                            <React.Fragment key={idx} >
                                {inputData.title === 'about' && <GridContainer data={inputData} response={homeStayItem} title={'stay'} />}
                                {inputData.title === 'experience' && <GridContainer data={inputData} response={experienceItem} title={'experiences'} />}
                                {inputData.title === 'events' && <GridContainer data={inputData} response={eventsItem} title={'events'} />}
                            </React.Fragment>
                        )
                    })
                }

                <Blogs title={'blog'} blog={blog} />

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