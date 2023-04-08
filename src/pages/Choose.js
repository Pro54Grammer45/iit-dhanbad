import React,{ useCallback }   from 'react'
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();

  const onButtonPrimaryWithIconContainerClick = useCallback(() => {
    navigate("/charging-slot");
  }, [navigate]);

  const onButtonPrimaryWithIconContainer1Click = useCallback(() => {
    navigate("/status");
  }, [navigate]);

  const onButtonPrimaryWithIconContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-center text-21xl text-black font-play">
      <div className="absolute top-[-473px] left-[-67px] [filter:blur(4px)] w-[1897px] h-[1969px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1458px] h-[1024px] object-cover"
        alt=""
        src="/back-layer2@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1458px] h-[1024px] object-cover"
        alt=""
        src="/back-layer2@2x.png"
      />
      <div
        className="absolute top-[272px] left-[882px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[430px] h-[146px] flex flex-col p-4 box-border items-center justify-center cursor-pointer"
        onClick={onButtonPrimaryWithIconContainerClick}
      >
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative tracking-[-0.2px] leading-[28px]">
            FIND CHARGER
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
      <div
        className="absolute top-[564px] left-[484px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[430px] h-[146px] flex flex-col p-4 box-border items-center justify-center cursor-pointer"
        onClick={onButtonPrimaryWithIconContainer1Click}
      >
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative tracking-[-0.2px] leading-[28px]">
            BATTERY STATUS
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
      <div
        className="absolute top-[272px] left-[147px] rounded-tl-37xl rounded-tr-30xl rounded-br-195xl rounded-bl-mini bg-limegreen-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[430px] h-[146px] flex flex-col p-4 box-border items-center justify-center cursor-pointer"
        onClick={onButtonPrimaryWithIconContainer2Click}
      >
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <b className="relative tracking-[-0.2px] leading-[28px]">
            PLAN ROUTE
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
    </div>
  );
};

export default Choose;
