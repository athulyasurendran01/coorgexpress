import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Events from './Components/Events/Events';
import Experiences from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Stay from './Components/Stay/Stay';
import './App.css';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import PropertyListing from './Components/PropertyListing/PropertyListing';
import PropertyDetail from './Components/PropertyDetail/PropertyDetail';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { propertyHighlights, getHomepage } from './reducers/homeBasic';

function App() {

  const dispatch = useDispatch();
  const propertyHighlight = useSelector(propertyHighlights);

  const [offset, setOffset] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');

  useEffect(() => {
    setOffset(window.pageYOffset)

    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);

  }, []);


  // console.log(.offsetHeight);

  // page-title
  // 529 - 609-120

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
        <Header headerStyle={headerStyle}/>
        <Routes>
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route path="/stay" caseSensitive={false} element={<Stay propertyHighlight={propertyHighlight} />} />
          <Route path="/stay/:id" caseSensitive={false} element={<PropertyDetail />} />
          <Route path="/experiences" caseSensitive={false} element={<Experiences propertyHighlight={propertyHighlight} />} />
          <Route path="/events" caseSensitive={false} element={<Events propertyHighlight={propertyHighlight} />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
          {/* <Route path="/propertylisting" caseSensitive={false} element={<PropertyListing />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
