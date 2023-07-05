import { NavLink } from 'react-router-dom';
import feature1 from "../../assets/images/feature1.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../assets/css/onboarding.css";

const Feature1 = () => {
  return (
    <div className="onboarding" style={{ marginTop: 50 }}>
      <center>
        <p style={{ fontSize: 30 }}>Offer taxi fair</p>
        <p style={{ fontWeight: 200, marginLeft:30, marginRight:30, marginBottom:100}}>Put forward your own taxi fair. Get the best prices!</p>
        <img src={feature1} />
      </center>
      <div className="base-icons" style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/login"><h3 style={{marginLeft:10}}>Skip</h3></NavLink>
        <div className="circle">
        <NavLink to="/info-2"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
