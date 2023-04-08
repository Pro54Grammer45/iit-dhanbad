import React from 'react'
const ChargingSlot = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-21xl text-black font-play">
      <img
        className="absolute top-[0px] left-[0px] w-[2848px] h-[1147px] object-cover"
        alt=""
        src="/back-layer1@2x.png"
      />
      <div className="absolute top-[477px] left-[1001px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[430px] h-[146px] flex flex-col p-4 box-border items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative tracking-[-0.2px] leading-[28px]">
            Search Near By
          </b>
          <div className="hidden flex-row items-center justify-center">
            <img
              className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[477px] left-[482px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[430px] h-[146px] flex flex-col p-4 box-border items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative tracking-[-0.2px] leading-[28px]">
            Search By Name
          </b>
          <div className="hidden flex-row items-center justify-center">
            <img
              className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
              alt=""
              src="/iconoutlinearrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[680px] left-[697px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[430px] h-[146px] flex flex-col p-4 box-border items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative tracking-[-0.2px] leading-[28px]">
            Search By Location
          </b>
          <div className="hidden flex-row items-center justify-center">
            <img
              className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[71px] left-[322px] text-91xl leading-[106px] font-crete-round text-gray-200 text-left flex items-center w-[1013px] h-[141px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Book Charging Slot
      </div>
    </div>
  );
};

export default ChargingSlot;
