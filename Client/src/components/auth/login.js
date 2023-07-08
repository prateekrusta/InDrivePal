import { NavLink } from 'react-router-dom';
import Grid from "@material-ui/core/Grid"
import ReactDOM from "react-dom";
import indianflag from '../../assets/logos/indiaflag.webp';
import '../../assets/css/login.css';
import '../../assets/css/buttons.css';

const Login = () => {

    return (
      <div className="login-out">
        <div className="login-heading">
            Sign in via phone number 
        </div>

        <div className="input-phone-number">
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <div className="input-phone-number-left">
                        <img src={indianflag} className="flag"></img>
                    </div>
                </Grid>

                <Grid item xs={10}>
                    <div className="input-phone-number-right">
                        <span> +91 </span>
                        <input type="tel" placeholder="Enter your phone no." maxLength="10" minLength="10" required></input>
                    </div>
                </Grid>
            </Grid>
        </div>
        <NavLink to="/ride">
        <button className="btn-submit btn-height">
        Next
        </button>
        </NavLink>
        <div className="new-user-signup-message">
            <p>
                New User? <NavLink to="/onboarding/page-1"><b>Create new account</b></NavLink>.
            </p>
        </div>

        <div className="disclaimer">
            <p>
                By tapping <b>"Next"</b>, You agree to <u>Terms and Conditions</u> and <u>Privacy Policy</u>
            </p>
        </div>
      </div>
    );
  };
  
  export default Login;