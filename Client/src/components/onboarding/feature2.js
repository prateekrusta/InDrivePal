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
        <img src={feature2} style={{width:'40vw'}} />
      </center>
      <div
        className="base-icons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <NavLink to="/login"><h3 style={{marginLeft:10}}>Skip</h3></NavLink>
        <div className="circle">
          <NavLink to="/info-3"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
