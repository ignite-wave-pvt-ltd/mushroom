import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logo } from "../../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", path: "/" },
    { name: "About", href: "#about", path: "/about" },
    { name: "Varieties", href: "#varieties", path: "/varieties" },
    { name: "Learn", href: "#learn", path: "/learn" },
  ];

  const handleNavClick = (item, event) => {
    if (item.path) {
      event.preventDefault();
      navigate(item.path);
      setActiveItem(item.name);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-100"
            : "bg-white/80 backdrop-blur-lg py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => {
                navigate("/");
                setActiveItem("Home");
              }}
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Varamushroomhut Logo"
                  className="w-12 h-12 rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent">
                  Varamushroomhut
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  ORGANIC & SUSTAINABLE
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`px-6 py-3 font-semibold cursor-pointer text-sm tracking-wide transition-all duration-300 relative group ${
                    activeItem === item.name
                      ? "text-emerald-700"
                      : "text-gray-600 hover:text-emerald-600"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                      activeItem === item.name
                        ? "w-8 bg-emerald-600"
                        : "w-0 group-hover:w-8 bg-emerald-500"
                    }`}
                  ></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                className="px-6 py-2.5 rounded-xl cursor-pointer font-semibold text-sm transition-all duration-300 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:shadow-lg hover:scale-105 active:scale-95"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </button>
              <button
                className="px-7 py-2.5 rounded-xl cursor-pointer font-semibold text-sm text-white transition-all duration-300 bg-emerald-600 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2"
                onClick={() => navigate("/shop-now")}
              >
                <span>Shop Now</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 relative focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 my-1.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 shadow-2xl" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`py-4 px-6 font-semibold text-left rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                    activeItem === item.name
                      ? "bg-emerald-50 text-emerald-700 border-2 border-emerald-100"
                      : "text-gray-600 hover:bg-gray-50 hover:pl-8"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeItem === item.name
                        ? "bg-emerald-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  <span>{item.name}</span>
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 mt-2">
                <button
                  className="py-4 px-6 font-semibold rounded-xl transition-all duration-300 text-center border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:scale-95"
                  onClick={() => {
                    navigate("/contact-us");
                    setIsOpen(false);
                  }}
                >
                  Contact Us
                </button>

                <button
                  className="py-4 px-6 font-semibold rounded-xl transition-all duration-300 text-center text-white bg-emerald-600 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 active:scale-95 shadow-lg flex items-center justify-center space-x-2"
                  onClick={() => {
                    navigate("/shop-now");
                    setIsOpen(false);
                  }}
                >
                  <span>Shop Now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;
