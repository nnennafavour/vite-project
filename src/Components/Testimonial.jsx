
import React, { useState } from 'react';
import Bubble from "../assets/Bubble.png";
import Bubble2 from "../assets/Bubble2.png";

const Testimonial = () => {
  const [index, setIndex] = useState(1);

  const data = [
  { img: Bubble, name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { img: Bubble2, name: "Jane Doe", role: "Director of Operations" },
  { img: Bubble, name: "Michael Brown", role: "Senior SEO Specialist" }
];

  const prev = () => setIndex(prev => prev === 0 ? data.length - 1 : prev - 1);
  const next = () => setIndex(prev => prev === data.length - 1 ? 0 : prev + 1);

  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto bg-[#191A23] rounded-3xl py-12 md:py-20 flex flex-col items-center relative overflow-hidden">

        {/* ================= MOBILE VIEW ================= */}
        <div className="w-full md:hidden flex flex-col items-center text-center px-4">

  {/* IMAGE */}
  <img
    key={index}                        // Forces React to treat each index as a new element
    src={data[index].img}               // Show image based on current index
    alt="testimonial"
    className="w-full max-w-[320px] object-contain"
  />

  {/* TEXT */}
  <h2 className="text-[#B9FF66] text-lg font-semibold mt-6">
    {data[index].name}
  </h2>

  <p className="text-white text-sm mt-1">
    {data[index].role}
  </p>

  {/* CONTROLS */}
  <div className="mt-6 flex items-center justify-between w-full max-w-[200px]">
    <button
      onClick={prev}
      className="text-white text-2xl"
    >
      ◀
    </button>

    <div className="flex gap-2">
      {data.map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i === index ? "bg-[#B9FF66]" : "bg-gray-500"
          }`}
        />
      ))}
    </div>

    <button
      onClick={next}
      className="text-white text-2xl"
    >
      ▶
    </button>
  </div>
</div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:flex items-center justify-center gap-8 w-full">

          {data.map((item, i) => {
            let position = i - index;

            if (position < -1) position = data.length - 1;
            if (position > 1) position = -data.length + 1;

            const isCenter = position === 0;

            return (
              <div
                key={i}
                className={`transition-all duration-500 flex flex-col items-center text-center ${
                  isCenter
                    ? "scale-110 opacity-100 z-20"
                    : "scale-90 opacity-40 z-10"
                }`}
                style={{
                  transform: isCenter
                    ? "translateX(0)"
                    : `translateX(${position * 40}%)`,
                }}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt="bubble"
                  className={`object-contain ${
                    isCenter ? "w-[420px]" : "w-[260px]"
                  }`}
                />

                {/* TEXT OUTSIDE IMAGE ✅ */}
                <div className="mt-4">
                  <h2 className="text-[#B9FF66] text-xl font-semibold">
                    {item.name}
                  </h2>
                  <p className="text-white text-sm mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex mt-10 w-full items-center justify-between px-10">
          <button onClick={prev} className="text-white text-3xl">◀</button>

          <div className="flex gap-3">
            {data.map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i === index ? "bg-[#B9FF66]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="text-white text-3xl">▶</button>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;