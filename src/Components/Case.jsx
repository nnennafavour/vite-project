// import React from "react";
// import Casestudiesblock from "../assets/Casestudiesblock.png";
// import Processblock from "../assets/Processblock.png";


// const Services = () => {
//   return (
//     <section id="services" className="px-6 md:px-[100px]">

//       {/* Header section */}
//       <div className="flex flex-col md:flex-row mt-[80px] md:mt-[140px] gap-6 md:gap-[40px] md:items-start">
//         <h1 className="px-2 py-1 bg-[#B9FF66] text-black font-bold w-fit">
//           Case Studies
//         </h1>

//         <p className="font-[Space Grotesk] font-normal text-[16px] md:text-[18px] max-w-[580px]">
//           Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
//         </p>
//       </div>

//       {/* Image */}
//       <img
//         src={Casestudiesblock}
//         alt="casestuidesblock"
//         className="mt-[60px] md:mt-[80px] w-full h-auto max-w-[1440px] mx-auto"
//       />

//       {/* CTA box */}

//   {/* LEFT SIDE (TEXT) */}
//   <div className="flex flex-col md:flex-row mt-[140px] md:items-start">
//     <h1 className="px-2 py-1 bg-[#B9FF66] text-black font-bold w-fit h-[51px]">
//           Our Working Process
//         </h1>

//     <p className="text-black w-[292px] h-[46px] ml-[40px]">
//       Step-by-Step Guide to Achieving Your Business Goals
//     </p>
//      </div>

//     {/* Image */}
//       <img
//         src={Processblock}
//         alt="Processblock"
//         className="mt-[60px] md:mt-[80px] w-full h-auto max-w-[1440px] mx-auto"
//       />
 

//     </section>
//   );
// };

// export default Services;





import React from "react";
import Casestudiesblock from "../assets/Casestudiesblock.png";
import Processblock from "../assets/Processblock.png";

const Case = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Case Studies */}
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-xl">
          Case Studies
        </h1>

        <p className="max-w-xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <img
        src={Casestudiesblock}
        alt="casestudies"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      {/* Process */}
      <div className="flex flex-col md:flex-row gap-6 mt-24">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-xl">
          Our Working Process
        </h1>

        <p className="max-w-md">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <img
        src={Processblock}
        alt="process"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

    </section>
  );
};

export default Case;