import Grid from "@material-ui/core/Grid"
import { NavLink } from 'react-router-dom';
import '../../assets/css/otp.css';
import indianflag from '../../assets/logos/indiaflag.webp';

const Otp = () => {

    return (
      <div className="otp-out">
        <div className="otp-heading">
            We sent you a code
        </div>

        <div className="otp-input-phone-number">
            <Grid container spacing={1}>
            <Grid item xs={2}>
                    <div className="otp-input-phone-number-left">
                        <img src={indianflag} className="otp-flag"></img>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="otp-input-phone-number-right">
                        <span> +91 </span>
                        <input type="tel" placeholder="Enter your phone no." maxLength="10" minLength="10" required></input>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="input-phone-number-right">
                        <input type="text" maxLength="4" minLength="4" placeholder="4 digit code" required></input>
                    </div>
                </Grid>
            </Grid>
            <center> <p className="retry">Retry log in after 60 seconds</p></center>
        </div>
      </div>
    );
  };
  
  export default Otp;