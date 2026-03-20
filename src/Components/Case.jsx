

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

//           <p className="w-full md:w-[292px] h-auto text-base">
//             Step-by-Step Guide to Achieving Your Business Goals
//           </p>
//         </div>
//       </div>

//       {/* STEP COMPONENT FUNCTION */}
//       {[
//         { num: "01", title: "Consultation", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts." },
//         { num: "02", title: "Research and Strategy Development", desc: "We conduct in-depth research and build a tailored strategy to meet your goals." },
//         { num: "03", title: "Implementation", desc: "We execute the strategy using the most effective tools and channels." },
//         { num: "04", title: "Monitoring and Optimization", desc: "We continuously monitor performance and optimize for better results." },
//         { num: "05", title: "Reporting and Communication", desc: "We keep you updated with clear reports and regular communication." },
//         { num: "06", title: "Continual Improvement", desc: "We refine strategies continuously to ensure long-term success." }
//       ].map((step, index) => (
//         <div
//           key={index}
//           className={`mt-8 md:mt-[30px] border-2 rounded-4xl w-full md:w-[1234px] 
//                       ${step.num === "01" ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"} 
//                       mx-auto md:mx-[100px]`}
//         >
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 md:p-6 relative">
//             <h1 className="text-4xl md:text-6xl font-bold">{step.num}</h1>
//             <p className="text-xl md:text-2xl mt-2 md:mt-0">{step.title}</p>

//             <img
//               src={index === 0 ? Plusicon : Plusicon1}
//               alt="plusicon"
//               onClick={() => toggle(index + 1)}
//               className="w-12 h-12 ml-auto md:ml-auto mt-2 md:mt-0 cursor-pointer"
//             />
//           </div>

//           <div className="border-t-2 border-black mx-0 md:mx-[80px]"></div>

//           {activeIndex === index + 1 && (
//             <p className="px-4 md:px-6 pb-6 text-base md:text-2xl">
//               {step.desc}
//             </p>
//           )}
//         </div>
//       ))}
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
          className={`mt-8 md:mt-[30px] border-2 rounded-4xl w-full 
                      ${step.num === "01" ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"} 
                      max-w-[1240px] mx-auto`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 relative">
            <h1 className="text-4xl md:text-6xl font-bold">{step.num}</h1>
            <p className="text-xl md:text-2xl mt-2 md:mt-0">{step.title}</p>

            <img
              src={index === 0 ? Plusicon : Plusicon1}
              alt="plusicon"
              onClick={() => toggle(index + 1)}
              className="w-12 h-12 ml-auto mt-2 md:mt-0 cursor-pointer"
            />
          </div>

          <div className="border-t-2 border-black mx-0 md:mx-6"></div>

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