import React from "react";
import { NavLink } from 'react-router-dom';
import feature2 from "../../assets/images/feature2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../assets/css/onboarding.css";

const Feature2 = () => {
  return (
    <div className="onboarding" style={{ marginTop: 50 }}>
      <center>
        <p style={{ fontSize: 30 }}>Added features for specially abled</p>
        <p
          style={{
            fontWeight: 200,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          With enhanced accessibilty voice-prompts, equipped vehicles, AI chat
          assistance, we make sure everyone’s travel requirements are fulfilled.
        </p>
        <img src={feature2} style={{width:'80vw'}} />
      </center>
      <div className="base-icons bi-2" style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/login" className="no-underline"><h3 style={{marginLeft:20}}>SKIP</h3></NavLink>
        <div className="circle" style={{marginRight:25}}>
        <NavLink to="/info-3"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
