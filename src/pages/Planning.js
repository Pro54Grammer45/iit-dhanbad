import React from 'react'
import "./Planning.css";

const Planning = () => {
  return (
    <div className="planning">
      <div className="back-layer-parent">
        <img className="back-layer-icon" alt="" src="/back.png" />
        <div className="sourceform" />
        <b className="source">Source</b>
        <div className="destform" />
        <b className="destination">Destination</b>
        <div className="buttonprimarywith-icon">
          <div className="button-name-parent">
            <b className="button-name">Plan</b>
            <div className="icon">
              <img
                className="iconoutlinearrow-right"
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
