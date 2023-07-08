import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import indianflag from '../../assets/logos/indiaflag.webp';
import '../../assets/css/login.css';
import '../../assets/css/buttons.css';

const Onboarding4 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNextClick = () => {
    if (phoneNumber.length === 10) {
      setShowError(false);
      navigate('/onboarding/otp');
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login-out">
      <div className="login-heading">Join us via phone number</div>

      <div className="input-phone-number">
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <div className="input-phone-number-left">
              <img src={indianflag} className="flag" alt="Indian Flag" />
            </div>
          </Grid>

          <Grid item xs={10}>
            <div className="input-phone-number-right">
              <span>+91</span>
              <input
                type="tel"
                placeholder="Enter your phone no."
                maxLength="10"
                minLength="10"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {showError && (
        <p className="error-text">Please enter a valid 10-digit phone number.</p>
      )}

      <button className="btn-submit btn-height" onClick={handleNextClick}>
        Next
      </button>

      <div className="disclaimer">
        <p>
          By tapping <b>"Next"</b>, you agree to <u>Terms and Conditions</u> and{' '}
          <u>Privacy Policy</u>.
        </p>
      </div>
    </div>
  );
};

export default Onboarding4;
