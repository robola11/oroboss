import hero from "/assets/hero2.webp";

import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-screen flex flex-col
     dark:bg-zinc-900 border-b border-b-zinc-300/70 border-blur-md dark:border-b-zinc-700/70
      border-blur-md"
    >
      <section
        id="hero"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div
          className="container mx-auto flex px-4 sm:px-4 lg:px-16 py-14
            lg:py-16 flex-col lg:flex-row items-center justify-between lg:mt-22 mt-20"
        >
          <div
            className="lg:w-1/2 w-full flex flex-col items-center lg:items-start
                text-center lg:text-left mb-3 lg:mb-0"
          >
            <h1
              className={`title-font text-2xl sm:text-3xl lg:text-4xl
                    mb-5 font-medium dark:text-white`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-[#31404c] dark:text-zinc-400">
                Legal Practitioners & Property Consultants
              </span>
            </h1>

            <p
              className={`mb-4 sm:mb-6 leading-relaxed max-w-md sm:max-w-lg dark:text-zinc-500
                      `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              A firm of technology based, innovative and idealistic team of
              Legal Practitioners, Barristers and Solicitors of the Supreme
              Court of Nigeria with head office in Warri Delta State, Nigeria!
            </p>
            {/* button */}
            <div className="w-full pt-3 sm:pt-4">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start
                         gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <a href="#contact"  className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center hover:shadow-[0_0_40px_rgb(84,111,132,0.7)] 
                                justify-center text-white bg-linear-to-r from bg-[#546f84] to-[#273844]
                                border-0 py-3 px-6 sm:px-8 cursor-pointer rounded-xl
                                text-base sm:text-lg font-semibold transition-all duration-300 transform"
                  >
                    <IoMdMail className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0
                    flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative  w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="hero image"
                  className="w-full h-auto object-cover transform
                                hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
