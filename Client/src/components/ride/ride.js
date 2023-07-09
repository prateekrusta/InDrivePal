import React, { useState } from 'react';
import '../../assets/css/finding-drivers.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import '../../assets/css/buttons.css';
import A from "../../assets/images/A.png";
import B from "../../assets/images/B.png";
import DriverRated from './driver-rated';
import Driver from './driver';
const RatedDriver = () => {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 10, marginTop: -2 }}>
        <h3>Cancel</h3>
      </div>
      <div className='modal-overlay'>
      <div className="modal-container" style={{height:'70vh'}}>
      <center><h3 style={{color:'black'}}>White Coloured Car</h3></center>
      <center><h3 style={{ marginTop: -15, color:'black' }}>Maruti Suzuki Ritz</h3></center>
      <center><div className='rectangle-div'>UP14FT1121</div></center>
      <Driver />
        <div className="ride-data" style={{backgroundColor:"white"}}>
        <div style={{display:'flex', flexDirection:'row'}}><img style={{width:'10vw', height:'5vh', marginTop:'1vh', marginRight: '1vw', marginLeft:'1vw'}} src={A} /><p>THE LOTUS POND TOWER-C2</p></div>
        <div style={{display:'flex', flexDirection:'row'}}><img style={{width:'10vw', height:'5vh', marginTop:'1vh', marginRight: '1vw', marginLeft:'1vw'}} src={B} /><p>Ryan International School, Noida</p></div>
        <p style={{ marginTop: -5, marginLeft:'12vw' }}>₹ {fare}, cash</p>
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