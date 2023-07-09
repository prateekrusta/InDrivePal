import React from "react";
import { NavLink } from 'react-router-dom';
import feature3 from "../../assets/images/feature3.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../assets/css/onboarding.css";

const Feature3 = () => {
  return (
    <div className="onboarding" style={{ marginTop: 50 }}>
      <center>
        <p style={{ fontSize: 30 }}>Companion friendly</p>
        <p
          style={{
            fontWeight: 200,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          We make our services companion friendly, especially if you are
          visually impaired. Bring along your service-animals and enjoy a safe
          ride!
        </p>
        <img src={feature3} />
      </center>
      <div className="base-icons bi-3" style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/login" className="no-underline"><h3 style={{marginLeft:20}}>SKIP</h3></NavLink>
        <div className="circle" style={{marginRight:25}}>
        <NavLink to="/info-4"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
