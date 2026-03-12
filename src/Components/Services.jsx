// import React from "react";
// import Servicesblock from "../assets/Servicesblock.png";
// import Frame19 from "../assets/Frame19.png";


// const Services = () => {
//   return (
//     <section id="services" className="px-6 md:px-[100px]">

//       {/* Header section */}
//       <div className="flex flex-col md:flex-row mt-[80px] md:mt-[140px] gap-6 md:gap-[40px] md:items-start">
//         <h1 className="px-2 py-1 bg-[#B9FF66] text-black font-bold w-fit">
//           Services
//         </h1>

//         <p className="font-[Space Grotesk] font-normal text-[16px] md:text-[18px] max-w-[580px]">
//           At our digital marketing agency, we offer a range of services 
//           to help businesses grow and succeed online. These services include:
//         </p>
//       </div>

//       {/* Image */}
//       <img
//         src={Servicesblock}
//         alt="serviceblock"
//         className="mt-[60px] md:mt-[80px] w-full h-auto max-w-[1440px] mx-auto"
//       />

//       {/* CTA box */}
//       <div className="bg-[#F3F3F3] rounded-2xl mt-[80px] md:mt-[124px] p-6 md:p-[60px] max-w-[1240px] h-[347px] mx-auto flex flex-col md:flex-row items-center justify-between">

//   {/* LEFT SIDE (TEXT) */}
//   <div className="max-w-[500px]">
//     <h2 className="text-black text-xl md:text-2xl font-bold">
//       Let's make things happen
//     </h2>

//     <p className="text-black mt-[20px]">
//       Contact us today to learn more about how our digital marketing services
//       can help your business grow and succeed online.
//     </p>

//     <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl w-full sm:w-max">
//       Get your free proposal
//     </button>
//   </div>

//   {/* RIGHT SIDE (IMAGE) */}
//   <img
//     src={Frame19}
//     alt="frame19"
//     className="w-[250px] md:w-[494px] h-auto mt-10 md:mt-0"
//   />

// </div>
//     </section>
//   );
// };

// export default Services;



import React from "react";
import Servicesblock from "../assets/Servicesblock.png";
import Frame19 from "../assets/Frame19.png";

const Services = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-xl">
          Services
        </h1>

        <p className="max-w-xl">
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

      {/* CTA */}
      <div className="bg-[#F3F3F3] rounded-[45px] mt-20 
                      w-full md:w-[1240px] h-auto md:h-[347px] 
                      mx-auto flex flex-col md:flex-row items-center justify-between 
                      gap-6 md:gap-10 p-8 md:p-16">

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold">
            Let's make things happen
          </h2>

          <p className="mt-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
            Get your free proposal
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={Frame19}
            alt="frame"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;