import React, { useEffect, useState } from "react";

function Ready() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="relative bg-[#CDEA68] text-zinc-900">
      <div className="py-40">
        {["READY", "TO START", "THE PROJECT?"].map((items) => {
          return (
            <h1 className="text-[13vw] font-bold leading-[12vw] tracking-tighter text-center">
              {items}
            </h1>
          );
        })}
        <div className="flex flex-col items-center mt-16">
          <button className="flex uppercase gap-10 items-center px-7 py-4  bg-zinc-900  rounded-full text-white">
            start the project
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
          <span className="my-4">OR</span>
          <button className="flex uppercase gap-10 items-center px-5 py-4 border-[1px] border-zinc-900 text-zinc-900  rounded-full text-white">
            hello@ochidesign
            <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
          </button>
        </div>
      </div>
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
          <div className=" w-2/3 h-2/3 relative rounded-full bg-zinc-900">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
          <div className=" w-2/3 h-2/3 relative rounded-full bg-zinc-900">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
