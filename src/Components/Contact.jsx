// import React, { useState } from 'react';
// import Radiobutton from "../assets/Radiobutton.png";
// import Radiobutton1 from "../assets/Radiobutton1.png";
// import IllustrationCon from "../assets/IllustrationCon.png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Message sent!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section>
//       {/* HEADER */}
//       <div className="max-w-[1240px] mx-auto mt-20 flex flex-col md:flex-row gap-6 items-center md:items-start">
//         <div className="flex flex-col md:flex-row md:items-center gap-6 mt-24">
//           <span className="bg-[#B9FF66] px-3 py-2 text-xl md:text-2xl font-bold w-fit">
//             Contact Us
//           </span>

//           <p className="max-w-lg w-[323px] h-[46px]">
//             Connect with Us: Let's Discuss Your Digital Marketing Needs
//           </p>
//         </div>
//       </div>

//       {/* MAIN BOX */}
//       <div className="bg-[#F3F3F3] w-[1240px] h-[650px] rounded-3xl mx-auto mt-[80px] pl-8 pr-0 py-8 flex flex-col gap-6">
        
//         {/* RADIO BUTTONS */}
//         <div className="flex items-center gap-3">
//           <img src={Radiobutton} alt="radiobutton" className="w-[28px] h-[28px]" /> 
//           <p>Say Hi</p>
//           <img src={Radiobutton1} alt="radiobutton1" className="w-[28px] h-[28px]" />
//           <p>Get a Quote</p> 
//         </div>

//         {/* CONTENT */}
//         <div className="flex flex-1 gap-6 h-full">
          
//           {/* LEFT - FORM */}
//           <form onSubmit={handleSubmit} className="flex flex-col w-1/2 h-full">
            
//             {/* INPUTS */}
//             <div className="flex flex-col gap-4 flex-1">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="flex-1 w-full px-4 py-2 border-2 border-gray-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//               ></textarea>
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               placeholder="Message"
//               className="mt-4 w-full bg-black hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* RIGHT - IMAGE */}
//           <div className="w-1/2 h-full">
//             <img
//               src={IllustrationCon}
//               alt="illustration"
//               className="w-full h-full ml-[250px] object-cover"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import Radiobutton from "../assets/Radiobutton.png";
import Radiobutton1 from "../assets/Radiobutton1.png";
import IllustrationCon from "../assets/IllustrationCon.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-20">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-start">
        <div className="flex flex-col gap-4 md:gap-6 mt-8">
          <span className="bg-[#B9FF66] px-3 py-2 text-xl md:text-2xl font-bold w-fit">
            Contact Us
          </span>

          <p className="max-w-lg text-sm md:text-base">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
      </div>

      {/* MAIN BOX */}
      <div className="bg-[#F3F3F3] w-full max-w-7xl mx-auto mt-8 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8">

        {/* RADIO BUTTONS */}
        <div className="flex gap-4 items-center">
          <img src={Radiobutton} alt="radiobutton" className="w-7 h-7" /> 
          <p>Say Hi</p>
          <img src={Radiobutton1} alt="radiobutton1" className="w-7 h-7" />
          <p>Get a Quote</p> 
        </div>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">

          {/* LEFT - FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-black hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT - IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={IllustrationCon}
              alt="illustration"
              className="w-full max-w-xs md:max-w-md h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;