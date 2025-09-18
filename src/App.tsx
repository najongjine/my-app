import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Emulator from "./Pages/Emulator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emulator" element={<Emulator />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
