import { useState, useEffect } from "react";
import { GoLaw } from "react-icons/go";
import { RiCloseLine, RiMoonFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import { navItems } from "../data";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {
    /*theme */
  }

  const [theme, setTheme] = useState("light");

  const toggleThene = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  });

  return (
    // 1. Full-width container stretching 100% of the viewport
    <nav
      className=" fixed top-0 w-full px-auto transition-all duration-300
     shadow-md z-50 bg-white/70 backdrop-blur-md dark:bg-zinc-900 dark:shadow-zinc-950/70"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      {/* Centered Inner Content Wrapper */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* icon on the left */}

            <span
              className="p-2 rounded-full text-white mr-1 font-bolder
            bg-linear-to-r from-[#546f84]
                  to-[#31404c] "
            >
              <GoLaw className="w-6 h-6" />
            </span>

            <div className="flex flex-col pt-1">
              <span className="text-xl font-medium tracking-wider text-[#304351] dark:text-zinc-200 -mb-0.5">
                OROBOSS'
              </span>
              <span
                className="tracking-[0.34em] text-sm text-gray-900 -mt-1
              dark:text-zinc-400"
              >
                Solicitors
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="hover:cursor-pointer hover:text-zinc-500 px-3 py-2 rounded-md text-md font-medium
                     transition-colors
                text-[#546f84] dark:text-zinc-400"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-2 gap-2">
            <button
              onClick={toggleThene}
              className="p-2 rounded-full bg-[#546f84] 
              hover:shadow-md backdrop-blur-md cursor-pointer dark:bg-gray-700
              "
            >
              {theme === "light" ? (
                <RiMoonFill className="text-white" title="dark mode" />
              ) : (
                <FiSun className="text-white" title="light mode" />
              )}
            </button>
            <button
              className="hidden md:block bg-linear-to-r from-[#546f84] to-[#31404c] 
               hover:bg-[#546f84]/70 hover:shadow-[0_0_40px_rgb(84,111,132,0.5)] 
          text-white px-6 py-2 rounded-xl transition cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                {" "}
                <IoMdLogIn className="arrow" />
                SIGN IN
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md 
               text-[#546f84] hover:text-white hover:bg-[#546f84] focus:outline-none
               dark:text-zinc-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <RiCloseLine className="w-8 h-8 " />
              ) : (
                <IoMenu className="w-9 h-9" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div
          className="px-2 pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-sm rounded-lg 
        border border-[#546f84]/60 shadow-md"
        >
          {navItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className="block px-4 py-2 rounded-md text-base font-medium text-[#546f84]
                dark:text-zinc-900 hover:text-white hover:bg-[#546f84] transition-all duration-200"
              >
                {item.name}
              </a>
            );
          })}

          <div className="px-3 py-2">
            <button  onClick={() => setIsOpen(!isOpen)}
              className="w-full relative ">
              <div className="relative px-4 py-4 bg-linear-to-r from bg-[#546f84] to-[#273844] rounded-lg leading-none flex items-center justify-center">
                <span className="text-white group-hover:text-white transition duration-200">
                  SIGN IN
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

