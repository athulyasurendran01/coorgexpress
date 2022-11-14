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

    const expArray = [{
        id: 1,
        name: "Hiking"
    }, {
        id: 7,
        name: "Outdoor Activity"
    }, {
        id: 8,
        name: "Experiential Tour"
    }, {
        id: 2,
        name: "Culinary"
    }]

    const stayArray = [{
        id: 1,
        name: "Resort"
    }, {
        id: 2,
        name: "Homestay"
    }, {
        id: 3,
        name: "Bungalow"
    }, {
        id: 5,
        name: "Camping"
    }]

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
                <Layout homeStayItem={stayArray} experienceItem={expArray} eventsItem={homeBasic.events} blogs={homeBasic.blogs} />
            </>
        )
    }
}

export default Home