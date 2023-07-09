import React, { useState } from 'react';
import '../../assets/css/finding-drivers.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import '../../assets/css/buttons.css';
import DriverSOS from './driver-sos';
import {NavLink} from "react-router-dom";
import WaitingTime from './ride-waiting-time';
import question from '../../assets/images/question.png'
import Grid from "@material-ui/core/Grid";

const Waiting = () => {

  return (
    <div>
      <div>
      <Grid container spacing={1}>
                <Grid item xs={6}>
                      <NavLink to="/assistive-chat"><div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 10, marginTop: 17 }}>
                          <img src = {question}  />
                        </div>
                        </NavLink>
                </Grid>
                <Grid item xs={6}>
                  <NavLink to="/ride">
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 10, marginTop: -2 }}>
                      <h3>Cancel</h3>
                    </div>
                  </NavLink>
                </Grid>
        </Grid>
          
        </div>
    <div style={{marginLeft:'1vw', marginRight:'1vw', zIndex:'999', position:'absolute', Top:'20vh'}}><WaitingTime /></div>
    <div className='waiting'>
    <iframe style={{zIndex:'-1'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224347.08625126898!2d76.89713958826202!3d28.5269961121412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1688749811721!5m2!1sen!2sin"></iframe>    
    </div>
    <div>
    <center><h3 style={{color:'black'}}>White Coloured Car</h3></center>
      <center><h3 style={{ marginTop: -15, color:'black' }}>Maruti Suzuki Ritz</h3></center>
      <center><div className='rectangle-div'>UP14FT1121</div></center>

    </div>
    <DriverSOS />
    </div>
  );
};

export default Waiting