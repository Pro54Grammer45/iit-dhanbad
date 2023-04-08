import React from 'react'
import "./Choose.css"

const Choose = () => {
  return (
    <div className="choose">
      <div className="div1" />
      
      <img className="back-layer-icon3" alt="" src={require('../images/back.png')} />
      <div
        className="buttonprimarywith-icon10"
        //onClick={onButtonPrimaryWithIconContainerClick}
      >
        <div className="button-name-parent7">
          <b className="button-name10">FIND CHARGER</b>
          <div className="icon10">
            
          </div>
        </div>
      </div>
      <div
        className="buttonprimarywith-icon11"
        //onClick={onButtonPrimaryWithIconContainer1Click}
      >
        <div className="button-name-parent7">
          <b className="button-name10">BATTERY STATUS</b>
          <div className="icon10">
            
          </div>
        </div>
      </div>
      <div
        className="buttonprimarywith-icon12"
        //onClick={onButtonPrimaryWithIconContainer2Click}
      >
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
