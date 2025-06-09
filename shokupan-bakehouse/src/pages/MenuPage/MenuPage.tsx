import React, { useState } from 'react';
import menuBackground from '../../assets/menuBackground.png'; // ✅ The image you want
import { categories as drinkCategories } from './DrinksData';
import { foodCategories } from './FoodData';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('Drinks');

  const getCurrentCategories = () => {
    switch (activeTab) {
      case 'Drinks':
        return drinkCategories;
      case 'Food':
        return foodCategories;
      default:
        return [];
    }
  };

  const categories = getCurrentCategories();

  return (
    <div className="bg-[#fdf7ef] text-black min-h-screen scroll-smooth">

      {/* ✅ Image banner only, no text or overlay */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={menuBackground}
          alt="Menu Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tabs: Drinks and Food */}
      <div className="flex justify-center mt-10 gap-8 text-xl font-semibold">
        {['Drinks', 'Food'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'underline text-[#8e2d2d]' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Menu content based on active tab */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-[#8e2d2d] mb-8">{activeTab}</h2>

        {categories.map((cat) => (
          <div key={cat.id} className="mb-16">
            <h3 className="text-2xl font-bold underline text-[#8e2d2d] mb-4">{cat.title}</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {cat.items.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-semibold text-[#8e2d2d]">{item.name}</h4>
                    <span className="border border-black rounded-full px-3 py-1 text-sm">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm">{item.desc}</p>
                  {item.allergies && (
                    <p className="text-xs italic text-gray-700 mt-1">
                      Potential Allergies: {item.allergies}
                    </p>
                  )}
                  <hr className="mt-3 border-gray-300" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
