import React from "react";
import { NavLink } from 'react-router-dom';
import feature4 from "../../assets/images/feature4.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../assets/css/onboarding.css";

const Feature4 = () => {
  return (
    <div className="onboarding" style={{ marginTop: 50 }}>
      <center>
        <p style={{ fontSize: 30 }}>Enjoy your ride</p>
        <p
          style={{
            fontWeight: 200,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          InDrive takes utmost care of your safety. We leave no stone unturned
          to assure a safe and comfortable ride for you.
        </p>
        <img src={feature4} />
      </center>
      <div className="base-icons bi-4" style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/login" className="no-underline"><h3 style={{marginLeft:20}}>SKIP</h3></NavLink>
        <div className="circle" style={{marginRight:25}}>
        <NavLink to="/login"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature4;
