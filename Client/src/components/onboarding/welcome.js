import { NavLink, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import '../../assets/css/onboarding.css';
import '../../assets/css/buttons.css';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]+$/.test(value) || value === '') {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]+$/.test(value) || value === '') {
      setLastName(value);
    }
  };

  const handleNextClick = () => {
    if (firstName.length > 0 && lastName.length > 0) {
      navigate('/onboarding/page-7');
    } else {
      setErrorMessage('Please enter valid input.');
    }
  };

  return (
    <>
      <div className="icons">
        <div className="arrow-back">
          <NavLink to="/onboarding/page-5">
            <ArrowBackIcon />
          </NavLink>
        </div>
      </div>

      <div className="welcome-out">
        <div className="welcome-heading">
          Welcome to inDrive!
          <br />
          <small>Let's get acquainted</small>
        </div>

        <div className="input-phone-number">
          <div className="input-details-1">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>

          <div className="input-details-2">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>

        {errorMessage && <p className="error-text">{errorMessage}</p>}

        <button className="btn-submit btn-height" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default Login;
