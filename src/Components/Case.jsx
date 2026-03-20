

// import React, { useState } from "react";
// import Icon2 from "../assets/Icon2.png";
// import Plusicon from "../assets/Plusicon.png";
// import Plusicon1 from "../assets/Plusicon1.png";

// const Case = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="px-6 md:px-24">

//       {/* Process */}
//       <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[1240px] mx-auto">
//         <div className="flex flex-col md:flex-row gap-6 mt-24">
//           <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-xl">
//             Our Working Process
//           </h1>

//           <p className="w-[292px] h-[46px]">
//             Step-by-Step Guide to Achieving Your Business Goals
//           </p>
//         </div>
//       </div>

//       {/* 01 */}
//       <div className="flex flex-col gap-3 w-[1234px] mt-[80px] bg-[#B9FF66] mx-[100px] border-2 rounded-4xl">

//         <div className="flex items-center gap-4 mt-[41px] mr-[80px] pl-5">
//           <h1 className="text-6xl font-bold">01</h1>
//           <p className="text-3xl">Consultation</p>

//           <img
//             src={Plusicon}
//             alt="plusicon"
//             onClick={() => toggle(1)}
//             className="w-[58px] h-[58px]  ml-[850px] cursor-pointer"
//           />
//         </div>

//         <div className="w-[1114px] border-t-2 border-black ml-[80px] "></div>

//         {activeIndex === 1 && (
//           <p className="ml-[60px] text-2xl pb-6">
//             During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
//           </p>
//         )}
//       </div>

//       {/* 02 */}
//       <div className="mt-[30px] mx-[100px] border-2 rounded-4xl w-[1234px] bg-[#F3F3F3]">
//         <div className="flex items-center gap-4 p-6">
//           <h1 className="text-6xl font-bold">02</h1>
//           <p className="text-2xl">Research and Strategy Development</p>

//           <img
//             src={Plusicon1}
//             alt="plusicon"
//             onClick={() => toggle(2)}
//             className="w-[58px] h-[58px] ml-auto cursor-pointer"
//           />
//         </div>

//         {activeIndex === 2 && (
//           <p className="px-6 pb-6 text-xl">
//             We conduct in-depth research and build a tailored strategy to meet your goals.
//           </p>
//         )}
//       </div>

//       {/* 03 */}
//       <div className="mt-[30px] mx-[100px] border-2 rounded-4xl w-[1234px] bg-[#F3F3F3]">
//         <div className="flex items-center gap-4 p-6">
//           <h1 className="text-6xl font-bold">03</h1>
//           <p className="text-2xl">Implementation</p>

//           <img
//             src={Plusicon1}
//             alt="plusicon"
//             onClick={() => toggle(3)}
//             className="w-[58px] h-[58px] ml-auto cursor-pointer"
//           />
//         </div>

//         {activeIndex === 3 && (
//           <p className="px-6 pb-6 text-xl">
//             We execute the strategy using the most effective tools and channels.
//           </p>
//         )}
//       </div>

//       {/* 04 */}
//       <div className="mt-[30px] mx-[100px] border-2 rounded-4xl w-[1234px] bg-[#F3F3F3]">
//         <div className="flex items-center gap-4 p-6">
//           <h1 className="text-6xl font-bold">04</h1>
//           <p className="text-2xl">Monitoring and Optimization</p>

//           <img
//             src={Plusicon1}
//             alt="plusicon"
//             onClick={() => toggle(4)}
//             className="w-[58px] h-[58px] ml-auto cursor-pointer"
//           />
//         </div>

//         {activeIndex === 4 && (
//           <p className="px-6 pb-6 text-xl">
//             We continuously monitor performance and optimize for better results.
//           </p>
//         )}
//       </div>

//       {/* 05 */}
//       <div className="mt-[30px] mx-[100px] border-2 rounded-4xl w-[1234px] bg-[#F3F3F3]">
//         <div className="flex items-center gap-4 p-6">
//           <h1 className="text-6xl font-bold">05</h1>
//           <p className="text-2xl">Reporting and Communication</p>

//           <img
//             src={Plusicon1}
//             alt="plusicon"
//             onClick={() => toggle(5)}
//             className="w-[58px] h-[58px] ml-auto cursor-pointer"
//           />
//         </div>

//         {activeIndex === 5 && (
//           <p className="px-6 pb-6 text-xl">
//             We keep you updated with clear reports and regular communication.
//           </p>
//         )}
//       </div>

//       {/* 06 */}
//       <div className="mt-[30px] mx-[100px] border-2 rounded-4xl w-[1234px] bg-[#F3F3F3]">
//         <div className="flex items-center gap-4 p-6">
//           <h1 className="text-6xl font-bold">06</h1>
//           <p className="text-2xl">Continual Improvement</p>

//           <img
//             src={Plusicon1}
//             alt="plusicon"
//             onClick={() => toggle(6)}
//             className="w-[58px] h-[58px] ml-auto cursor-pointer"
//           />
//         </div>

//         {activeIndex === 6 && (
//           <p className="px-6 pb-6 text-xl">
//             We refine strategies continuously to ensure long-term success.
//           </p>
//         )}
//       </div>

//     </section>
//   );
// };

// export default Case;

import React, { useState } from "react";
import Icon2 from "../assets/Icon2.png";
import Plusicon from "../assets/Plusicon.png";
import Plusicon1 from "../assets/Plusicon1.png";

const Case = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-24">

      {/* Process */}
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mt-24">
          <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-xl">
            Our Working Process
          </h1>

          <p className="w-full md:w-[292px] h-auto text-base">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      </div>

      {/* STEP COMPONENT FUNCTION */}
      {[
        { num: "01", title: "Consultation", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts." },
        { num: "02", title: "Research and Strategy Development", desc: "We conduct in-depth research and build a tailored strategy to meet your goals." },
        { num: "03", title: "Implementation", desc: "We execute the strategy using the most effective tools and channels." },
        { num: "04", title: "Monitoring and Optimization", desc: "We continuously monitor performance and optimize for better results." },
        { num: "05", title: "Reporting and Communication", desc: "We keep you updated with clear reports and regular communication." },
        { num: "06", title: "Continual Improvement", desc: "We refine strategies continuously to ensure long-term success." }
      ].map((step, index) => (
        <div
          key={index}
          className={`mt-8 md:mt-[30px] border-2 rounded-4xl w-full md:w-[1234px] 
                      ${step.num === "01" ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"} 
                      mx-auto md:mx-[100px]`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 md:p-6 relative">
            <h1 className="text-4xl md:text-6xl font-bold">{step.num}</h1>
            <p className="text-xl md:text-2xl mt-2 md:mt-0">{step.title}</p>

            <img
              src={index === 0 ? Plusicon : Plusicon1}
              alt="plusicon"
              onClick={() => toggle(index + 1)}
              className="w-12 h-12 ml-auto md:ml-auto mt-2 md:mt-0 cursor-pointer"
            />
          </div>

          <div className="border-t-2 border-black mx-0 md:mx-[80px]"></div>

          {activeIndex === index + 1 && (
            <p className="px-4 md:px-6 pb-6 text-base md:text-2xl">
              {step.desc}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Case;