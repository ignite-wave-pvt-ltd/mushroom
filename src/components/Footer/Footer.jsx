import React, { useState, useEffect } from "react";
import { logo } from "../../assets";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const footerSections = {
    company: {
      title: "Mushroom Farm",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
      ],
    },
    products: {
      title: "Our Products",
      links: [
        { name: "Mushroom Varieties", href: "/varieties" },
        { name: "Seasonal Specials", href: "/seasonal" },
        { name: "Organic Kits", href: "/kits" },
        { name: "Recipes", href: "/recipes" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  };

  const socialIcons = [
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "Facebook",
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "YouTube",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
      name: "Email",
      icon: "M12 12.713l11.985-9.713h-23.971l11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z",
    },
  ];

  return (
    <footer
      className={`relative bg-[var(--color-bg)] border-t border-[var(--color-primary)]/20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)]/50 via-[var(--color-primary)]/50 to-[var(--color-accent)]/50"></div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={logo}
                  alt="Vara Mushroom Hut Logo"
                  className="w-12 h-12 rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-heading)" }}
                >
                  Vara Mushroom Hut
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  Organic & Sustainable Since 2023
                </p>
              </div>
            </div>
            <p
              className="text-lg mb-6 leading-relaxed max-w-md"
              style={{ color: "var(--color-text)" }}
            >
              Growing the finest organic mushrooms with sustainable practices
              that honor nature and nourish communities.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                    hoveredItem === social.name
                      ? "scale-110 -translate-y-1"
                      : ""
                  }`}
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-bg)",
                  }}
                  onMouseEnter={() => setHoveredItem(social.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([key, section], index) => (
            <div
              key={key}
              className={`transition-all duration-500 delay-${index * 100} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h4
                className="font-bold text-lg mb-4 pb-2 border-b border-[var(--color-primary)]/20 transition-all duration-300 hover:border-[var(--color-accent)]"
                style={{ color: "var(--color-heading)" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`group flex items-center space-x-2 transition-all duration-300 ${
                        hoveredItem === link.name ? "translate-x-2" : ""
                      }`}
                      style={{ color: "var(--color-text)" }}
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125"></span>
                      <span className="group-hover:font-medium transition-all duration-300">
                        {link.name}
                      </span>
                      <span
                        className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                        style={{ color: "var(--color-accent)" }}
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div
          className={`mt-12 pt-8 border-t border-[var(--color-primary)]/20 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-heading)" }}
              >
                Join Our Mushroom Community
              </h4>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                Get seasonal recipes, growing tips, and exclusive offers
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg border border-[var(--color-primary)]/30 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm flex-grow"
                style={{ color: "var(--color-text)" }}
              />
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-bg)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t border-[var(--color-primary)]/30 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text)" }}
                onClick={() => {
                  window.open("https://calcyntra.com", "_blank");
                }}
              >
                Calcyntra Technologies Pvt Ltd
              </p>
            </div>
            <p
              className="text-xs text-center lg:text-left"
              style={{ color: "var(--color-muted)" }}
            >
              © 2025 Vara Mushroom Hut. All rights reserved.
              <span className="mx-2">•</span>
              Innovating with precision and sustainability
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            {/* Quick Links */}
            <div className="flex space-x-8 text-sm">
              <a
                href="/privacy"
                className="transition-all duration-300 hover:font-medium hover:scale-105 transform"
                style={{ color: "var(--color-text)" }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="transition-all duration-300 hover:font-medium hover:scale-105 transform"
                style={{ color: "var(--color-text)" }}
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="transition-all duration-300 hover:font-medium hover:scale-105 transform"
                style={{ color: "var(--color-text)" }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <div className="flex space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full animate-bounce"
              style={{
                backgroundColor: "var(--color-accent)",
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
