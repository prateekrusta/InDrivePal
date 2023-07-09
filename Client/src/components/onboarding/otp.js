import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/otp.css';
import indianflag from '../../assets/logos/indiaflag.webp';

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showError, setShowError] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId = null;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            setIsTimerRunning(false);
            clearInterval(intervalId);
          }
          return prevTimer === 0 ? 60 : prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleNextClick = () => {
    if (otp.length === 4) {
      // Perform OTP validation logic here
      navigate('/onboarding/page-5');
    } else{
        setShowError(true)
    }
  };

  return (
    <div className="otp-out">
      <center><div className="otp-heading">We sent you a code</div></center>

      <div className="otp-input-phone-number">
        <Grid container spacing={1}>
          
          <Grid item xs={12}>
            <div className="input-phone-number-right">
              <input
                type="number"
                maxLength="4"
                minLength="4"
                placeholder="4 digit code"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </div>
          </Grid>
        </Grid>
        <center>
          <p className="retry">Retry log in after {timer} seconds</p>
        </center>
      </div>
      {showError && (
        <p className="error-text">Please enter the correct OTP.</p>
      )}

      <button className="btn-submit btn-otp" onClick={handleNextClick}>
        Verify
      </button>
    </div>
  );
};

export default Otp;
