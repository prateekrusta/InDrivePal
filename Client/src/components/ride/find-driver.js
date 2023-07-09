import React, { useState } from 'react';
import '../../assets/css/finding-drivers.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import '../../assets/css/buttons.css';
import A from "../../assets/images/A.png";
import B from "../../assets/images/B.png";
import { NavLink } from "react-router-dom";
import DriverOption from './driver-option';
const FindDriver = () => {
  const [fare, setFare] = useState(156); 
  const [showModal, setShowModal] = useState(false)
  const handleIncrement = () => {
    setFare(prevFare => prevFare + 10); 
  };

  const handleDecrement = () => {
    setFare(prevFare => prevFare - 10); 
  };

  const onClickHandler = () => {
    setShowModal(true);
  }
  return (
    <div>
       <NavLink to="/ride"><div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 10, marginTop: -2 }}>
        <h3 style={{"textDecoration":"none"}}>Cancel</h3>
      </div></NavLink>
      <div><div className="suggestion">
        <div>
          <ErrorOutlineIcon />
        </div>
        <p className="para-driver">To get a FAST offer from driver, you can RAISE the price BELOW</p>
      </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224347.08625126898!2d76.89713958826202!3d28.5269961121412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1688749811721!5m2!1sen!2sin" width="375" height="812"></iframe>
    <div className="ride-data">
        <div style={{display:'flex', flexDirection:'row'}}><img style={{width:'10vw', height:'5vh', marginTop:'1vh', marginRight: '1vw', marginLeft:'1vw'}} src={A} /><p>THE LOTUS POND TOWER-C2</p></div>
        <div style={{display:'flex', flexDirection:'row'}}><img style={{width:'10vw', height:'5vh', marginTop:'1vh', marginRight: '1vw', marginLeft:'1vw'}} src={B} /><p>Ryan International School, Noida</p></div>
        <p style={{ marginTop: -5, marginLeft:'12vw' }}>₹ {fare}, cash</p>
      </div>
      <h3 style={{ fontWeight: 300 }}>Current Fare</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          className="btn-submit"
          style={{ backgroundColor: '#F5F5F5', border: 'none', width: '40vw', marginLeft: '5vw' }}
          onClick={handleDecrement}
        >
          <p>-10</p>
        </div>
        <h3 style={{ margin: '0 10px', marginLeft: '5vw', marginRight: '5vw' }}>₹{fare}</h3>
        <div
          className="btn-submit"
          style={{ backgroundColor: '#A7E92F', border: 'none', width: '40vw', padding: 1, marginRight: '5vw' }}
          onClick={handleIncrement}
        >
          <p>+10</p>
        </div>
      </div>
      <center>
        <div
          className="btn-submit"
          style={{ backgroundColor: '#F5F5F5', border: 'none', padding: 1, width: '90vw', marginTop: '1vh' }}
          onClick={onClickHandler}
        >
          <p>Raise Fare</p>
        </div>
      </center>
    </div>
    {showModal && <DriverOption />}
    </div>

  );
};

export default FindDriver