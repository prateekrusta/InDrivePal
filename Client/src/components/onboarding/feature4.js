import React from "react";
import feature4 from "../../assets/images/feature4.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../assets/onboarding.css";

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
      <div
        className="base-icons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h3 style={{ marginLeft: 10 }}>Skip</h3>
        <div className="circle">
          <ArrowForwardIosIcon className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Feature4;
