import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreals'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <p>What you can expect:</p>
        </div>
        <div className="w-1/2 flex justify-between items-center">
          <div className="w-1/2">
            <p>
              {" "}
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="mt-14">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col mr-20">
            <p className="mb-3">S:</p>
            {["Instagram", "Behance", "Facebook", "Linkedin"].map(
              (item, index) => {
                return (
                  <a
                    key={index}
                    href="#"
                    className="relative text-sm mb-1 hover:delay-100 group"
                  >
                    {item}
                    <span className="absolute bottom-0 right-0 w-full h-[1px] bg-[#66713D] transition-all duration-300 group-hover:w-0"></span>
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-6 py-4 bg-zinc-900 mt-10 rounded-full text-white">
            {" "}
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] overflow-hidden">
          <img
            className="w-full h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
