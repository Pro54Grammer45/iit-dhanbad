import React from 'react'
import "./Planning.css";

const Planning = () => {

  function handleSubmit(){

  }
  return (
    <div className="planning">
      <div className="back-layer-parent">
        <img className="back-layer-icon" alt="" src={require('../images/back.png')} />

      <form>      
      <input class="sourceform" type="text" name="src" />
      <input class="destform" type="text" name="dest"/>     
        <div className="buttonprimarywith-icon">
          <div className="button-name-parent">
            <b className="button-name" onClick={handleSubmit}>Plan</b>
            <div className="icon">
              <img
                className="iconoutlinearrow-right"
                alt=""
                src="/iconoutlinearrowright.svg"
              />
            </div>
          </div>
        </div></form>
      </div>
    </div>
  );
};

export default Planning;
