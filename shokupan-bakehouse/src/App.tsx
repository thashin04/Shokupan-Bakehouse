import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import DrinksMenu from "./pages/MenuPage/DrinksMenu";
import FoodMenu from "./pages/MenuPage/FoodMenu";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drinksmenu" element={<DrinksMenu />} />
          <Route path="/foodmenu" element={<FoodMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
