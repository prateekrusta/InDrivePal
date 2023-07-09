import "../../assets/css/finding-drivers.css";
import driver from "../../assets/images/driver.jpeg";
import driver2 from "../../assets/images/driver2.jpg";
import { NavLink } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";


const DriverOption = () => {

  return (
    <div className="modal-overlay-find-driver">
      <div className="driver-option">
        <div className="driver-modal">
          <img src={driver} />
          <div className="driver-content">
            <h4>Maruti Suzuki Ritz </h4>
            <h4 style={{ marginTop: -10 }}>Ram Sharma</h4>
            <div className="dr">
              <StarIcon style={{ color: "goldenrod" }} />
              <h4 style={{ marginTop: -0.5, marginLeft: 5, marginRight: 3 }}>
                4,9
              </h4>
              <span>(17)</span>
            </div>
          </div>
          <div className="modal-end">
            <strong>
              <h1>₹180</h1>
              <h4 style={{ marginTop: -21, textAlign: "right" }}>8 mins.</h4>
              <h4 style={{ marginTop: -24, textAlign: "right" }}>3,3 km</h4>
            </strong>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="btn-submit"
            style={{
              backgroundColor: "#F5F5F5",
              border: "none",
              width: "50vw",
              marginRight: "5vw",
              marginLeft: "3vw",
              color: "red",
            }}
          >
            <NavLink to="/ride/pick-driver-suggestion">
              <p>Decline</p>
            </NavLink>
          </div>
          <div
            className="btn-submit"
            style={{
              backgroundColor: "#A7E92F",
              border: "none",
              width: "50vw",
              padding: 1,
              marginLeft: "5vw",
            }}
          >
            <NavLink to="/ride/driver-rated">
              <p>Accept</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="driver-option" style={{ marginTop: "2vh" }}>
        <div className="driver-modal">
          <img src={driver2} />
          <div className="driver-content">
            <h4>Maruti Suzuki Alto</h4>
            <h4 style={{ marginTop: -10 }}>Nipun</h4>
            <div className="dr">
              <StarIcon style={{ color: "goldenrod" }} />
              <h4 style={{ marginTop: -0.5, marginLeft: 5, marginRight: 3 }}>
                4,4
              </h4>
              <span>(15)</span>
            </div>
          </div>
          <div className="modal-end">
            <strong>
              <h1>₹156</h1>
              <h4 style={{ marginTop: -21, textAlign: "right" }}>6 mins.</h4>
              <h4 style={{ marginTop: -24, textAlign: "right" }}>3,3 km</h4>
            </strong>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="btn-submit"
            style={{
              backgroundColor: "#F5F5F5",
              border: "none",
              width: "50vw",
              marginRight: "5vw",
              marginLeft: "3vw",
              color: "red",
            }}
          >
            <NavLink to="/ride/pick-driver-suggestion">
              <p>Decline</p>
            </NavLink>
          </div>
          <div
            className="btn-submit"
            style={{
              backgroundColor: "#A7E92F",
              border: "none",
              width: "50vw",
              padding: 1,
              marginLeft: "5vw",
            }}
          >
            <NavLink to="/ride/driver-rated">
              <p>Accept</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverOption;
