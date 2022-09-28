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
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import ExperienceDetail from './Components/ExperienceDetail/ExperienceDetail';
import PropertyDetail from './Components/PropertyDetail/PropertyDetail';
import PropertyListing from './Components/PropertyListing/PropertyListing';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { propertyHighlights, getHomepage } from './reducers/homeBasic';

function App() {
  
  const dispatch = useDispatch();
  const propertyHighlight = useSelector(propertyHighlights);

  useEffect(() => {
      dispatch(getHomepage(0))
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route path="/stay" caseSensitive={false} element={<Stay propertyHighlight={propertyHighlight}/>} />
          <Route path="/stay/:id" caseSensitive={false} element={<PropertyDetail />} />
          <Route path="/experiences" caseSensitive={false} element={<Experiences propertyHighlight={propertyHighlight}/>} />
          <Route path="/events" caseSensitive={false} element={<Events propertyHighlight={propertyHighlight}/>} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
          <Route path="/experiencedetail" caseSensitive={false} element={<ExperienceDetail />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/propertylisting" caseSensitive={false} element={<PropertyListing />} />
          <Route path="/blog" caseSensitive={false} element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
