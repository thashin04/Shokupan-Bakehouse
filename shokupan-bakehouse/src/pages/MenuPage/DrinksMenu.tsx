import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';

const categories = [
  {
    id: 'fruit',
    title: 'Fruit Green Tea',
    items: [
      { name: 'Butterfly Pea Lemon (16oz)', price: '$5.99', desc: 'Refreshing green tea infused with butterfly pea and lemon', allergies: 'Lemons' },
      { name: 'Honey Lemon Green Tea', price: '$6.35', desc: 'Green tea with a sweet touch of honey and tangy lemon.', allergies: 'Lemon, Honey' },
      { name: 'Lychee Green Tea', price: '$6.35', desc: 'Green tea with the exotic flavor of lychee.', allergies: 'Lychee' },
      { name: 'Mango Green Tea', price: '$6.35', desc: 'Green tea infused with tropical mango flavors.', allergies: 'Mango' },
      { name: 'Passionfruit Green Tea', price: '$6.35', desc: 'Green tea with the zesty essence of passionfruit.', allergies: 'Passionfruit' },
      { name: 'Pineapple Green Tea', price: '$6.35', desc: 'Green tea with a hint of pineapple sweetness.', allergies: 'Pineapple' },
      { name: 'Peach Green Tea', price: '$6.35', desc: 'Green tea with the delicate flavor of peach.', allergies: 'Peach' },
      { name: 'Rose Green Tea', price: '$6.35', desc: 'Green tea infused with floral notes of rose.', allergies: 'Rose' },
      { name: 'Strawberry Green Tea', price: '$6.35', desc: 'Green tea with a fruity strawberry twist.', allergies: 'Strawberry' },
    ],
  },
  {
    id: 'sparkling',
    title: 'Sparkling Fruit Tea',
    items: [
      { name: 'Lychee Sparkling Tea', price: '$6.35', desc: 'Green tea with the exotic flavor of lychee, but sparkling', allergies: 'Lychee' },
      { name: 'Mango Sparkling Tea', price: '$6.35', desc: 'Green tea infused with tropical mango flavors, but sparkling', allergies: 'Mango' },
      { name: 'Passionfruit Sparkling Tea', price: '$6.35', desc: 'Green tea with the zesty essence of passionfruit, but sparkling', allergies: 'Passionfruit' },
      { name: 'Pineapple Sparkling Tea', price: '$6.35', desc: 'Green tea with a hint of pineapple sweetness, but sparkling', allergies: 'Pineapple' },
      { name: 'Peach Sparkling Tea', price: '$6.35', desc: 'Green tea with the delicate flavor of peach, but sparkling', allergies: 'Peach' },
      { name: 'Rose Sparkling Tea', price: '$6.35', desc: 'Green tea infused with floral notes of rose, but sparkling', allergies: 'Rose' },
      { name: 'Strawberry Sparkling Tea', price: '$6.35', desc: 'Green tea with a fruity strawberry twist, but sparkling', allergies: 'Strawberry' },
    ],
  },
  {
    id: 'hot',
    title: 'Hot Drinks (12oz)',
    items: [
      { name: 'Americano', price: '$4.50', desc: 'A classic espresso-based coffee with a robust flavor.', allergies: 'Caffeine' },
      { name: 'Cappuccino', price: '$4.50', desc: 'A classic espresso-based coffee with a robust flavor.', allergies: 'Caffeine' },
      { name: 'Caramel Macchiato', price: '$4.75', desc: 'Espresso with steamed milk and a caramel drizzle.', allergies: 'Caffeine, Milk' },
      { name: 'Hazelnut Macchiato', price: '$4.75', desc: 'Espresso and steamed milk with hazelnut flavor.', allergies: 'Caffeine, Milk' },
      { name: 'Latte', price: '$4.50', desc: 'Espresso blended with steamed milk for a creamy texture.', allergies: 'Caffeine, Milk' },
      { name: 'Vanilla Latte', price: '$4.50', desc: 'Espresso and steamed milk with vanilla flavor.', allergies: 'Caffeine, Milk' },
      { name: 'Caramel Latte', price: '$4.50', desc: 'Espresso and steamed milk with caramel syrup.', allergies: 'Caffeine, Milk' },
      { name: 'Black Sugar Latte', price: '$4.75', desc: 'Espresso and steamed milk with black sugar syrup.', allergies: 'Caffeine, Milk' },
      { name: 'Hot Chocolate', price: '$4.75', desc: 'Rich and creamy chocolate drink served hot.', allergies: 'Chocolate, Milk' },
      { name: 'Mocha Latte', price: '$4.75', desc: 'Espresso and steamed milk with mocha flavor.', allergies: 'Caffeine, Chocolate, Milk' },
      { name: 'Matcha Latte', price: '$4.75', desc: 'Japanese matcha green tea with steamed milk.', allergies: 'Milk' },
      { name: 'Chai Latte', price: '$4.75', desc: 'Black tea with chai spices and steamed milk.', allergies: 'Milk' },
      { name: 'Pistachio Latte', price: '$4.75', desc: 'Espresso and steamed milk with pistachio flavor.', allergies: 'Caffeine, Milk' },
    ],
  },
  {
    id: 'iced',
    title: 'Iced Drinks (16oz)',
    items: [
      { name: 'Iced Americano', price: '$5.00', desc: 'Chilled version of espresso-based Americano.', allergies: 'Caffeine' },
      { name: 'Iced Cappuccino', price: '$5.00', desc: 'Iced version of the classic cappuccino.', allergies: 'Caffeine' },
      { name: 'Iced Caramel Macchiato', price: '$5.50', desc: 'Chilled espresso with caramel and milk.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Hazelnut Macchiato', price: '$5.75', desc: 'Chilled espresso with hazelnut flavor and milk.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Latte', price: '$5.50', desc: 'Classic iced espresso and milk.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Vanilla Latte', price: '$5.50', desc: 'Iced latte with vanilla syrup.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Caramel Latte', price: '$5.50', desc: 'Iced latte with caramel syrup.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Hazelnut Latte', price: '$5.75', desc: 'Iced latte with hazelnut flavor.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Black Sugar Latte', price: '$5.50', desc: 'Iced latte with black sugar syrup.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Mocha Latte', price: '$5.75', desc: 'Iced latte with mocha flavor.', allergies: 'Caffeine, Chocolate, Milk' },
      { name: 'Iced Matcha Latte', price: '$5.75', desc: 'Iced Japanese matcha tea and milk.', allergies: 'Milk' },
      { name: 'Iced Pistachio Latte', price: '$5.75', desc: 'Iced latte with pistachio flavor.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Mousse Latte', price: '$5.75', desc: 'Iced latte topped with mousse foam.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Rose Latte', price: '$5.75', desc: 'Iced latte infused with rose flavor.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Tiramisu Latte', price: '$5.75', desc: 'Iced latte with tiramisu-inspired flavor.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Dalgona Latte', price: '$5.75', desc: 'Iced latte topped with whipped coffee.', allergies: 'Caffeine, Milk' },
      { name: 'Iced Chai Latte', price: '$5.50', desc: 'Iced version of chai latte with milk.', allergies: 'Milk' },
    ],
  },
];

