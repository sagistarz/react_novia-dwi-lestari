import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Footer from "./component/Footer";
import Collaboration from "./component/Collaboration";
import ContactMe from "./component/ContactMe";
import Social from "./component/Social";
import RateCard from "./component/RateCard";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Social />
                <Collaboration />
                <RateCard />
                <ContactMe />
                <Footer />
              </>
            }
          />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
