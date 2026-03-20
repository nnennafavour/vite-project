// import React from 'react';
// import Logofooter from "../assets/Logofooter.png";
// import Linkedin from "../assets/Linkedin.png";
// import facebook from "../assets/facebook.png";
// import Twitter from "../assets/Twitter.png";

// const Blog = () => {
//   return (
//     <div className="w-full max-w-[1241px] bg-black mx-auto mt-[140px] px-6 sm:px-12 pt-[55px] flex flex-col">
      
//       {/* TOP ROW */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
//         {/* LEFT: LOGO */}
//         <div className="flex-1">
//           <a href="#">
//             <img src={Logofooter} alt="logo" className="h-10 md:h-auto" />
//           </a>
//         </div>

//         {/* CENTER: LINKS */}
//         <div className="flex-1 flex flex-wrap justify-center gap-6 text-white">
//           <a href="#" className="hover:underline">About</a>
//           <a href="#" className="hover:underline">Services</a>
//           <a href="#" className="hover:underline">Use Cases</a>
//           <a href="#" className="hover:underline">Pricing</a>
//           <a href="#" className="hover:underline">Blog</a>
//         </div>

//         {/* RIGHT: SOCIAL ICONS */}
//         <div className="flex-1 flex justify-end gap-4">
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//             <img src={Linkedin} alt="linkedin" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <img src={facebook} alt="facebook" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//             <img src={Twitter} alt="twitter" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
//           </a>
//         </div>
//       </div>

//       {/* CONTACT + INPUT ROW */}
//       <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-6">
        
//         {/* LEFT: CONTACT */}
//         <div className="w-full md:w-[332px]">
//           <h1 className="bg-[#B9FF66] text-black px-2 py-1 w-fit">
//             Contact Us:
//           </h1>

//           <p className="text-white mt-4 leading-7">
//             Email: <a href="mailto:info@positivus.com" className="underline hover:text-gray-300">info@positivus.com</a><br />
//             Phone: <a href="tel:5555678901" className="underline hover:text-gray-300">555-567-8901</a><br />
//             Address: 1234 Main St<br />
//             Moonstone City, Stardust State 12345
//           </p>
//         </div>

//         {/* RIGHT: INPUT + BUTTON */}
//         <div className="mt-[96px] flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full sm:w-[285px] px-4 py-2 rounded-lg border border-gray-400 bg-transparent text-white outline-none"
//           />

//           <button className="bg-[#B9FF66] cursor-pointer text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
//             Subscribe to news
//           </button>
//         </div>

//       </div>

//       {/* DIVIDER LINE */}
//       <div className="mt-10 border-t border-gray-600 w-full"></div>

//       {/* BOTTOM TEXT */}
//       <p className="text-white mt-6 text-sm text-center md:text-left">
//         © 2023 Positivus. All Rights Reserved. <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>
//       </p>

//     </div>
//   );
// };

// export default Blog;
import React from 'react';
import Logofooter from "../assets/Logofooter.png";
import Linkedin from "../assets/Linkedin.png";
import facebook from "../assets/facebook.png";
import Twitter from "../assets/Twitter.png";

const Blog = () => {
  return (
    <div className="w-full max-w-[1241px] bg-black mx-auto mt-[140px] px-4 sm:px-12 pt-[55px] flex flex-col">
      
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* LEFT: LOGO */}
        <div className="flex-1">
          <a href="#">
            <img src={Logofooter} alt="logo" className="h-10 md:h-auto" />
          </a>
        </div>

        {/* CENTER: LINKS */}
        <div className="flex-1 flex flex-wrap justify-center gap-4 md:gap-6 text-white">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Use Cases</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Blog</a>
        </div>

        {/* RIGHT: SOCIAL ICONS */}
        <div className="flex-1 flex justify-start md:justify-end gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="linkedin" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="twitter" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
          </a>
        </div>
      </div>

      {/* CONTACT + INPUT ROW */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mt-10">
        
        {/* LEFT: CONTACT */}
        <div className="w-full md:w-[332px]">
          <h1 className="bg-[#B9FF66] text-black px-2 py-1 w-fit">
            Contact Us:
          </h1>

          <p className="text-white mt-4 leading-7 text-sm md:text-base">
            Email: <a href="mailto:info@positivus.com" className="underline hover:text-gray-300">info@positivus.com</a><br />
            Phone: <a href="tel:5555678901" className="underline hover:text-gray-300">555-567-8901</a><br />
            Address: 1234 Main St<br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

        {/* RIGHT: INPUT + BUTTON */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-[285px] px-4 py-2 rounded-lg border border-gray-400 bg-transparent text-white outline-none"
          />

          <button className="bg-[#B9FF66] cursor-pointer text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Subscribe to news
          </button>
        </div>
      </div>

      {/* DIVIDER LINE */}
      <div className="mt-10 border-t border-gray-600 w-full"></div>

      {/* BOTTOM TEXT */}
      <p className="text-white mt-6 text-sm text-center md:text-left">
        © 2023 Positivus. All Rights Reserved. <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>
      </p>

    </div>
  );
};

export default Blog;