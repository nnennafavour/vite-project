

// import React from "react";
// import Illustration1 from "../assets/Illustration1.png";
// import Illustration2 from "../assets/Illustration2.png";
// import Illustration3 from "../assets/Illustration3.png";
// import Illustration4 from "../assets/Illustration4.png";
// import Illustration5 from "../assets/Illustration5.png";
// import Illustration6 from "../assets/Illustration6.png";
// import Icon from "../assets/Icon.png";
// import Icon1 from "../assets/Icon1.png";
// import Card2 from "../assets/Card2.png";
// import Card3 from "../assets/Card3.png";
// import Card4 from "../assets/Card4.png";
// import Frame19 from "../assets/Frame19.png";

// const Services = () => {
//   return (
//     <section className="px-6 md:px-24">

//       {/* Header */}<div className="max-w-[1240px] mx-auto mt-20 flex flex-col md:flex-row gap-6 items-center md:items-start">
      
//         <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-lg md:text-xl">
//           Services
//         </h1>
//         <p className="max-w-xl text-sm md:text-base">
//           At our digital marketing agency, we offer a range of services
//           to help businesses grow and succeed online.
//         </p>
//       </div>

//       {/* Cards */}

//   {/* Cards */}
// <div className="mt-12 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

//   {/* CARD 1 */}
//   <a
//     href="/services"
//     className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#F3F3F3] mr-[100px] w-[600px] mt-[80px] h-[310px] border-2 rounded-2xl flex justify-center"
//   >
//     <div className="flex flex-col gap-6">
//       <h1 className="bg-[#B9FF66] px-3 py-2 mt-[50px] text-lg font-semibold inline-block">
//         Search engine optimization
//       </h1>
//       <div className="flex items-center gap-3 mt-[93px] ml-[10px] text-gray-700">
//         <img src={Icon} alt="arrow" className="w-[41px] h-[41px]" />
//         <p>Learn more</p>
//       </div>
//     </div>
//     <img
//       src={Illustration1}
//       alt="illustration"
//       className="w-[210px] h-[170px] mt-[70px] ml-[50px]"
//     />
//   </a>

//   {/* CARD 2 */}
//   <a
//     href="/services"
//     className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#B9FF66] mr-[100px] w-[600px] mt-[80px] h-[310px] border-2 rounded-2xl flex justify-center"
//   >
//     <div className="flex flex-col gap-6">
//       <h2 className="bg-white px-3 py-2 mt-[50px] text-lg font-semibold inline-block">
//         Pay-per-click advertising
//       </h2>
//       <div className="flex items-center gap-3 mt-[93px] text-gray-700">
//         <img src={Icon} alt="arrow" className="w-[41px] h-[41px]" />
//         <p>Learn more</p>
//       </div>
//     </div>
//     <img
//       src={Illustration2}
//       alt="illustration"
//       className="w-[210px] h-[170px] mt-[70px] ml-[50px]"
//     />
//   </a>

//   {/* CARD 3 */}
//   <a
//     href="/services"
//     className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#191A23] mr-[100px] w-[600px] h-[310px] border-2 rounded-2xl flex justify-center"
//   >
//     <div className="flex flex-col gap-6">
//       <h3 className="bg-white px-3 py-2 mt-[50px] text-lg font-semibold inline-block">
//         Social Media Marketing
//       </h3>
//       <div className="flex items-center gap-3 mt-[93px] text-white">
//         <img src={Icon1} alt="arrow" className="w-[41px] h-[41px]" />
//         <p>Learn more</p>
//       </div>
//     </div>
//     <img
//       src={Illustration3}
//       alt="illustration"
//       className="w-[210px] h-[170px] mt-[70px] ml-[50px]"
//     />
//   </a>

//   {/* CARD 4 */}
//   <a
//     href="/services"
//     className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#F3F3F3] mr-[100px] w-[600px] h-[310px] border-2 rounded-2xl flex justify-center"
//   >
//     <div className="flex flex-col gap-6">
//       <h4 className="bg-[#B9FF66] px-3 py-2 mt-[50px] text-lg font-semibold inline-block">
//         Email Marketing
//       </h4>
//       <div className="flex items-center gap-3 mt-[93px] text-gray-700">
//         <img src={Icon} alt="arrow" className="w-[41px] h-[41px]" />
//         <p>Learn more</p>
//       </div>
//     </div>
//     <img
//       src={Illustration4}
//       alt="illustration"
//       className="w-[210px] h-[170px] mt-[70px] ml-[50px]"
//     />
//   </a>

//   {/* CARD 5 */}
//   <a
//     href="/services"
//     className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#B9FF66] mr-[100px] w-[600px] h-[310px] border-2 rounded-2xl flex justify-center"
//   >
//     <div className="flex flex-col gap-6">
//       <h5 className="bg-[#B9FF66] px-3 py-2 mt-[50px] text-lg font-semibold inline-block">
//         Content Creation
//       </h5>
//       <div className="flex items-center gap-3 mt-[93px] text-gray-700">
//         <img src={Icon} alt="arrow" className="w-[41px] h-[41px]" />
//         <p>Learn more</p>
//       </div>
//     </div>
//     <img
//       src={Illustration5}
//       alt="illustration"
//       className="w-[210px] h-[170px] mt-[70px] ml-[50px]"
//     />
//   </a>

