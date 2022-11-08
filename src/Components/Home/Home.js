import Layout from "../Layout/Layout"
import Slider from "../Slider/Slider"

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { homeBasics, getHomepage } from '../../reducers/homeBasic';
import Loader from "../Loader/Loader";

function Home() {

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
                <Slider sliderItem={homeBasic.sliders} />
                <Layout homeStayItem={homeBasic.homeStay} experienceItem={homeBasic.experience} eventsItem={homeBasic.events} blogs={homeBasic.blogs} />
            </>
        )
    }
}

export default Home