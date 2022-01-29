import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Social from "./components/Social";
import Contact from "./pages/Contact";

import HomePage from "./pages/HomePage";
import Poll from "./pages/Poll";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>{" "}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/poll" element={<Poll />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