//   {/* CARD 6 */}
//   <a
//     href="/services"
//     className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#191A23] mr-[100px] w-[600px] h-[310px] border-2 rounded-2xl flex justify-center"
//   >
//     <div className="flex flex-col gap-6">
//       <h6 className="bg-[#B9FF66] px-3 py-2 mt-[50px] text-lg font-semibold inline-block">
//         Analytics and Tracking
//       </h6>
//       <div className="flex items-center gap-3 mt-[93px] text-white">
//         <img src={Icon1} alt="arrow" className="w-[41px] h-[41px]" />
//         <p>Learn more</p>
//       </div>
//     </div>
//     <img
//       src={Illustration6}
//       alt="illustration"
//       className="w-[210px] h-[170px] mt-[70px] ml-[50px]"
//     />
//   </a>

// </div>



        

//       {/* CTA Grey Box */}
//       <div className="bg-[#F3F3F3] rounded-[45px] mt-20 w-full max-w-[1240px] h-[347px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-16">

//   {/* Text + Button */}
//   <div className="w-full md:w-1/2 flex flex-col justify-center">
//     <h2 className="text-xl md:text-2xl font-bold md:leading-snug">
//       Let's make things happen
//     </h2>
//     <p className="mt-4 text-sm md:text-base leading-relaxed w-[500px] h-[69px]">
//       Contact us today to learn more about how our digital marketing
//       services can help your business grow and succeed online.
//     </p>

//     {/* Clickable Button */}
//     <a
//       href="/get-proposal"  // <-- Replace this with your actual link
//       className="mt-6 px-4 py-2 bg-black text-white rounded-xl text-sm md:text-base w-fit inline-block transition-all duration-300 hover:bg-gray-800 hover:scale-105"
//     >
//       Get your free proposal
//     </a>
//   </div>

//   {/* Image */}
//   <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
//     <img
//       src={Frame19}
//       alt="frame"
//       className="w-full max-w-full md:max-w-[1240px] h-auto object-contain"
//     />
//   </div>

//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import Illustration1 from "../assets/Illustration1.png";
import Illustration2 from "../assets/Illustration2.png";
import Illustration3 from "../assets/Illustration3.png";
import Illustration4 from "../assets/Illustration4.png";
import Illustration5 from "../assets/Illustration5.png";
import Illustration6 from "../assets/Illustration6.png";
import Icon from "../assets/Icon.png";
import Icon1 from "../assets/Icon1.png";
import Frame19 from "../assets/Frame19.png";

const Services = () => {
  return (
    <section className="py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <h1 className="bg-[#B9FF66] px-3 py-2 font-bold text-lg">
            Services
          </h1>

          <p className="max-w-xl text-center md:text-left text-gray-600">
            At our digital marketing agency, we offer a range of services
            to help businesses grow and succeed online.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              title: "Search engine optimization",
              img: Illustration1,
              bg: "bg-[#F3F3F3]",
              text: "text-gray-700",
              icon: Icon,
              titleBg: "bg-[#B9FF66]",
            },
            {
              title: "Pay-per-click advertising",
              img: Illustration2,
              bg: "bg-[#B9FF66]",
              text: "text-gray-700",
              icon: Icon,
              titleBg: "bg-white",
            },
            {
              title: "Social Media Marketing",
              img: Illustration3,
              bg: "bg-[#191A23]",
              text: "text-white",
              icon: Icon1,
              titleBg: "bg-white",
            },
            {
              title: "Email Marketing",
              img: Illustration4,
              bg: "bg-[#F3F3F3]",
              text: "text-gray-700",
              icon: Icon,
              titleBg: "bg-[#B9FF66]",
            },
            {
              title: "Content Creation",
              img: Illustration5,
              bg: "bg-[#B9FF66]",
              text: "text-gray-700",
              icon: Icon,
              titleBg: "bg-[#B9FF66]",
            },
            {
              title: "Analytics and Tracking",
              img: Illustration6,
              bg: "bg-[#191A23]",
              text: "text-white",
              icon: Icon1,
              titleBg: "bg-[#B9FF66]",
            },
          ].map((card, i) => (
            <a
              key={i}
              href="/services"
              className={`w-full p-5 rounded-2xl border flex flex-col justify-between overflow-hidden transition hover:shadow-lg ${card.bg}`}
            >
              {/* Top */}
              <div>
                <h2 className={`${card.titleBg} px-3 py-2 text-sm font-semibold inline-block`}>
                  {card.title}
                </h2>
              </div>

              {/* Middle Image */}
              <div className="flex justify-center my-6">
                <img
                  src={card.img}
                  alt="illustration"
                  className="w-full max-w-[180px] object-contain"
                />
              </div>

              {/* Bottom */}
              <div className={`flex items-center gap-3 ${card.text}`}>
                <img src={card.icon} alt="arrow" className="w-6 h-6" />
                <p>Learn more</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Grey Box */}
<div className="bg-[#F3F3F3] rounded-[45px] mt-20 w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-16 h-auto md:h-[347px]">

  {/* Text + Button */}
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-xl md:text-2xl font-bold md:leading-snug">
      Let's make things happen
    </h2>
    <p className="mt-4 text-sm md:text-base leading-relaxed">
      Contact us today to learn more about how our digital marketing
      services can help your business grow and succeed online.
    </p>

    {/* Clickable Button */}
    <a
      href="/get-proposal"  // <-- Replace this with your actual link
      className="mt-6 px-4 py-2 bg-black text-white rounded-xl text-sm md:text-base w-fit inline-block transition-all duration-300 hover:bg-gray-800 hover:scale-105"
    >
      Get your free proposal
    </a>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img
      src={Frame19}
      alt="frame"
      className="w-full max-w-full md:max-w-[600px] h-auto object-contain"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default Services;