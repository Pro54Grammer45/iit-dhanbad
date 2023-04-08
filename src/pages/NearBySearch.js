import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NearBySearch.css";

const NearBySearch = () => {
  const navigate = useNavigate();

  

  function handleGoBack(){
    navigate('/ChargingSlot');
  }
  return (
    <div className="nearby-available-chargers">
      <img className="back-layer-icon" alt="" src={require('../images/back.png')} />
      <div className="buttonprimarywith-icon">
        <div className="button-name-parent">
          <b className="button-name">$Temp</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon1">
        <div className="button-name-parent">
          <b className="button-name">$temp</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon2">
        <div className="button-name-parent">
          <b className="button-name">Search By Name</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon3">
        <div className="button-name-parent">
          <b className="button-name">Search By Name</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon4">
        <div className="button-name-parent">
          <b className="button-name">Search By Name</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon5">
        <div className="button-name-parent">
          <b className="button-name">Search By Name</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="buttonprimarywith-icon6"
      
      >
        <div className="button-name-parent3">
          <b className="button-name" onClick={handleGoBack}>GO Back</b>
          <div className="icon">
            <img
              className="iconoutlinearrow-right"
              alt=""
              src="/iconoutlinearrowright2.svg"
            />
          </div>
        </div>
      </div>
      <div className="nearby-available">Nearby Available</div>
      <b className="charid">CharID</b>
      <b className="location">Location</b>
      <b className="waiting-time">Waiting Time</b>
      <b className="charid1">CharID</b>
      <b className="location1">Location</b>
      <b className="waiting-time1">Waiting Time</b>
      <b className="charid2">CharID</b>
      <b className="location2">Location</b>
      <b className="waiting-time2">Waiting Time</b>
      <b className="charid3">CharID</b>
      <b className="location3">Location</b>
      <b className="waiting-time3">Waiting Time</b>
      <b className="charid4">CharID</b>
      <b className="location4">Location</b>
      <b className="waiting-time4">Waiting Time</b>
      <b className="charid5">CharID</b>
      <b className="location5">Location</b>
      <b className="waiting-time5">Waiting Time</b>
    </div>
  );
};

export default NearBySearch;
