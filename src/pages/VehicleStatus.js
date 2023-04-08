import "./VehicleStatus.css";
import React from "react";
const VehicleStatus = () => {
  return (
    <div className="backlayer-parent">
      <div className="backlayer1">
        <div className="bg2" />
        <img className="backlayer-item" alt="" src="/ellipse-331.svg" />
      </div>
      <div className="div2" />
      <img className="back-layer-icon6" alt="" src={require('../images/back.png')} />
      <div className="vehicle-status1">Vehicle Status</div>
      <div className="buttonprimarywith-icon13">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Car Model</p>
            <p className="tata-nexon1">Tata Nexon</p>
          </b>
          
        </div>
      </div>
      <div className="buttonprimarywith-icon14">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Total Trip Time</p>
            <p className="tata-nexon1">100 Hrs</p>
          </b>
         
        </div>
      </div>
      <div className="buttonprimarywith-icon15">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Total Distance</p>
            <p className="tata-nexon1">4000 km</p>
          </b>
          <div className="icon15">
            
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon16">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Previous Mileage</p>
            <p className="tata-nexon1">40 kmPu</p>
          </b>
          <div className="icon15">
            <img
              className="iconoutlinearrow-right14"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon17">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Current Battery Per</p>
            <p className="tata-nexon1">21 %</p>
          </b>
          <div className="icon15">
            <img
              className="iconoutlinearrow-right14"
              alt=""
              src="/iconoutlinearrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon18">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Battery Capacity</p>
            <p className="tata-nexon1">40 Kwh</p>
          </b>
          <div className="icon15">
            <img
              className="iconoutlinearrow-right14"
              alt=""
              src="/iconoutlinearrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleStatus;
