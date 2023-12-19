import logo from "./logo.svg";
import "./App.css";
import "./styles/styles.css";
import React, { useState, useRef } from "react";

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LockPattern from "./components/LockPattern";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuMethod = () => {
    setIsOpen(!isOpen);
  };
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const [logout, setLogOut] = useState(false);

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const swipeLength = touchEndX.current - touchStartX.current;
      if (swipeLength > 50) {
        toggleMenuMethod();
      } else if (swipeLength < -50) {
        toggleMenuMethod();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  return (
    <Router>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div>
          <NavBar toggleMenu={toggleMenuMethod} />
          {isOpen ? (
            <SideBar onSetLogut={setLogOut} toggleMenu={toggleMenuMethod} />
          ) : (
            ""
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lockscreen" element={<LockPattern />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
