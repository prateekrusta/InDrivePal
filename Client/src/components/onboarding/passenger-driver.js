import { NavLink } from 'react-router-dom';
import React from "react";
import ButtonSubmit from "./button-submit";
import "../../assets/css/onboarding.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import passengerdriver from '../../assets/images/passenger.png';
const PassengerDriver = () => {
  return (
    <div className="onboarding">

    <div className="icons">
        <div className="arrow-back">
          <NavLink to="/onboarding/page-6">
            <ArrowBackIcon />
          </NavLink>
        </div>
      </div>

      <center>
        <p style={{fontSize:25, marginTop: 30}}>Are you a passenger or a driver?</p>
        <small><p style={{color:"grey", fontWeight:100}}>You can change the mode later</p></small>
      </center>
      <center><img src={passengerdriver} /></center>
      <div className="btn">
      <NavLink to="/emergency"><center><div className="btn-submit" style={{backgroundColor:"#F5F5F5", marginBottom:4, border:'none', padding:'0.3vh'}}><p className='add-em-cons'>Passenger</p></div></center></NavLink>
      <NavLink to="/emergency"><center><ButtonSubmit label="Driver" /></center></NavLink>
      </div>
    </div>
  );
};

export default PassengerDriver;
