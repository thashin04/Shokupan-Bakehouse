import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DrinksMenu from "./pages/MenuPage/DrinksMenu";
import FoodMenu from "./pages/MenuPage/FoodMenu";
import PastryMenu from "./pages/MenuPage/PastryMenu";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu/drinks" element={<DrinksMenu />} />
          <Route path="/menu/food" element={<FoodMenu />} />
          <Route path="/menu/pastry" element={<PastryMenu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
