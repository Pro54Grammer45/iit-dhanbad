import React from 'react'
import { useNavigate } from "react-router-dom";
import "./GetStartedPage.css";
export default function GetStartedPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/choose");
  }


  return (
    <div className="get-started-page">
      <div className="hero">
        <div className="bg1" />
        <img className="nft-icon" alt="" />
      </div>
      <img className="back-layer-icon5" alt="" src={require('../images/back.png')} />
      <div className="eco-route">ECO ROUTE</div>
      <div className="an-ecosystem-of">
        An Ecosystem of Electric Vehicle for autonomous trip planning, optimized
        route generation and charging slot booking
      </div>
      <div className="icon13">
        <img
          className="iconsolidplay"
          alt=""
          
        />
      </div>
      <div className="get-started-page-child" />
      <div className="get-started-button" >
        <div className="button-name-parent10">
          <b className="button-name13" onClick={handleClick}>GET STARTED</b>
          
        </div>
      </div>
    </div>

  )
}
