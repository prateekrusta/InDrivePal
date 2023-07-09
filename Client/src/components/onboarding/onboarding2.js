import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ButtonChoice from './button-choice';
import ButtonSubmit from './button-submit';
import '../../assets/css/onboarding.css';

const Onboarding2 = () => {
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
        <NavLink to="/onboarding/page-1">
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
      <center>
        <p style={{ fontSize: 20, marginTop: 100 }}>Select your special need(s)?</p>
      </center>
      <div style={{ marginTop: 50 }}>
        <ButtonChoice label="Visual Impairment" style={{color:"#A7E92F"}} />
        <ButtonChoice label="Hearing Impairment" />
        <ButtonChoice label="Speech Impairment" />
        <ButtonChoice label="Locomotor Disability" />
      </div>
      <div className="btn">
        <NavLink to="/onboarding/page-3" className="no-underline">
          <center><ButtonSubmit label="Proceed with your PAL" /></center>
        </NavLink>
      </div>
    </div>
  );
};

export default Onboarding2;
