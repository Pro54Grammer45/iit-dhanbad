import React from 'react'
import "./Choose.css"
import { useNavigate } from "react-router-dom";

const Choose = () => {
const navigate = useNavigate();

function handleFindcharger (){
  navigate("/ChargingSlot");
}

function handleVehiclestatus (){
  navigate("/vehiclestatus");
}

function handlePlanroute (){
  navigate("/planning");
}


  return (
    <div className="choose">
      <div className="div1" />
      
      <img className="back-layer-icon3" alt="" src={require('../images/back.png')} />
      <div
        className="buttonprimarywith-icon10"
        onClick={handleFindcharger}
      >
        <div className="button-name-parent7">
          <b className="button-name10">FIND CHARGER</b>
          <div className="icon10">
            
          </div>
        </div>
      </div>
      <div
        className="buttonprimarywith-icon11"
        onClick={handleVehiclestatus}
      >
        <div className="button-name-parent7">
          <b className="button-name10">Vehicle STATUS</b>
          <div className="icon10">
            
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon12" onClick={handlePlanroute}>
        <div className="button-name-parent7">
          <b className="button-name10">PLAN ROUTE</b>
          <div className="icon10">
            <img
              className="iconoutlinearrow-right10"
              alt=""
              src="/iconoutlinearrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
