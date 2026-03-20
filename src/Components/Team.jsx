

// import React, { useState } from "react";
// import Picture from "../assets/Picture.png";
// import Socialicon from "../assets/Socialicon.png";
// import Picture1 from "../assets/Picture1.png";
// import Picture2 from "../assets/Picture2.png";
// import Picture3 from "../assets/Picture3.png";
// import Picture4 from "../assets/Picture4.png";
// import Picture5 from "../assets/Picture5.png";

// const Team = () => {
//   const [visibleCount, setVisibleCount] = useState(3);

//   const teamMembers = [
//     {
//       img: Picture,
//       name: "John Smith",
//       role: "CEO and Founder",
//       desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
//     },
//     {
//       img: Picture1,
//       name: "Jane Doe",
//       role: "Director of Operations",
//       desc: "7+ years of experience in project management and team leadership.",
//     },
//     {
//       img: Picture2,
//       name: "Michael Brown",
//       role: "Senior SEO Specialist",
//       desc: "5+ years of experience in SEO and content creation.",
//     },
//     {
//       img: Picture3,
//       name: "Emily Johnson",
//       role: "PPC Manager",
//       desc: "3+ years of experience in paid search advertising.",
//     },
//     {
//       img: Picture4,
//       name: "Brian Williams",
//       role: "Social Media Specialist",
//       desc: "4+ years of experience in social media marketing.",
//     },
//     {
//       img: Picture5,
//       name: "Sarah Kim",
//       role: "Content Creator",
//       desc: "2+ years of experience in writing and editing.",
//     },
//   ];

//   const handleClick = () => {
//     setVisibleCount((prev) =>
//       prev + 3 > teamMembers.length ? teamMembers.length : prev + 3
//     );
//   };

//   return (
//     <section className="px-6 md:px-24">

//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[1240px] mx-auto">
//       <div className="flex flex-col md:flex-row gap-6 mt-20">
//         <h1 className="bg-[#B9FF66] px-3 py-2 font-bold text-xl">Team</h1>
//         <p className="max-w-md">
//           Meet the skilled and experienced team behind our successful digital marketing strategies
//         </p>
//       </div>
//       </div>

//       {/* TEAM GRID */}
//       <div className="flex flex-wrap gap-6 mt-[80px] ml-[100px]">

//         {teamMembers.slice(0, visibleCount).map((member, index) => (
//           <div
//             key={index}
//             className="w-[387px] border-2 rounded-3xl p-6 flex flex-col gap-4"
//           >
//             <div className="flex items-start">
//               <img src={member.img} alt="" className="w-[105px] h-[102px]" />

//               <div className="flex flex-col justify-center ml-4 mt-[53.82px]">
//                 <h1 className="text-lg font-semibold">{member.name}</h1>
//                 <p className="text-sm text-gray-600">{member.role}</p>
//               </div>

//               <img
//                 src={Socialicon}
//                 alt="linkedin"
//                 className="w-[34px] h-[34px] ml-auto"
//               />
//             </div>

//             <div className="w-full border-t-2 border-black"></div>

//             <p>{member.desc}</p>
//           </div>
//         ))}

//       </div>

//       {/* BUTTON */}
//       {visibleCount < teamMembers.length && (
//         <div className="flex justify-center md:justify-end mt-10 mr-20">
//           <button
//             onClick={handleClick}
//             className="bg-black text-white rounded-xl py-4 px-10 cursor-pointer"
//           >
//             See all Teams
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Team;

import React, { useState } from "react";
import Picture from "../assets/Picture.png";
import Socialicon from "../assets/Socialicon.png";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";
import Picture5 from "../assets/Picture5.png";

const Team = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const teamMembers = [
    {
      img: Picture,
      name: "John Smith",
      role: "CEO and Founder",
      desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      img: Picture1,
      name: "Jane Doe",
      role: "Director of Operations",
      desc: "7+ years of experience in project management and team leadership.",
    },
    {
      img: Picture2,
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      desc: "5+ years of experience in SEO and content creation.",
    },
    {
      img: Picture3,
      name: "Emily Johnson",
      role: "PPC Manager",
      desc: "3+ years of experience in paid search advertising.",
    },
    {
      img: Picture4,
      name: "Brian Williams",
      role: "Social Media Specialist",
      desc: "4+ years of experience in social media marketing.",
    },
    {
      img: Picture5,
      name: "Sarah Kim",
      role: "Content Creator",
      desc: "2+ years of experience in writing and editing.",
    },
  ];

  const handleClick = () => {
    setVisibleCount((prev) =>
      prev + 3 > teamMembers.length ? teamMembers.length : prev + 3
    );
  };

  return (
    <section className="px-6 md:px-24">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mt-20">
          <h1 className="bg-[#B9FF66] px-3 py-2 font-bold text-xl w-fit">
            Team
          </h1>
          <p className="max-w-full md:max-w-md text-sm md:text-base mt-2 md:mt-0">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-10 md:mt-[80px] mx-auto md:ml-[100px] items-center md:items-start">

        {teamMembers.slice(0, visibleCount).map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[387px] border-2 rounded-3xl p-6 flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img src={member.img} alt="" className="w-[105px] h-[102px]" />

              <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-4 sm:mt-[53.82px] text-center sm:text-left">
                <h1 className="text-lg font-semibold">{member.name}</h1>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>

              <img
                src={Socialicon}
                alt="linkedin"
                className="w-[34px] h-[34px] mt-4 sm:mt-0 ml-auto"
              />
            </div>

            <div className="w-full border-t-2 border-black"></div>

            <p className="text-sm md:text-base">{member.desc}</p>
          </div>
        ))}

      </div>

      {/* BUTTON */}
      {visibleCount < teamMembers.length && (
        <div className="flex justify-center md:justify-end mt-6 md:mt-10">
          <button
            onClick={handleClick}
            className="bg-black text-white rounded-xl py-4 px-10 cursor-pointer text-sm md:text-base"
          >
            See all Teams
          </button>
        </div>
      )}
    </section>
  );
};

export default Team;