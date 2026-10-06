import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  const iconMap = {
    IoMdMail,
    FaPhone,
    MdLocationOn,
  };

  const contactInfo = [
    {
      icon: "IoMdMail",
      title: "Email Address",
      description: "oroboss11@gmail.com.",
    },
    {
      icon: "FaPhone",
      title: "Telephone Number",
      description: "+234 0906 042 2440",
    },
    {
      icon: "MdLocationOn",
      title: "Office Address",
      description:
        "148 D.S.C. Expressway by Classical Intl School, Udu Local Government Area of Delta State, Nigeria",
    },
  ];

  return (
    <section
      id="contact"
      className="py-5 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white dark:bg-zinc-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3
          text-[#31404c] dark:text-[#546F84]"
          >
            Contact
            <span className="text-[#546F84] dark:text-white"> Us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl dark:text-zinc-200 text-[#31404c]">
            Our Contact Information
          </p>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10
                items-center"
        >
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <div className="space-y-12 text-left">
              {contactInfo.map((step, index) => {
                const IconComponent = iconMap[step.icon];
                return (
                  <div
                    key={index}
                    y={150}
                    delay={index * 0.15}
                    className="flex items-start gap-5"
                  >
                    <span className="text-[#546f84] font-medium text-lg shrink-0">
                      {IconComponent && (
                        <IconComponent className="text-[#546f84] size-5 shrink-0 mt-0.5" />
                      )}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="text-xl mb-2.5 text-[#31404c] dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/**
            * 
            <img
              src={contactImg}
              alt="contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md
                                h-auto object-contain"
            />
            */}
          </div>

          <form
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg
                    order-1 lg:order-2 border-[#e5e7eb] dark:border-[#374151] 
                    dark:bg-linear-to-r from-zinc-800 to-zinc-900 "
            data-aos="fade-left"
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3
                        sm:gap-4 mb-3 sm:mb-4"
            >
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-[#564f84]
                            focus:ring-1 focus:ring-[#564f84] transition-all
                            dark:text-zinc-200
                            bg-[#faede3] dark:bg-zinc-600 placeholder-zinc-400
                            "
                required
              />

              {/*last name */}
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-[#564f84]
                            focus:ring-1 focus:ring-[#564f84] transition-all
                            dark:text-zinc-200
                            bg-[#faede3] dark:bg-zinc-600 placeholder-zinc-400
                            "
                required
              />
            </div>
            {/*email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-orange-500
                            focus:ring-2 focus:ring-orange-500/20 transition-all
                            mb-3 sm:mb-4    dark:text-zinc-200
                            bg-[#faede3] dark:bg-zinc-600 placeholder-zinc-400
                       "
              required
            />
            {/*phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-orange-500
                            focus:ring-2 focus:ring-orange-500/20 transition-all
                             mb-3 sm:mb-4   dark:text-zinc-200
                            bg-[#faede3] dark:bg-zinc-600 placeholder-zinc-400
                       "
              required
            />
            {/*message */}
            <textarea
              rows="3"
              type="text"
              placeholder="Message"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                            text-sm sm:text-base focus:border-orange-500
                            focus:ring-2 focus:ring-orange-500/20 transition-all
                            mb-4 sm:mb-6 resize-none   dark:text-zinc-200
                            bg-[#faede3] dark:bg-zinc-600 placeholder-zinc-400
                       "
              required
            />
            <button
              type="submit"
              className=" w-full py-2 sm:py-3 text-white font-semibold
                    rounded-lg text-sm sm:text-base hover:shadow-lg
                     hover:shadow-zinc-500/25 hover:scale-[1.02] transition-all
                      bg-linear-to-r from-[#546f84] to-[#273844]
                     cursor-pointer inline-flex items-center justify-center
                    duration-300 transform"
            >
              <IoMdMail className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
