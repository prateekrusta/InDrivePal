import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import ButtonSubmit from "./button-submit";
import locationicon from '../../assets/images/loc-check.png';
import "../../assets/css/onboarding.css";

const Onboarding5 = () => {

  const[city,setCity] = useState("Loading...");

  const getLocation =  () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }

  const showPosition = (position) => {
    var requestOptions = {
      method: 'GET',
    };
    
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=83435a93a22c48028a46398f5670eb01`, requestOptions)
      .then(response => response.json())
      .then(result => 
        setCity(result.features[0].properties.city))
      .catch(error => console.log('error', error));
    
  }


  useEffect(() => {
    getLocation();
  },[])
  return (
    <div className="onboarding">
      <center>
        <p style={{fontSize:25, marginTop: 50}}>Are you in this city?</p>
      </center>
      <center><img src={locationicon} style={{marginTop:150, width:200}} /></center>
      <h2>{city}</h2>
      <center><p style={{color:'#00C4FF'}}>EDIT</p></center>
      <div className="btn">
        <NavLink to="/onboarding/page-6">
        <center><ButtonSubmit label="Allow" /></center>
        </NavLink>
      </div>
    </div>
  );
};

export default Onboarding5;
