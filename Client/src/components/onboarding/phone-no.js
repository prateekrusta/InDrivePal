import Grid from "@material-ui/core/Grid"
import ReactDOM from "react-dom";
import indianflag from '../../assets/logos/indiaflag.webp';
import '../../assets/css/login.css';
import '../../assets/css/buttons.css';

const Login = () => {

    return (
      <div className="login-out">
        <div className="login-heading">
            Join us via phone number 
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
                        <input type="tel" placeholder="Enter your phone no."></input>
                    </div>
                </Grid>
                
            </Grid>
        </div>

        <button className="btn-submit btn-height">
        Next
        </button>

        <div className="disclaimer">
            <p>
                By tapping <b>"Next"</b>, You agree to <u>Terms and Conditions</u> and <u>Privacy Policy</u>
            </p>
        </div>
      </div>
    );
  };
  
  export default Login;