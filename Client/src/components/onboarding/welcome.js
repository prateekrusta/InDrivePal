import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../assets/css/onboarding.css';
import '../../assets/css/buttons.css';

const Login = () => {

    return (
      <>

        <div className="icons">
            <div className="arrow-back">
            <ArrowBackIcon />
            </div>
        </div>

      <div className="welcome-out">

        <div className="welcome-heading">
            Welcome to inDrive!<br />
            <small>Let's get acquainted</small> 
        </div>

        <div className="input-phone-number">

            <div className="input-details-1">
                <input type="text" placeholder="First Name"></input>
            </div>

            <div className="input-details-2">
                <input type="text" placeholder="Last Name"></input>
            </div>

        </div>

        <button className="btn-submit btn-height">
        Next
        </button>

      </div>
      </>
    );
  };
  
  export default Login;