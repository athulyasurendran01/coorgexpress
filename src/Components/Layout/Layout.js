
import stay_head from '../../assets/images/home/stay_head.png'
import experience_head from '../../assets/images/home/experience_head.png'
import event_head from '../../assets/images/home/events_head.png'

import stay0 from '../../assets/images/home/stay/resort.jpg'
import stay1 from '../../assets/images/home/stay/homestay.jpg'
import stay2 from '../../assets/images/home/stay/bungalow.jpg'
import stay3 from '../../assets/images/home/stay/camping.jpg'

import experience0 from '../../assets/images/home/experience/Hiking.jpg'
import experience1 from '../../assets/images/home/experience/outDoorActivity.jpg'
import experience2 from '../../assets/images/home/experience/ExperienceTour.jpg'
import experience3 from '../../assets/images/home/experience/Culinary.jpg'

import event1 from '../../assets/images/home/event1.png'
import event2 from '../../assets/images/home/event2.png'

import instagram from '../../assets/images/home/instagram.png'
import blog from '../../assets/images/home/blog.jpg'
import Slider from '../Slider/Slider'
import './Layout.css';
import GridContainer from '../Common/GridContainer'
import Blogs from '../Home/Blogs/Blogs'
import React from 'react'
import { serverURL_ } from '../../app/Config'
import EventGridContainer from '../Common/EventGridContainer'

function Layout({ homeStayItem, experienceItem, eventsItem, blogs }) {
    const propsData = [{
        title: 'about',
        img1: stay_head,
        img2: stay0,
        img3: stay1,
        img4: stay2,
        img5: stay3
    },
    {
        title: 'experience',
        img1: experience_head,
        img2: experience0,
        img3: experience1,
        img4: experience2,
        img5: experience3,
    },
    {
        title: 'events',
        img1: event_head,
        img2: eventsItem && `${serverURL_}/${eventsItem[0].file_path}/${eventsItem[0].file_name}`,
        img3: eventsItem && `${serverURL_}/${eventsItem[1].file_path}/${eventsItem[1].file_name}`,
        img4: eventsItem && `${serverURL_}/${eventsItem[2].file_path}/${eventsItem[2].file_name}`,
        img5: eventsItem && `${serverURL_}/${eventsItem[3].file_path}/${eventsItem[3].file_name}`

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
                                {inputData.title === 'events' && <EventGridContainer data={inputData} response={eventsItem} title={'events'} />}
                            </React.Fragment>
                        )
                    })
                }
                <Blogs title={'blog'} blog={blog} data={blogs}/>
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