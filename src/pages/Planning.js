import React from "react";
const Planning = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-7xl text-black font-play">
      <div className="absolute top-[28px] left-[200px] rounded-xl w-[1057px] h-[207px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] object-cover"
          alt=""
          src="/back-layer@2x.png"
        />
        <div className="absolute top-[74px] left-[46px] rounded-3xs bg-white w-[376px] h-[59px]" />
        <b className="absolute top-[90px] left-[46px] tracking-[-0.2px] leading-[28px] flex items-center justify-center w-[207px] h-[25px]">
          Source
        </b>
        <div className="absolute top-[74px] left-[454px] rounded-3xs bg-white w-[376px] h-[59px]" />
        <b className="absolute top-[92px] left-[454px] tracking-[-0.2px] leading-[28px] flex items-center justify-center w-[207px] h-[25px]">
          Destination
        </b>
        <div className="absolute top-[74px] left-[872px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[139px] h-16 flex flex-col p-4 box-border items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-[9px]">
            <b className="relative tracking-[-0.2px] leading-[28px]">Plan</b>
            <div className="hidden flex-row items-center justify-center">
              <img
                className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                alt=""
                src="/iconoutlinearrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
