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
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route path="/stay" caseSensitive={false} element={<Stay />} />
          <Route path="/experiences" caseSensitive={false} element={<Experiences />} />
          <Route path="/events" caseSensitive={false} element={<Events />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
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
