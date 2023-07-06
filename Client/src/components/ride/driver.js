import "../../assets/css/driver.css";
import driver from "../../assets/images/driver.jpeg"
import StarIcon from '@mui/icons-material/Star';
import MessageIcon from '@mui/icons-material/Message';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Driver = () => {
  return (
    <div className="driver">
     <img src={driver} />
     <div className="driver-data">
        <h3>Ram Sharma</h3>
        <div className="rating"><div style={{marginLeft: 4}}><StarIcon /></div><h4>4.9</h4></div>
     </div>
    <div className="driver-icon">
        <div className="icon"><MessageIcon /></div>
        <div className="icon"><LocalPhoneIcon /></div>
    </div>
    </div>
  );
};

export default Driver;
