import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Contact from "./pages/Contact";
import FormContd from "./pages/FormContd";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/moreinfo" element={<FormContd />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
