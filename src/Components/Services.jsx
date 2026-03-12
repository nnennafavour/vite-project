import React from "react";
import Servicesblock from "../assets/Servicesblock.png";
import Frame19 from "../assets/Frame19.png";

const Services = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-lg md:text-xl">
          Services
        </h1>

        <p className="max-w-xl text-sm md:text-base">
          At our digital marketing agency, we offer a range of services
          to help businesses grow and succeed online.
        </p>
      </div>

      {/* Services Image */}
      <img
        src={Servicesblock}
        alt="services"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      {/* CTA Grey Box */}
      <div className="
        bg-[#F3F3F3] rounded-[45px] mt-20
        w-full max-w-[1240px]
        h-auto md:h-[347px]
        mx-auto flex flex-col md:flex-row items-center justify-between
        gap-6 p-6 md:p-16
      ">

        {/* Text + Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold md:leading-snug">
            Let's make things happen
          </h2>

          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="mt-6 px-4 py-2 bg-black text-white rounded-xl text-sm md:text-base w-fit">
            Get your free proposal
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={Frame19}
            alt="frame"
            className="w-full max-w-full md:max-w-[1240px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;