


// import React, { useState } from "react";
// import Vector from "../assets/Vector.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isQuoteOpen, setIsQuoteOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full bg-white shadow-md fixed top-0 z-50">
//         <div className="max-w-[1240px] mx-auto px-6 md:px-24 flex justify-between items-center h-20">

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <img src={Vector} alt="logo" className="w-8 h-8" />
//             <span className="font-semibold">Positivus</span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex gap-10 items-center">
//             <a href="#home">Home</a>
//             <a>About Us</a>
//             <a href="#services">Services</a>
//             <a href="#cases">Cases</a>
//             <a>Pricing</a>
//             <a>Blog</a>

//             <button
//               onClick={() => setIsQuoteOpen(true)}
//               className="border px-6 py-2 rounded-xl cursor-pointer"
//             >
//               Request a quote
//             </button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
//             <a href="#home">Home</a>
//             <a href="#services">Services</a>
//             <a href="#cases">Cases</a>
//             <a href="#team">Team</a>
//             <a href="#blog">Blog</a>
//           </div>
//         )}
//       </nav>

//       {/* Quote Modal */}
//       {isQuoteOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <div className="bg-white p-6 rounded-xl w-[400px]">
//             <h2 className="text-xl font-semibold mb-2">Request a Quote</h2>
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
//                 placeholder="Your email"
//                 className="px-3 py-2 border border-gray-300 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Company name"
//                 className="px-3 py-2 border border-gray-300 rounded-lg"
//               />

//               <button
//                 onClick={() => {
//                   setIsQuoteOpen(false);
//                   alert("Thank you! We'll contact you soon.");
//                 }}
//                 className="bg-black text-white py-2 rounded-lg"
//               >
//                 Submit Request
//               </button>

//               <button
//                 onClick={() => setIsQuoteOpen(false)}
//                 className="text-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Vector from "../assets/Vector.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <img src={Vector} alt="logo" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-lg truncate">Positivus</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home">Home</a>
            <a>About Us</a>
            <a href="#services">Services</a>
            <a href="#cases">Cases</a>
            <a>Pricing</a>
            <a>Blog</a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="border px-4 py-2 rounded-xl whitespace-nowrap"
            >
              Request a quote
            </button>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-6 flex flex-col gap-4 bg-white w-full">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#cases">Cases</a>
            <a href="#team">Team</a>
            <a href="#blog">Blog</a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="border px-4 py-2 rounded-xl w-full"
            >
              Request a quote
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Request a Quote</h2>

            <div className="grid gap-4">
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Your name" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Email" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Company" />

              <button className="bg-black text-white py-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;