export default function DrinksMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#fdf7ef] text-black min-h-screen scroll-smooth">
      <div className="w-full h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/public/menu-banner.jpg')" }}>
        <h1 className="text-white text-5xl font-bold">MENU</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-start items-center mb-10 gap-8">
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="font-bold underline text-xl flex items-center gap-1">
              Drinks <AiOutlineDown />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-[#e0dede] text-black border mt-2 shadow z-10 w-48">
                {categories.map(cat => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-300 text-sm"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="border-r border-black h-6"></div>

          <span className="text-xl">Pastries</span>
          <div className="border-r border-black h-6"></div>
          <span className="text-xl">Food</span>

          <div className="ml-auto flex items-center border-b border-black">
            <input placeholder="Search" className="bg-transparent focus:outline-none px-2 text-sm" />
            <AiOutlineSearch className="text-xl" />
          </div>
        </div>

        <h2 className="text-5xl text-[#8e2d2d] font-light mb-12">Drinks</h2>

        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-24">
            <h3 className="text-3xl font-bold text-[#8e2d2d] border-b-4 border-[#8e2d2d] mb-8 w-fit">{cat.title}</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {cat.items.map((drink) => (
                <div key={drink.name}>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-2xl font-semibold text-[#8e2d2d]">{drink.name}</h4>
                    <div className="border border-black rounded-full px-3 py-1 text-sm">{drink.price}</div>
                  </div>
                  {drink.desc && <p className="mt-1 text-sm">{drink.desc}</p>}
                  {drink.allergies && <p className="text-sm italic text-gray-700 mt-2">Potential Allergies: {drink.allergies}</p>}
                  <hr className="mt-3 border-gray-400" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 className="text-center text-4xl font-bold text-[#8e2d2d] py-10">ETC. ETC.</h2>
      </div>
    </div>
  );
}