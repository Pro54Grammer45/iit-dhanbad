import React from 'react'

import "./ChargingSlot.css";

const ChargingSlot = () => {
  return (
    <div className="charging-slot">
      <img className="back-layer-icon1" alt="" src={require('../images/back.png')}  />
      <div className="buttonprimarywith-icon1">
        <div className="button-name-group">
          <b className="button-name1">Search Near By</b>
          <div className="icon1">
            <img
              className="iconoutlinearrow-right1"
              alt=""
              src="/iconoutlinearrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon2">
        <div className="button-name-group">
          <b className="button-name1">Search By Name</b>
          <div className="icon1">
            
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon3">
        <div className="button-name-group">
          <b className="button-name1">Search By Location</b>
          <div className="icon1">

          </div>
        </div>
      </div>
      <div className="book-charging-slot">Book Charging Slot</div>
    </div>
  );
};

export default ChargingSlot;
