// import React from 'react'
// import Groupofcards from '../assets/Groupofcards.png'
// import Testimonialsblock from '../assets/Testimonialsblock.png'
// import Contactblock from '../assets/Contactblock.png'
// import Footerblock from '../assets/Footerblock.png'

// const Blog = () => {
//   return (
//     <section>
    
//     <div className="flex flex-col md:flex-row mt-[100px]">
//         <span className="bg-[#B9FF66] px-1 py-2 text-2xl font-bold ml-[100px]  w-fit h-[51px]">
//             Testimonials  </span>
//      <p className="w-[473px] h-[46px] pl-10">Hear from Our Satisfied Clients: Read Our Testimonials 
// to Learn More about Our Digital Marketing Services </p>  
//     </div>

//     <div className="mt-20 ml-[100px] w-[1240px] h-[625px]">
//        <img src={Testimonialsblock} alt="Testimonialsblock"  /> 
//     </div>
    
//     <div className="flex flex-col md:flex-row mt-[140px]">
//         <span className="bg-[#B9FF66] px-1 py-2 text-2xl font-bold ml-[100px]  w-fit h-[51px]">
//             Contact Us  </span>
//      <p className="w-[323px] h-[46px] pl-10">Connect with Us: Let's Discuss Your Digital Marketing Needs </p>  
//     </div>

//     <div className="mt-20 ml-[100px] w-[1240px] h-[773px]">
//        <img src={Contactblock} alt="Contactblock"  /> 
//     </div>
        
//     <div className="mt-20 ml-[100px] w-[1241px] h-[514px]">
//         <img src={Footerblock} alt="footerblock"  /> 
//     </div>
//         </section>
//   )
// }

// export default Blog





import React from "react";
import Testimonialsblock from "../assets/Testimonialsblock.png";
import Contactblock from "../assets/Contactblock.png";
import Footerblock from "../assets/Footerblock.png";

const Blog = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Testimonials header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mt-20">
        <span className="bg-[#B9FF66] px-3 py-2 text-xl md:text-2xl font-bold w-fit">
          Testimonials
        </span>

        <p className="max-w-lg">
          Hear from Our Satisfied Clients: Read Our Testimonials
          to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Testimonials Image */}
      <div className="mt-12 max-w-[1240px] mx-auto">
        <img
          src={Testimonialsblock}
          alt="Testimonialsblock"
          className="w-full h-auto"
        />
      </div>

      {/* Contact header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mt-24">
        <span className="bg-[#B9FF66] px-3 py-2 text-xl md:text-2xl font-bold w-fit">
          Contact Us
        </span>

        <p className="max-w-lg">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Contact Image */}
      <div className="mt-12 max-w-[1240px] mx-auto">
        <img
          src={Contactblock}
          alt="Contactblock"
          className="w-full h-auto"
        />
      </div>

      {/* Footer */}
      <div className="mt-20 max-w-[1240px] mx-auto">
        <img
          src={Footerblock}
          alt="footerblock"
          className="w-full h-auto"
        />
      </div>

    </section>
  );
};

export default Blog;