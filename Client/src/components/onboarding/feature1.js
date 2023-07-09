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
      <div className="base-icons bi-1" style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/login" className="no-underline"><h3 style={{marginLeft:20}}>SKIP</h3></NavLink>
        <div className="circle" style={{marginRight:25}}>
        <NavLink to="/info-2"><ArrowForwardIosIcon className="arrow-icon" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
