import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";

const footerLinks = [
  {
    title: "Quick Link",
    links: [
      { name: "About us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  },
  {
    title: "The Cars",
    links: [
      { name: "How it works", path: "/service" },
      { name: "Pick a car", path: "/cars" },
      { name: "FAQs", path: "/faqs" },
      { name: "Help Center", path: "/help" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { name: "Facebook", path: "https://facebook.com" },
      { name: "Instagram", path: "https://instagram.com" },
      { name: "Twitter", path: "https://twitter.com" },
    ],
  },
];

export default function Footer() {
 

  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textMain tracking-tight">
              Don’t Miss a Thing
            </h2>
            <p className="text-textLight text-sm sm:text-base">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>

            <form
              className="relative w-full max-w-md mx-auto lg:mx-0 mt-4 border-gary-300 border rounded-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter email address for newsletter ..."
                className="w-full pl-5 pr-12 py-3 rounded-full bg-bgLight border border-gray-200 text-textMain focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-textLight hover:text-primary transition-colors"
              >
                <FiArrowRight size={18}  />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-base sm:text-lg font-bold text-textMain mb-4 sm:mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-textLight hover:text-primary transition-colors text-sm font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textLight text-xs sm:text-sm font-medium text-center md:text-left">
            Copyright © {new Date().getFullYear()} Rentigo. All rights reserved.
          </p>

          <button
            // onClick={}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
          >
            <FiArrowUp size={18}  />
          </button>
        </div>
      </div>
    </footer>
  );
}
