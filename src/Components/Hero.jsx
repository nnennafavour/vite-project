
// import React from 'react'
// import illustration from "../assets/illustration.png"
// import Logotypes from "../assets/Logotypes.png"

// const Hero = () => {
//   return (
//     <div className="pt-24 md:pt-36 px-6 md:px-24">
      
//       {/* Flex container for text + image */}
//       <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl gap-12">
        
//         {/* Left side: Text */}
//         <div className="flex flex-col max-w-3xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">
//             Navigating the digital landscape for success
//           </h1>

//           <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
//             Our digital marketing agency helps businesses grow and succeed online 
//             through a range of services including SEO, PPC, social media marketing, 
//             and content creation.
//           </p>

//           <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl w-max">
//             Book a consultation
//           </button>
//         </div>

//         {/* Right side: Image */}
//         <div className="shrink-0">
//   <img 
//     src={illustration} 
//     alt="illustration" 
//     className="w-full max-w-lg h-auto md:ml-25"
//   />
// </div>

//       </div>
//       <img 
//   src={Logotypes} 
//   alt="logo" 
//   className="object-contain h-12 w-full mt-10 md:mt-17.5 md:w-360 md:mr-25"
// />
//     </div>
//   )
// }

// export default Hero




import React from "react";
import Illustration from "../assets/Illustration.png";
import Logotypes from "../assets/Logotypes.png";

const Hero = () => {
  return (
    <div className="pt-28 px-6 md:px-24">

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[1240px] mx-auto">

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            Navigating the digital landscape for success
          </h1>

          <p className="mt-6 text-lg">
            Our digital marketing agency helps businesses grow and succeed
            online through SEO, PPC, social media marketing, and content creation.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl">
            Book a consultation
          </button>
        </div>

        <img
          src={Illustration}
          alt="Illustration"
          className="w-full max-w-md"
        />

      </div>

      <img
        src={Logotypes}
        alt="logos"
        className="w-full max-w-[1240px] mx-auto mt-16"
      />

    </div>
  );
};

export default Hero;