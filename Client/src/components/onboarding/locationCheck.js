import React from "react";
import ButtonSubmit from "./button-submit";
import locationicon from '../../assets/images/loc-check.png';
import "../../assets/onboarding.css";

const LocationCheck = () => {
  return (
    <div className="onboarding">
      <center>
        <p style={{fontSize:20, marginTop: 50}}>Are you in this city?</p>
      </center>
      <center><img src={locationicon} style={{marginTop:200, width:200}} /></center>
      <center><p style={{color:'#00C4FF'}}>Edit</p></center>
      <div className="btn">
      <center><ButtonSubmit label="Allow" /></center>
      </div>
    </div>
  );
};

export default LocationCheck;
