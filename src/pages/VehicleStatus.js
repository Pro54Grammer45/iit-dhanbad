import "./VehicleStatus.css";
import React, {useState,useEffect} from 'react';
import fireDb from '../firebase';
const VehicleStatus = () => {
  const [data,setData] = useState({});
      useEffect(() => {
          fireDb.child("Sample_data").on('value',(snapshot) =>{
  
              if(snapshot.val()!==null) {
                  setData({...snapshot.val()})
              }
              else{
                  setData({});
  
              }
          });
          return () => {
              setData({});
          };
      },[]);
  return (
    <>
    {Object.keys(data).map((id,index)=>{
      return(
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
            <p className="tata-nexon1">{data[id].Modal}</p>
          </b>
          
        </div>
      </div>
      <div className="buttonprimarywith-icon14">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Total Trip Time</p>
            <p className="tata-nexon1">{data[id].Time} Hrs</p>
          </b>
         
        </div>
      </div>
      <div className="buttonprimarywith-icon15">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Total Distance</p>
            <p className="tata-nexon1">{data[id].Distance} km</p>
          </b>
          <div className="icon15">
            
          </div>
        </div>
      </div>
      <div className="buttonprimarywith-icon16">
        <div className="button-name-parent11">
          <b className="button-name14">
            <p className="car-model1">Previous Mileage</p>
            <p className="tata-nexon1">{data[id].Milage} kmPu</p>
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
            <p className="tata-nexon1">{data[id].Battery} %</p>
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
            <p className="tata-nexon1">{data[id].Capacity} Kwh</p>
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
    })}
  </>
  );
};

export default VehicleStatus;
