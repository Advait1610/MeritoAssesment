import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import car_logo from '../Images/career-corner-logo.jpg'


const Navbar = () => {
    const [selected, setSelected] = useState("#home");
    const location = useLocation();
    const mobileMenuRef = useRef(null);

    useEffect(() => {
    setSelected(location?.hash || "#home");
    }, [location])
    
    function toggleMenu() {
    mobileMenuRef.current.classList.toggle("hidden");
    }
    
  return (
    <div>
          <nav className="navbar sticky w-full ">
      <div className="shadow-lg shadow-light_blue/20  w-full  border border-light_blue/50 bg-light_blue/30 backdrop-blur">
        <div className="max-w-full mx-auto px-4 py-2 text-black">
          <div className="flex justify-between text-lg">
            <div className="flex space-x-7">
              <a
                href="#home"
                className="flex items-center py-4 px-2"
              >
                <img src={car_logo} alt="career_cornor_Logo" className="h-16 w-24 mr-2" />
                <span className="font-black text-black text-2xl">
                  Career Corners
                </span>
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-content space-x-3">
              <a
                href="/#home"
                className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#home"
                    ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                  }`}
              >
                Home
              </a>
              <a
                href="/#about"
                className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#about"
                    ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                  }`}
              >
                Our Programs
              </a>
              <a
                href="/#schedule"
                className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#schedule"
                   ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                  }`}
              >
                Our Story
              </a>
              <a
                href="/#events"
                className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#events"
                    ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                  }`}
              >
                Our Brands
              </a>
              <a
                href="/#team"
                className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#team"
                    ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                  }`}
              >
                Social Initiatives
              </a>
              <a
                href="/#sponsors"
                className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#contact"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                  }`}
              >
                Contact Us
              </a>
              {/* <select
                className="py-4 px-6 text-black font-semibold hover:text-gold border-transparent hover:border-light_blue/80 bg-faint_blue/30 hover:bg-faint_blue/10 rounded-xl border transition duration-300"
              >
                <option disabled>Register</option>
                <option>Impetus</option>
                <option>Concepts</option>
                <option>Pradnya</option>
                <option>Judge</option>
              </select> */}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                className="outline-none menu-button"
                onClick={(_) => toggleMenu()}
              >
                <svg
                  className="w-8 h-8 text-light_blue/80"
                  x-show="! showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="hidden lg:hidden mobile-menu text-center flex item-center flex-col m-auto w-1/2"
            ref={mobileMenuRef}
          >
            <a
              href="/#home"
              className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#home"
                  ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#about"
                  ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                }`}
            >
              Our Programs
            </a>
            <a
              href="#schedule"
              className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#schedule"
                  ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                }`}
            >
              Our story
            </a>
            <a
              href="#events"
              className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#events"
                  ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                }`}
            >
              Our Brand
            </a>
            <a
              href="#team"
              className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#team"
                  ? "border-black/80 text-blue"
                    : "hover:text-amber-500 border-transparent"
                }`}
            >
              Social Initiatives
            </a>
            <a
              href="#sponsors"
              className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#contact"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                }`}
            >
              Contact Us
            </a>
            {/* <select
              className="mt-2 py-4 px-4 font-semibold hover:text-gold border-transparent hover:border-sky-800/80 bg-blue-600/30 hover:bg-blue-600/10 rounded-xl border transition duration-300"
            //   defaultValue={"Register"}
            //   onClick={handleSelect}
            >
              <option disabled>Register</option>
              <option >Impetus</option>
              <option>Concepts</option>
              <option>Pradnya</option>
              <option>Judges</option>
            </select> */}
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
