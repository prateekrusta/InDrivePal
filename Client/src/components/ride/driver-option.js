import "../../assets/css/finding-drivers.css";
import driver from "../../assets/images/driver.jpeg";
import StarIcon from '@mui/icons-material/Star';

const DriverOption = () => {
  return (
    <div className="modal-overlay-find-driver">
    <div className="driver-option">
      <div className="driver-modal">
        <img src={driver} />
        <div className="driver-content">
        <h4>Maruti Suzuki Wagnar</h4>
        <h4 style={{marginTop:-10}}>Rahul</h4>
       <div className="dr">
       <StarIcon style={{color:'goldenrod'}}/>
       <h4 style={{marginTop:-0.5, marginLeft:5, marginRight:3}}>5,0</h4>
       <span>(17)</span>
       </div>
        </div>
        <div className="modal-end">
          <strong>
            <h1>₹180</h1>
            <h4 style={{marginTop:-21, textAlign:'right'}}>8 mins.</h4>
            <h4 style={{marginTop:-24, textAlign:'right'}}>3,3 km</h4>
          </strong>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div
          className="btn-submit"
          style={{ backgroundColor: '#F5F5F5', border: 'none', width: '50vw', marginRight: '5vw', marginLeft: '3vw', color:'red' }}
        >
          <p>Decline</p>
        </div>
        <div
          className="btn-submit"
          style={{ backgroundColor: '#A7E92F', border: 'none', width: '50vw', padding: 1, marginLeft: '5vw' }}
        >
        <p>Accept</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default DriverOption;
