import "../../assets/css/driver.css";
import driver from "../../assets/images/driver.jpeg"
import StarIcon from '@mui/icons-material/Star';
import MessageIcon from '@mui/icons-material/Message';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {NavLink} from "react-router-dom";
const DriverSOS = () => {
  return (
    <div className="driver">
     <img src={driver} />
     <div className="driver-data">
        <h3>Ram</h3>
        <div className="rating"><div style={{marginLeft: 4}}><StarIcon /></div><h4>4.9</h4></div>
     </div>
    <div className="driver-icon">
        <NavLink to="/ride/SOS"><div className="icon" style={{backgroundColor:'red'}}><h3 style={{color:'white'}}>SOS</h3></div></NavLink>
        <NavLink to="/chat-app"><div className="icon"><MessageIcon /></div></NavLink>
        <div className="icon"><LocalPhoneIcon /></div>
    </div>
    </div>
  );
};

export default DriverSOS;
