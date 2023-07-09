import { NavLink } from 'react-router-dom';
import React from "react";
import ButtonSubmit from "./button-submit";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../assets/css/emergency.css";
const EmergencyContacts = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <div className="icons-top">
    <NavLink to="/onboarding/page-7"><div className="back-icons"><ArrowBackIcon style={{color: 'grey'}} /></div></NavLink>
    <NavLink to="/ride"><div className="forward-icons"><h3>SKIP</h3><ArrowForwardIosIcon style={{color: 'grey'}} /></div></NavLink>
    </div>
      <center>
        <p className="emergency-heading">Add emergency contacts</p>
      </center>
      <div className="btn btn-emergency">
      <NavLink to="/emergency/add-contact"><center><div className="btn-submit " style={{backgroundColor:"#F5F5F5", marginBottom:4, border:'none', padding:'0.3vh'}}><p>Add Emergency Contacts</p></div></center></NavLink>
      <NavLink to="/ride"><center><ButtonSubmit label="Proceed" /></center></NavLink>
      </div>
    </div>
  );
};

export default EmergencyContacts;
