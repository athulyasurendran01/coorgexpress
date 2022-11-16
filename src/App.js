import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Events from './Components/Events/Events';
import Experiences from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Stay from './Components/Stay/Stay';
import Blog from './Components/Blog/Blog';
import './App.css';
import Contact from './Components/Contact/Contact';
import AboutCoorg from './Components/About/AboutCoorg/AboutCoorg';
import OurStory from './Components/About/OurStory/OurStory';
import Footer from './Components/Footer/Footer';
import ExperienceDetail from './Components/ExperienceDetail/ExperienceDetail';
import PropertyDetail from './Components/PropertyDetail/PropertyDetail';
import PropertyListing from './Components/PropertyListing/PropertyListing';
import Booking from './Components/Booking/Booking';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { propertyHighlights, getHomepage } from './reducers/homeBasic';
import BlogDetail from './Components/Blog/BlogDetail/BlogDetail';
import WhyCoorg from './Components/About/WhyCoorg/WhyCoorg';
import ResponsibleTourism from './Components/About/ResponsibleTourism/ResponsibleTourism';

function App() {

  const dispatch = useDispatch();
  const propertyHighlight = useSelector(propertyHighlights);

  const [offset, setOffset] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');

  useEffect(() => {
    // setOffset(window.pageYOffset)
    // const onScroll = () => setOffset(window.pageYOffset);
    // window.removeEventListener('scroll', onScroll);
    // window.addEventListener('scroll', onScroll, { passive: true });
    // return () => window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = function (event) {
    // setOffset(window.pageYOffset)
  }

  useEffect(() => {
    let elem = document.getElementById("hero")
    let elem1 = document.getElementById("page-title")
    if (elem) {
      let screenHeight = elem.offsetHeight - 120
      offset < screenHeight ? setHeaderStyle('nav-scroll-default') : setHeaderStyle('nav-scroll-active')
    } else if (elem1) {
      let screenHeight = elem1.offsetHeight - 120
      offset < screenHeight ? setHeaderStyle('nav-scroll-default') : setHeaderStyle('nav-scroll-active')
    } else { }
  }, [offset])

  useEffect(() => {
    dispatch(getHomepage(0))
  }, [])

  return (
    <Router>
      <div className="App">
        <Header headerStyle={headerStyle} />
        <Routes>
          <Route path="/about-coorg" caseSensitive={false} element={<AboutCoorg />} />
          <Route path="/our-story" caseSensitive={false} element={<OurStory />} />
          <Route path="/why-coorg" caseSensitive={false} element={<WhyCoorg />} />
          <Route path="/responsible-tourism" caseSensitive={false} element={<ResponsibleTourism />} />
          <Route path="/stay" caseSensitive={false} element={<Stay propertyHighlight={propertyHighlight} />} />
          <Route path="/stay/:id" caseSensitive={false} element={<PropertyDetail />} />
          <Route path="/experiences" caseSensitive={false} element={<Experiences propertyHighlight={propertyHighlight} />} />
          <Route path="/experiences/:id" caseSensitive={false} element={<ExperienceDetail />} />
          <Route path="/events/:id" caseSensitive={false} element={<ExperienceDetail />} />
          <Route path="/events" caseSensitive={false} element={<Events propertyHighlight={propertyHighlight} />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
          <Route path="/blog" caseSensitive={false} element={<Blog />} />
          <Route path="/blogdetail" caseSensitive={false} element={<BlogDetail />} />
          <Route path="/booking" caseSensitive={false} element={<Booking />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
