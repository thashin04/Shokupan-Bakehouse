import { Link, useLocation } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu/drinks" },
    { name: "About", path: "/about" },
  ];

  return (
    <footer className="bg-darkred text-offwhite font-josefin px-8 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 text-center md:text-left">
        {/* Logo & Social */}
        <div className="space-y-4">
          <Link to="/" className="inline-block hover:opacity-85 transition">
            <img src={logo2} alt="Logo" className="h-12" />
          </Link>
          <div className="flex justify-center md:justify-start gap-3 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=61575979934289" aria-label="Facebook" className="hover:opacity-80 transition">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/shokupanbakehouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:opacity-80 transition">
              <RiInstagramFill />
            </a>
          </div>
        </div>

        {/* Navigation & Hours */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-20 lg:gap-6 max-sm:pt-12">
          <ul className="space-y-2 text-lg">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`relative pb-1 transition duration-300
                    ${location.pathname === path ? "font-semibold border-b-2 border-offwhite" : "border-b-2 border-transparent"}
                    hover:border-offwhite`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-sm md:text-base space-y-2 text-center">
            <h4 className="font-extrabold text-lg mb-1">Hours of Operation</h4>
            <p className="font-regular mb-1">Monday - Sunday</p>
            <p className="font-regular mb-1">11:00AM - 9:00PM</p>
          </div>
          {/* Contact Info */}
        <div className="text-sm md:text-base space-y-2">
          <h4 className="font-extrabold text-lg mb-1 text-center md:text-left">Contact us!</h4>
          <p>Email: <a href="mailto:Shokupanbakehouse@gmail.com" className="border-b-1">Shokupanbakehouse@gmail.com</a></p>
          <p>Phone: (407) 250-5129</p>
        </div>
      </div>
        </div>

    </footer>
  );
};

export default Footer;
