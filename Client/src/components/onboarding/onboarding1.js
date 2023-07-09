import { NavLink } from 'react-router-dom';
import "../../assets/css/onboarding.css";
import React, { useState } from "react";
import ButtonSubmit from "./button-submit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Radio from "@mui/material/Radio";

const Onboarding1 = (props) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [showSoundOn, setShowSoundOn] = useState(true);
  const [showSoundOff, setShowSoundOff] = useState(false);

  const handleSoundOn = () => {
    setShowSoundOn(false);
    setShowSoundOff(true);
  };

  const handleSoundOff = () => {
    setShowSoundOn(true);
    setShowSoundOff(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="onboarding">
      <div className="icons">
        <div className="arrow-back">
        <NavLink to="/login">
          <ArrowBackIcon />
          </NavLink>
        </div>
        <div className='sound-icon'>
          {showSoundOn && (
            <div onClick={handleSoundOn} className="volume-icon">
              <VolumeMuteIcon />
            </div>
          )}
          {showSoundOff && (
            <div onClick={handleSoundOff} className="volume-icon">
              <VolumeOffIcon />
            </div>
          )}
        </div>
      </div>
      <center>
        <p style={{ marginTop: 100 }}>
          Do you need specially abled features?
        </p>
      </center>
      <center>
        <div style={{ marginTop: 50 }}>
          <div className="btn-choice">
            <Radio
              {...controlProps("a")}
              sx={{
                color: "#A7E92F",
                "&.Mui-checked": {
                  color: "#A7E92F",
                },
              }}
            />
            <p>Yes</p>
          </div>
          <div className="btn-choice">
            <Radio
              {...controlProps("b")}
              sx={{
                color: "#A7E92F",
                "&.Mui-checked": {
                  color: "#A7E92F",
                },
              }}
            />
            <p>No</p>
          </div>
        </div>
      </center>
      <div className="btn">
        <NavLink to="/onboarding/page-2" className="no-underline">
          <center>
            <ButtonSubmit label="Proceed" />
          </center>
        </NavLink>
      </div>
    </div>
  );
};

export default Onboarding1;
