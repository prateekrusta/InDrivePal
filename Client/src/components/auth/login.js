import Grid from "@material-ui/core/Grid"
import ReactDOM from "react-dom";
import indianflag from '../../assets/logos/indiaflag.webp';
import '../../assets/css/login.css';

const Login = () => {

    return (
      <div className="login-out">
        <div className="login-heading">
            Sign in via phone number 
        </div>

        <div className="input-phone-number">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="input-phone-number-left">
                        <img src={indianflag} className="flag"></img>
                    </div>
                </Grid>

                <Grid item xs={8}>
                    <div className="input-phone-number-right">
                        <span> +91 </span>
                        <input type="tel" placeholder="Enter your phone number"></input>
                    </div>
                </Grid>
                
            </Grid>
        </div>

        <div className="disclaimer">
            <p>
                By tapping "Next" 
            </p>
        </div>
      </div>
    );
  };
  
  export default Login;