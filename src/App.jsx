import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Red from "./Routes/Red";
import Green from "./Routes/Green";
import Blue from "./Routes/Blue";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </>
  );
}

export default App;
