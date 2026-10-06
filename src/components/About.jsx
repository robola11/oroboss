import about from "/assets/law.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden flex items-center
    justify-center px-4 sm:px-6 bg-white dark:bg-zinc-900 border-b border-b-[#546f84]/70"
    >
      <div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12
 items-center"
      >
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-2"
        >
          <div className="relative w-155 h-100 lg:w-155 lg:h-100">
            {/* image */}
            <div
              className="absolute -inset-10 lg:-inset-20 "
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <img
              src={about}
              alt="about img"
              className="absolute rounded-2xl  inset-0 w-full h-full object-cover
              transform hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-centerlg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6
        text-[#546F84] bg-clip-text dark:text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About{" "}
              <span className="text-zinc-900 dark:text-[#546f84]">Us</span>
            </h1>
          </header>
          <p
            className={` mb-4 sm:mb-6 leading-relaxed
     
      backdrop-blur-sm dark:text-zinc-300 text-gray-700`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Oroboss' Solicitors is an innovative and technology based law firm
            strategically located in Warri, Delta State, Nigeria. Our firm is
            deeply committed to a client-centered approach, driven by the core
            belief that exceptional legal services should be both accessible and
            practical, delivered with the utmost integrity and professionalism.
          </p>
          <p
            className="mb-6 sm:mb-8 leading-relaxed
     
      backdrop-blur-sm dark:text-zinc-300 text-gray-700"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our legal expertise covers the field of corporate commercial law,
            intellectual property, media-entertainment-technology and sports
            (METS), and litigation and dispute resolution Our Firm offers legal
            services that mirror the highest global standard of quality. Our
            strength lies in the depth of experience of our lawyers who maintain
            a high level of professionalism in transactions with various
            clients.
          </p>
          <div
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6
        lg:gap-8 mb-6 sm:mb-8"
          >
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#546F84]">
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base
                  dark:text-gray-300 text-gray-600 `}
              >
                Education
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#546F84]">
                10+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base
                  dark:text-gray-300 text-gray-600
                 `}
              >
                Years Experience
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#546F84]">
                100+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base 
                  dark:text-gray-300 text-gray-600
                 `}
              >
                Projects Completed
              </div>
            </div>
          </div>
          <button
            className="w-full sm:w-auto border-2 border-[#546F84]/70 inline-flex items-center
            justify-center py-2 px-4 sm:px-8 hover:shadow-[0_0_40px_rgb(84,111,132,0.7)] rounded-2xl
            text-base sm:text-lg font-semibold transition-all duration-300 transform
             dark:text-white text-[#546F84] bg-white/90
             dark:bg-linear-to-r from-[#546f84] to-[#273844]"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
