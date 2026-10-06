import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="border-t bg-white border-t-zinc-600/70
     dark:bg-zinc-900 dark:border-[#374151]"
    >
      <div className="container px-4 py-8">
        <div
          className="flex flex-col md:flex-row justify-between
                        items-center gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 scale-75">
              {/* icon on the left */}

              <span
                className="p-2 rounded-full text-white mr-1 font-bolder
            bg-linear-to-r from-[#546f84]
                  to-[#31404c] "
              >
                <GoLaw className="w-6 h-6" />
              </span>

              <div className="flex flex-col pt-1">
                <span className="text-xl font-medium tracking-wider text-[#304351] dark:text-zinc-400 -mb-0.5">
                  OROBOSS'
                </span>
                <span className="tracking-[0.34em] text-sm text-gray-500 -mt-1">
                  Solicitors
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center
                  hover:scale-110 transition-all bg-linear-to-r from-[#546f84]
                  to-[#1d262d]
                  text-white"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center
                  hover:scale-110 transition-all bg-linear-to-r from-[#546f84]
                  to-[#1d262d] 
                  text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center
                  hover:scale-110 transition-all bg-linear-to-r from-[#546f84]
                  to-[#1d262d]
                  text-white"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p
              className="text-sm flex items-center justify-end gap-1
                                text-[#6b7280] dark:text-[#9ca3af]"
            >
              &copy; {currentYear}:<span>Oroboss</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
