import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';

const foodCategories = [
  {
    id: 'shokupan',
    title: 'Shokupan Sandwiches',
    items: [
      { name: 'Original Shokupan Sandwich', price: '$12.35', desc: 'Scrambled eggs, avocado, cheese, lettuce on spicy mayo shokupan bread. Green onion on top.' },
      { name: 'Beef Bulgogi Shokupan Sandwich', price: '$12.35', desc: 'Caramelized onion with beef bulgogi, scrambled eggs, lettuce, cheese on spicy spread bread. Roasted sesame seeds & green onion on top.' },
      { name: 'Spicy Pork Bulgogi Shokupan Sandwich', price: '$12.35', desc: 'Spicy pork bulgogi with caramelized onions, scrambled eggs, lettuce, cheese on spicy spread bread. Mayo sauce and green onion on top.' },
      { name: 'Pork Belly Shokupan Sandwich', price: '$12.35', desc: 'Pork belly with hardboiled and scrambled eggs, lettuce, mayo spread bread. White sauce on top.' },
      { name: 'Bacon Shokupan Sandwich', price: '$12.35', desc: 'Crispy bacon, scrambled eggs, lettuce, cheese, spicy mayo bread. Topped with cheese powder.' },
      { name: 'Shrimp Tempura Shokupan Sandwich', price: '$12.35', desc: 'Shrimp tempura, scrambled egg with cod, lettuce, mayo bread. Green onion and sesame.' },
      { name: 'Char Siu BBQ Shokupan Sandwich', price: '$12.35', desc: 'Char Siu BBQ pork, scrambled egg, cheese, mayo spread bread. Green onion on top.' },
    ],
  },
  {
    id: 'croissant',
    title: 'Croissant Sandwiches',
    items: [
      { name: 'Deluxe Croissant Sandwich', price: '$12.35', desc: 'Chicken Tonkasu, mozzarella, veggies, pesto or marinara sauce.' },
      { name: 'Pork Tonkasu Croissant Sandwich', price: '$12.35', desc: 'Pork tonkasu, egg, cheese, tomato, lettuce, teriyaki sauce.' },
      { name: 'Avocado & Egg Croissant Sandwich', price: '$12.35', desc: 'Avocado, egg, hot pepper bacon sauce.' },
      { name: 'Chicken Katsu Croissant Sandwich', price: '$12.35', desc: 'Chicken Katsu, egg, tomato, cheese, lettuce.' },
      { name: 'Soft Shell Crab Croissant Sandwich', price: '$12.35', desc: 'Soft shell crab, tomato, cheese, lettuce.' },
    ],
  },
  {
    id: 'scramble',
    title: 'Scrambled Egg Box',
    items: [
      { name: 'Sesame Chicken', price: '$12.50', desc: 'Sesame chicken with scrambled eggs.' },
      { name: 'Spicy Chicken', price: '$12.50', desc: 'Spicy chicken with scrambled eggs.' },
      { name: 'Karaage Chicken', price: '$12.50', desc: 'Japanese-style fried chicken with scrambled eggs.' },
    ],
  },
  {
    id: 'melonbun',
    title: 'Tiramisu Melon Bun',
    items: [
      { name: 'Tiramisu Melon Bun', price: '$6.25', desc: 'Japanese Melonpan filled with Tiramisu custard.' },
      { name: 'Tiramisu Chocolate Melon Bun', price: '$6.25', desc: 'Chocolate Melonpan filled with Tiramisu custard.' },
    ],
  },
  {
    id: 'baobun',
    title: 'Bao Bun Sandwich (2 pcs)',
    items: [
      { name: 'Pork Belly Bao', price: '$9.25', desc: 'Pork belly with scrambled eggs and green onion.' },
      { name: 'Char Siu Bao', price: '$9.25', desc: 'Char siu BBQ with scrambled eggs and green onion.' },
      { name: 'Shrimp Bao', price: '$9.25', desc: 'Crispy shrimp tempura with scrambled eggs.' },
    ],
  },
  {
    id: 'burrito',
    title: 'Burrito',
    items: [
      { name: 'Original Egg Burrito', price: '$9.00', desc: 'Scrambled eggs, avocado, cheese.' },
      { name: 'Beef Bulgogi Burrito', price: '$9.25', desc: 'Beef bulgogi, scrambled eggs.' },
      { name: 'Shrimp Tempura Burrito', price: '$9.25', desc: 'Shrimp tempura, scrambled eggs.' },
      { name: 'Char Siu BBQ Burrito', price: '$9.25', desc: 'Char Siu BBQ pork, scrambled eggs.' },
    ],
  },
];

function FoodMenu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCategories = foodCategories.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="bg-[#fef9f3] text-black min-h-screen">
      <div className="pt-20 pb-12 px-6 md:px-24">
        {/* Header + Dropdown Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4 relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="font-bold underline flex items-center"
            >
              Food <AiOutlineDown className="ml-1" />
            </button>
            <a href="/menu/pastry" className="border-l pl-4">Pastries</a>
            <a href="/menu/drinks" className="border-l pl-4">Drinks</a>

            {/* Dropdown Links */}
            {showDropdown && (
              <div className="absolute top-8 left-0 bg-white shadow-md border text-sm z-10">
                {foodCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    onClick={() => setShowDropdown(false)}
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <AiOutlineSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-3 py-2 border-b border-black bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl text-[#782f2f] mb-10">Food</h1>

        {/* Menu Sections */}
        {filteredCategories.map((category) => (
          <div key={category.id} id={category.id} className="mb-16">
            <h2 className="text-2xl font-bold text-[#782f2f] mb-4 underline">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {category.items.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-[#782f2f] font-semibold">{item.name}</h3>
                    <span className="border border-black rounded-full px-3 py-1 text-sm">{item.price}</span>
                  </div>
                  <p className="text-sm text-black">{item.desc}</p>
                  <hr className="mt-2 border-gray-300" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
