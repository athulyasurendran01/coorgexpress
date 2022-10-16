import Layout from "../Layout/Layout"
import Slider from "../Slider/Slider"

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { homeBasics, getHomepage } from '../../reducers/homeBasic';

function Home() {

    const dispatch = useDispatch();
    const homeBasic = useSelector(homeBasics);
    console.log(homeBasic)
    useEffect(() => {
        dispatch(getHomepage(0))
    }, [])

    return (
        <>
            <Slider sliderItem={homeBasic[0]} />
            <Layout homeStayItem={homeBasic[1]} experienceItem={homeBasic[2]} eventsItem={homeBasic[3]} blogs={homeBasic[4]}/>
        </>
    )
}

export default Home