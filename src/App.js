import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import HomeScreen from "./HomeScreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/portfolio" element={<HomeScreen />} />
          <Route exact path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
