

// import React, { useState } from "react";
// import Illustration from "../assets/Illustration.png";
// import Logotypes from "../assets/Logotypes.png";

// const Hero = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleBookConsultation = () => {
//     setIsDialogOpen(true);
//   };

//   return (
//     <div className="pt-28 px-6 md:px-24">

//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[1240px] mx-auto">

//         <div className="max-w-xl">
//           <h1 className="text-4xl md:text-6xl font-medium leading-tight">
//             Navigating the digital landscape for success
//           </h1>

//           <p className="mt-6 text-lg">
//             Our digital marketing agency helps businesses grow and succeed
//             online through SEO, PPC, social media marketing, and content creation.
//           </p>

//           <button
//             onClick={handleBookConsultation}
//             className="mt-8 px-6 py-3 cursor-pointer bg-black text-white rounded-xl"
//           >
//             Book a consultation
//           </button>
//         </div>

//         <img
//           src={Illustration}
//           alt="Illustration"
//           className="w-full max-w-md"
//         />
//       </div>

//       {/* Logos */}
//       <img
//         src={Logotypes}
//         alt="logos"
//         className="w-full max-w-[1240px] mx-auto mt-16"
//       />

//       {/* Modal */}
//       {isDialogOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <div className="bg-white p-6 rounded-xl w-[400px]">
//             <h2 className="text-xl font-semibold mb-2">
//               Book a Consultation
//             </h2>

//             <p className="text-gray-600 mb-4">
//               Fill out the form below and we'll get back to you within 24 hours.
//             </p>

//             <div className="grid gap-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="px-3 py-2 border border-gray-300 rounded-lg"
//               />
//               <input
//                 type="email"
//                 placeholder="your@email.com"
//                 className="px-3 py-2 border border-gray-300 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Your company name"
//                 className="px-3 py-2 border border-gray-300 rounded-lg"
//               />

//               <button
//                 onClick={() => {
//                   setIsDialogOpen(false);
//                   alert("Thank you! We'll contact you soon.");
//                 }}
//                 className="bg-black text-white py-2 rounded-lg"
//               >
//                 Submit Request
//               </button>

//               <button
//                 onClick={() => setIsDialogOpen(false)}
//                 className="text-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;
import React, { useState } from "react";
import Illustration from "../assets/Illustration.png";
import Logotypes from "../assets/Logotypes.png";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="pt-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-medium leading-tight">
              Navigating the digital landscape for success
            </h1>

            <p className="mt-4 text-gray-600">
              Our digital marketing agency helps businesses grow and succeed
              online through SEO, PPC, social media marketing, and content creation.
            </p>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="mt-6 px-6 py-3 bg-black text-white rounded-xl"
            >
              Book a consultation
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center w-full">
            <img
              src={Illustration}
              alt="Illustration"
              className="w-full max-w-[350px] md:max-w-[450px] object-contain"
            />
          </div>
        </div>

        {/* Logos */}
        <div className="mt-12">
          <img
            src={Logotypes}
            alt="logos"
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">
              Book a Consultation
            </h2>

            <div className="grid gap-4">
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Name" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Email" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Company" />

              <button className="bg-black text-white py-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;