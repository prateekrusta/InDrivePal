import { NavLink } from 'react-router-dom';
import React from "react";
import ButtonSubmit from "./button-submit";
import locationicon from '../../assets/images/loc-check.png';
import "../../assets/css/onboarding.css";

const LocationCheck = () => {
  return (
    <div className="onboarding">
      <center>
        <p style={{fontSize:20, marginTop: 50}}>Are you in this city?</p>
      </center>
      <center><img src={locationicon} style={{marginTop:200, width:200}} /></center>
      <center><p style={{color:'#00C4FF'}}>Edit</p></center>
      <div className="btn">
        <NavLink to="/onboarding/page-6">
        <center><ButtonSubmit label="Allow" /></center>
        </NavLink>
      </div>
    </div>
  );
};

export default LocationCheck;
