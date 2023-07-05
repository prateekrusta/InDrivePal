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
      <div
        className="base-icons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <NavLink to="/login"><h3 style={{marginLeft:10}}>Skip</h3></NavLink>
        <div className="circle">
          <NavLink to="/info-4"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
