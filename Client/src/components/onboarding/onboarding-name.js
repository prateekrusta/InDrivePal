import React from "react";
// import Form from "muicss/lib/react/form";
// import Input from "muicss/lib/react/input";
import ButtonSubmit from "./button-submit";
import "../../assets/onboarding.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const OnboardingName = () => {
  return (
    <div className="onboarding">
      <div className="back">
        <ArrowBackIosIcon style={{ color: "grey" }} />
        <h3>Back</h3>
      </div>
      <center>
        <p style={{ fontSize: 30, marginTop: 50 }}>Welcome to inDrive!</p>
        <p style={{ fontWeight: 100 }}>Let's get aquainted</p>
      </center>
        <div className="btn">
          <center>
            <ButtonSubmit label="Next" />
          </center>
        </div>
    </div>
  );
};

export default OnboardingName;
