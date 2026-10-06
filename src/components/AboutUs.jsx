import about from "/assets/law.jpg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-5 relative overflow-hidden bg-white dark:bg-zinc-900
       border-b border-b-zinc-300/70 border-blur-md dark:border-b-zinc-700/70 border-blur-md"
    >
      <div className="py-5 relative overflow-hidden">
        <div className="container px-5 md:px-14 py-5 mx-auto">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4 text-[#31404c]
            dark:text-white"
            >
              About
              <span
                style={{
                  background: "linear-gradient(to right, #546f84, #415768)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {" "}
                The Firm
              </span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto font-semibold uppercase leading-relaxed text-[#31404c] dark:text-[#d1d5db]">
              Who we are
            </p>
          </div>

          <div
            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12
           items-center"
          >
            <figure
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-2"
            >
              <div
                className="relative w-155 h-100 lg:w-155 lg:h-100"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                {/* image */}

                <img
                  src={about}
                  alt="about img"
                  className="absolute rounded-2xl inset-0 w-full h-full object-cover transform
                   hover:scale-105 transition-transform duration-500"
                />
              </div>
            </figure>
            <article
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-justify lg:text-left relative order-1 lg:order-2"
            >
              <p
                className={` mb-2 sm:mb-4 leading-relaxed
               backdrop-blur-sm dark:text-zinc-300 text-gray-700`}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Oroboss' Solicitors is an innovative and technology based law
                firm located in Warri, Delta State, Nigeria. Our firm is
                committed to a client-centered approach, driven by the belief
                that exceptional legal services should be both accessible and
                practical, delivered with utmost integrity and professionalism.
              </p>
              <p
                className="mb-3 sm:mb-5 leading-relaxed
               
                backdrop-blur-sm dark:text-zinc-300 text-gray-700"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Our legal expertise covers the field of corporate commercial
                law, intellectual property, media-entertainment-technology and
                sports (METS), and litigation and dispute resolution. Our Firm
                offers legal services that mirror global standard. Our strength
                lies in the depth of experience of our lawyers.
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
                    Team Members
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
                    100%
                  </div>
                  <div
                    className={`text-xs sm:text-sm lg:text-base 
                            dark:text-gray-300 text-gray-600
                           `}
                  >
                    Dedication to Duty
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
