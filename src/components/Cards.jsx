import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-16 gap-5">
      <div className="cardcontainer h-[60vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute text-[#89B75C] px-4 py-1 border-[1px] border-[#89B75C] rounded-full left-5 bottom-5 font-semibold">&copy;2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
        <div className="card relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#212121]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute  px-4 py-1 border-[1px] rounded-full left-5 bottom-5 font-semibold">&copy;2019-2022</button>
        </div>
        <div className="card relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#212121]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute  px-4 py-1 border-[1px]  rounded-full left-5 bottom-5 font-semibold">&copy;2019-2022</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
