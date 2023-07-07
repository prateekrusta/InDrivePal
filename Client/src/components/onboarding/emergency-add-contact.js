import { NavLink } from 'react-router-dom';
import React, {useRef} from "react";
import ButtonSubmit from "./button-submit";
import Grid from "@material-ui/core/Grid"
import '../../assets/css/otp.css';
import indianflag from '../../assets/logos/indiaflag.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../../assets/css/emergency.css";
import uploadImage from '../../assets/images/imageUpload.png';

const EmergencyAddContacts = () => {
  const inputFileRef = useRef(null);

  const handlePhotoClick = () => {
    inputFileRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the file
  };
  return (
    <div className="onboarding">
    <div className="back"><ArrowBackIosIcon style={{color: 'grey'}} /><h3>Back</h3></div>
      <center>
        <p className="emergency-heading">Add contact</p>
      </center>
      <center>
      <div className="photo-container">
          <img src={uploadImage} className="photo-image" alt="Upload" onClick={handlePhotoClick} style={{width:200}} />
          <input
            type="file"
            accept="image/*"
            ref={inputFileRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </div>
      </center>
      <div className="input-phone-number">
            <Grid container spacing={1}>
            <Grid item xs={12}>
                    <div className="input-phone-number-right">
                        <input type="text" placeholder="Name"></input>
                    </div>
                </Grid>
            <Grid item xs={2}>
                    <div className="input-phone-number-left" style={{marginLeft:40}}>
                        <img src={indianflag} className="flag"></img>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="input-phone-number-right" style={{marginLeft:-25}}>
                        <span> +91 </span>
                        <input type="tel" placeholder="Enter contact no." maxLength="10" minLength="10" required style={{width:'60vw'}}></input>
                    </div>
                </Grid>
                
            </Grid>
        </div>
      <div className="btn">
      <center><ButtonSubmit label="Proceed" /></center>
      </div>
     
    </div>
  );
};

export default EmergencyAddContacts;
