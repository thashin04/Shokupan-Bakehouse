import React, { useState, useRef, useEffect } from 'react';
import menuBackground from '../../assets/menuBackground.png';
import temppastry from '../../assets/temppastry.webp';
import { categories as drinkCategories } from './DrinksData';
import { foodCategories } from './FoodData';
import { pastryCategories } from './PastryData';
import { AiOutlineSearch } from "react-icons/ai";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('Drinks');
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tabOptions = [
    { name: 'Drinks', data: drinkCategories },
    { name: 'Pastries', data: pastryCategories },
    { name: 'Food', data: foodCategories },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const getCurrentCategories = () => {
    switch (activeTab) {
      case 'Drinks':
        return drinkCategories;
      case 'Food':
        return foodCategories;
      case 'Pastries':
        return pastryCategories;
      default:
        return [];
    }
  };

  const categories = getCurrentCategories().map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div
      className="bg-[#fdf7ef] text-black min-h-screen scroll-smooth"
      style={{ fontFamily: 'var(--font-josefin)' }}
    >
      {/* Banner */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={menuBackground}
          alt="Menu Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tabs + Search */}
      <div className="w-full max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 flex justify-start md:justify-center pl-6 md:pl-70">
          <div className="flex gap-6 text-3xl font-regular font-josefin items-center">
            {tabOptions.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <div className="relative" ref={openDropdown === tab.name ? dropdownRef : null}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.name);
                      setSearchTerm('');
                      setOpenDropdown((prev) => (prev === tab.name ? null : tab.name));
                    }}
                    className="flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === tab.name}
                    style={{
                    //   fontFamily: 'var(--font-italiana)',
                    //   fontWeight: 'bold',
                       textDecoration: activeTab === tab.name ? 'underline' : 'none',
                       textUnderlineOffset: '6px',
                     }}
                  >
                    {tab.name}
                    <span className="text-sm pb-1">▾</span>
                  </button>

                  {openDropdown === tab.name && (
                    <div
                      className="absolute z-10 mt-2 bg-white border text-sm shadow w-48 text-left"
                      role="menu"
                    >
                      {tab.data.map((cat) => (
                        <a
                          key={cat.id}
                          href={`#${cat.id}`}
                          className="block px-4 py-2 hover:bg-gray-200 focus:bg-gray-200 outline-none text-base text-black"
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => setOpenDropdown(null)}
                          style={{
                            fontFamily: 'var(--font-italiana)',
                          }}
                        >
                          {cat.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {index < tabOptions.length - 1 && (
                  <div className="border-r border-black h-6"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center border-b border-black px-2 py-1 font-josefin w-full md:w-60">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-transparent focus:outline-none text-sm px-2"
          />
          <AiOutlineSearch className="text-xl" />
        </div>
        
      </div>

      {/* Active Tab Header */}
      <h2
        className="text-6xl font-bold text-[#8e2d2d] mt-20 mb-16 text-center tracking-wide"
        style={{ fontFamily: 'var(--font-italiana)' }}
      >
        {activeTab}
      </h2>

      {/* Category and Items */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {categories.map((cat) =>
          cat.items.length > 0 ? (
            <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-24">
              <h3
                className="text-3xl font-bold text-[#8e2d2d] mb-8 border-b border-[#8e2d2d] pb-2"
                style={{ fontFamily: 'var(--font-josefin)' }}
              >
                {cat.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex gap-4">
                    <img
                      src={temppastry}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-xl font-semibold text-[#8e2d2d]">{item.name}</h4>
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
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}

        {categories.every((cat) => cat.items.length === 0) && (
          <p className="text-center text-gray-500 text-sm mt-20">
            No items match your search.
          </p>
        )}
      </div>
    </div>
  );
}
