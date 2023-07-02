import React from "react";
import ButtonSubmit from "./button-submit";
import "../../assets/onboarding.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import passengerdriver from '../../assets/images/passenger.png';
const PassengerDriver = () => {
  return (
    <div className="onboarding">
    <div className="back"><ArrowBackIosIcon style={{color: 'grey'}} /><h3>Back</h3></div>
      <center>
        <p style={{fontSize:40, marginTop: 30}}>Are you a passenger or a driver?</p>
        <p style={{color:"grey", fontWeight:100}}>You can change the mode later</p>
      </center>
      <center><img src={passengerdriver} /></center>
      <div className="btn">
      <center><div className="btn-submit" style={{backgroundColor:"#F5F5F5", marginBottom:4}}><p>Passenger</p></div></center>
      <center><ButtonSubmit label="Driver" /></center>
      </div>
    </div>
  );
};

export default PassengerDriver;
