import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import HomeScreen from "./HomeScreen";
function App() {
  return (
    <div className="app">
        <Routes>
          <Route exact path="/portfolio" element={<HomeScreen />} />
          <Route exact path="/portfolio/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
