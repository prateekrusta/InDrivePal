import React, { useState } from 'react';
import '../../assets/css/finding-drivers.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import '../../assets/css/buttons.css';
import DriverRated from './driver-rated';
import Driver from './driver';
const RatedDriver = () => {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 10, marginTop: -2 }}>
        <h3>Cancel</h3>
      </div>
      <div className='modal-overlay'>
      <div className="modal-container">
      <center><h3 style={{color:'black'}}>White Coloured Car</h3></center>
      <center><h3 style={{ marginTop: -15, color:'black' }}>Maruti Suzuki Wagnar</h3></center>
      <center><div className='rectangle-div'>UP14FT1121</div></center>

      <Driver />
        <div className="ride-data" style={{backgroundColor:"white"}}>
        <p>THE LOTUS POND TOWER-C2</p>
        <p style={{ marginTop: -15 }}>Ryan International School, Noida</p>
        <p style={{ marginTop: -15 }}>₹ 180, cash</p>
      </div>
      <hr />
      <DriverRated name="Prateek" />
      <hr />
      <DriverRated name="Chinmay" />
      <hr />
      <DriverRated name="Nipun" />
     </div> 
     </div>
     </div>
  );
};

export default RatedDriver