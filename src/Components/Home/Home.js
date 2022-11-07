import Layout from "../Layout/Layout"
import Slider from "../Slider/Slider"

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { homeBasics, getHomepage } from '../../reducers/homeBasic';

function Home() {

    const dispatch = useDispatch();
    const homeBasic = useSelector(homeBasics);

    useEffect(() => {
        dispatch(getHomepage(0))
    }, [])

    return (
        <>
            <Slider sliderItem={homeBasic.sliders} />
            <Layout homeStayItem={homeBasic.homeStay} experienceItem={homeBasic.experience} eventsItem={homeBasic.events} blogs={homeBasic.blogs}/>
        </>
    )
}

export default Home