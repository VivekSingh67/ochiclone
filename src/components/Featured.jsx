import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="mt-10">
          <div className="flex items-center gap-2">
            <div className="w-1/2 flex items-center gap-2">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <p>FYDE</p>
            </div>
            <div className="w-1/2 flex items-center gap-2">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <p>VISE</p>
            </div>
          </div>
          <div className="card w-full flex gap-10 mt-2">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute overflow-hidden flex left-full text-[#cdea68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  leading-none tracking-tighter text-8xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
              <div>
                {["audit", "copywriting", "sales deck", "slides design"].map(
                  (items, index) => {
                    return (
                      <button className="uppercase px-3 py-1 border-[1px] boder-zinc-100 rounded-full my-2 mr-3">
                        {items}
                      </button>
                    );
                  }
                )}
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute flex overflow-hidden right-full text-[#cdea68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  leading-none tracking-tighter text-8xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
              <div>
                {["agency", "company presentation"].map((items, index) => {
                  return (
                    <button className="uppercase px-3 py-1 border-[1px] boder-zinc-100 rounded-full my-2 mr-3">
                      {items}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative top-10 mt-10">
          <div className="flex items-center gap-2">
            <div className="w-1/2 flex items-center gap-2">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <p>TRAWA</p>
            </div>
            <div className="w-1/2 flex items-center gap-2">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <p>PREMIUMBLEND</p>
            </div>
          </div>
          <div className="card w-full flex gap-10 mt-2">
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="cardcontainer relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute overflow-hidden flex left-full text-[#cdea68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  leading-none tracking-tighter text-8xl">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
              <div>
                {["brand identity", "design research", "investor deck"].map(
                  (items, index) => {
                    return (
                      <button className="uppercase px-3 py-1 border-[1px] boder-zinc-100 rounded-full my-2 mr-3">
                        {items}
                      </button>
                    );
                  }
                )}
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="cardcontainer relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute flex overflow-hidden right-full text-[#cdea68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  leading-none tracking-tighter text-8xl">
                {"PREMIUMBLEND".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                />
              </div>

              <button className="uppercase px-3 py-1 border-[1px] boder-zinc-100 rounded-full my-2 mr-3">
                branded template
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-6 relative top-32 left-[33%] mb-40  translate-x-1/2 translate-y-1/2 uppercase px-5 py-3 rounded-full border-[1px] border-zinc-100">
        view all case studies
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
      </button>
    </div>
  );
}

export default Featured;
