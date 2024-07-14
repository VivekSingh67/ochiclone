import React from "react";

function Review() {
  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Clients’ reviews</h1>
      </div>
      <div className="flex gap-3">
        <div className="w-1/2 flex justify-between px-10 py-5">
          <div>
            <p className="relative text-sm mb-1 hover:delay-100 group">
              Karman Ventures
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p>Services:</p>
            <button className="mt-10 uppercase border-zice-100 border-[1px] px-5 py-1 rounded-full">
              invertor deck
            </button>
            <button className="mt-3 uppercase border-zice-100 border-[1px] px-5 py-1 rounded-full">
              sales deck
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-between pl-10 py-5">
          <div className="w-[65%]">
            <p>William Barnes</p>
            <img
              className="w-24 rounded-md mt-16"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
            <p className="text-[14px] mt-16">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
          <div className="px-10">
            <button className="uppercase">Read</button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px] mb-1 hover:delay-100 group">
            Planetly
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">Nina Walloch</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]    mb-1 hover:delay-100 group">
            Workiz Easy
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px]">Tomer Levy</p>

            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]  mb-1 hover:delay-100 group">
            Premium Blend
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">Ellen Kim</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]  mb-1 hover:delay-100 group">
            Hypercare Systems
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">Brendan Goss</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]  mb-1 hover:delay-100 group">
            Officevibe
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">Raff Labrie</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]  mb-1 hover:delay-100 group">
            Orderlion
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">Stefan Strohmer</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]  mb-1 hover:delay-100 group">
            Black Book
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">Jaci Smith</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border-b-[1px] border-t-[1px]">
          <p className="relative text-[17px]  mb-1 hover:delay-100 group">
            Trawa Energy
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
          </p>
          <div className="w-1/2 flex justify-between">
            <p className="text-[17px] ">David Budde</p>
            <p className="relative text-[17px]  uppercase text-sm mb-1 hover:delay-100 group">
              Read
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-zinc-100 transition-all duration-300 group-hover:w-0"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
