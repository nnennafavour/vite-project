// import React from "react";
// import Groupofcards from "../assets/Groupofcards.png";
// import Processblock from "../assets/Processblock.png";


// const Services = () => {
//   return (
//     <section id="services" className="px-6 md:px-[100px]">

//       {/* Header section */}
//       <div className="flex flex-col md:flex-row mt-[80px] md:mt-[140px] gap-6 md:gap-[40px] md:items-start">
//         <h1 className="px-2 py-1 bg-[#B9FF66] text-black font-bold w-fit">
//           Team
//         </h1>

//         <p className="font-[Space Grotesk] font-normal text-[16px] md:text-[18px] max-w-[580px]">
//           Meet the skilled and experienced team behind our successful digital marketing strategies
//         </p>
//       </div>

//       {/* Image */}
//       <img
//         src={Groupofcards}
//         alt="groupofcards"
//         className="mt-[60px] md:mt-[80px] w-full h-auto max-w-[1440px] mx-auto"
//       />

//       {/* CTA box */}

//   {/* LEFT SIDE (TEXT) */}
//     <div className="flex justify-end ">
//       <button className="bg-black text-white rounded-xl mr-[100px] gap-2.5 mt-10 py-5 px-[35px] w-[269px] h-[68px] sm:w-max">
//       See all Teams
//     </button>
//     </div>

//     </section>
//   );
// };

// export default Services;



import React from "react";
import Groupofcards from "../assets/Groupofcards.png";

const Team = () => {
  return (
    <section className="px-6 md:px-24">

      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit font-bold text-xl">
          Team
        </h1>

        <p className="max-w-xl">
          Meet the skilled and experienced team behind our successful
          digital marketing strategies
        </p>
      </div>

      <img
        src={Groupofcards}
        alt="team"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      <div className="flex justify-center md:justify-end mt-10">
        <button className="bg-black text-white rounded-xl py-4 px-10">
          See all Teams
        </button>
      </div>

    </section>
  );
};

export default Team;