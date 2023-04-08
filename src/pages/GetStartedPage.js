import React from "react"; 
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GetStartedPage = () => {
  const navigate = useNavigate();

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/choose");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-121xl text-limegreen-200 font-crete-round">
      <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] w-[1440px] h-[1024px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] flex flex-col items-start justify-start" />
        <img
          className="absolute top-[217.93px] left-[907.2px] w-[275.92px] h-[434.61px]"
          alt=""
        />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] object-cover"
        alt=""
        src="/back-layer@2x.png"
      />
      <div className="absolute top-[38px] left-[352px] leading-[106px] text-left flex items-center w-[1344px] h-[262px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        ECO ROUTE
      </div>
      <div className="absolute top-[907px] left-[205px] text-13xl leading-[45px] font-lusitana text-black inline-block w-[1030px] h-[101px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] opacity-[0.8]">
        An Ecosystem of Electric Vehicle for autonomous trip planning, optimized
        route generation and charging slot booking
      </div>
      <div className="absolute top-[856px] left-[1329px] flex flex-row items-center justify-center">
        <img
          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
          alt=""
          src="/iconoutlinearrowright2.svg"
        />
      </div>
      <div className="absolute top-[697px] left-[546px] rounded-31xl bg-black w-[361px] h-[115px]" />
      <div
        className="absolute top-[697px] left-[546px] rounded-31xl bg-limegreen-100 w-[361px] h-[115px] flex flex-col py-4 px-5 box-border items-center justify-center cursor-pointer text-21xl text-black font-poppins"
        onClick={onGetStartedButtonClick}
      >
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative leading-[24px]">GET STARTED</b>
          <div className="hidden flex-row items-center justify-center">
            <img
              className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
              alt=""
              src="/iconsolidplay.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
