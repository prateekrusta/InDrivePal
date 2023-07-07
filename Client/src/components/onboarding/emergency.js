import { NavLink } from 'react-router-dom';
import React from "react";
import ButtonSubmit from "./button-submit";
import "../../assets/css/onboarding.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../assets/css/emergency.css";
const EmergencyContacts = () => {
  return (
    <div className="onboarding">
    <div className="icons-top">
    <div className="back"><ArrowBackIosIcon style={{color: 'grey'}} /><h3>Back</h3></div>
    <div className="forward"><h3>Skip</h3><ArrowForwardIosIcon style={{color: 'grey'}} /></div>
    </div>
      <center>
        <p className="emergency-heading">Add emergency contacts</p>
      </center>
      <div className="btn">
      <center><div className="btn-cc" style={{backgroundColor:"#F5F5F5", marginBottom:4}}><p>Add emergency Contacts</p></div></center>
      <center><ButtonSubmit label="Proceed" /></center>
      </div>
    </div>
  );
};

export default EmergencyContacts;
