// // src/Components/Navbar.jsx
// import React, { useState } from "react";
// import Vector from "../assets/Vector.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 scroll-smooth">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-20">
        
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src={Vector} alt="Vector" className="w-9 h-9" />
//           <span className="text-lg font-semibold">Positivus</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-10">
//           <a href="#home">Home</a>
//           <a href="#services">Services</a>
//           <a href="#cases">Cases</a>
//           <a href="#team">Team</a>
//           <a href="#blog">Blog</a>

//           <p className="rounded-2xl border-2 px-6 py-2">Request a quote</p>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="focus:outline-none"
//           >
//             <div className="w-6 h-0.5 bg-black mb-1"></div>
//             <div className="w-6 h-0.5 bg-black mb-1"></div>
//             <div className="w-6 h-0.5 bg-black"></div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 text-xl">
//           <a href="#home">Home</a>
//           <a href="#services">Services</a>
//           <a href="#cases">Cases</a>
//           <a href="#team">Team</a>
//           <a href="#blog">Blog</a>

//           <p className="rounded-2xl border-2 px-6 py-2">Request a quote</p>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import Vector from "../assets/Vector.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">

      <div className="max-w-[1240px] mx-auto px-6 md:px-24 flex justify-between items-center h-20">

        <div className="flex items-center gap-2">
          <img src={Vector} alt="logo" className="w-8 h-8" />
          <span className="font-semibold">Positivus</span>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#cases">Cases</a>
          <a href="#team">Team</a>
          <a href="#blog">Blog</a>

          <button className="border px-6 py-2 rounded-xl">
            Request a quote
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#cases">Cases</a>
          <a href="#team">Team</a>
          <a href="#blog">Blog</a>
        </div>
      )}

    </nav>
  );
};

export default Navbar;