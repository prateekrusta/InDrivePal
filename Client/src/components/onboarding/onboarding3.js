import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import ButtonSubmit from "./button-submit";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import onboarding3 from '../../assets/images/onboarding3.png';
import "../../assets/css/onboarding.css";

const Onboarding3 = () => {
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

  return (
    <div className="onboarding">
      <div className="icons">
        <div className="arrow-back">
        <NavLink to="/onboarding/page-2">
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
        )}</div>
        </div>
      <center><img src={onboarding3} style={{marginTop:60, marginLeft:15}} /></center>
      <center>
        <p style={{fontSize:20}}>We store your personal data securely</p>
      </center>
      <center>
      <p style={{fontSize:14}} className="content3">To use the app, please allow us to collect info about other installed apps on your device and share it with our service providers.</p>
      <p style={{fontSize:14}} className="content3">This information will be used for fraud prevention and data analysis.</p>
      </center>
      <div className="btn">
        <NavLink to="/onboarding/page-4" className="no-underline">
          <center><ButtonSubmit label="Allow" /></center>
        </NavLink>
      </div>
    </div>
  );
};

export default Onboarding3;
