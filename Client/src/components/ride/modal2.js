import React from "react";
import driver from "../../assets/images/driver.jpeg";
import "../../assets/css/modal2.css";
import {NavLink} from "react-router-dom";
import ButtonSubmit from "../onboarding/button-submit";
const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
       <center>
          <h1 className="modal-heading">Cancel this ride?</h1>
        </center>
        <center>
          <h3 className="modal-paragraph">
            If you cancel often, your rating might get affected.
          </h3>
        </center>
        <div className="modal-overlay-image">
          <center>
            <div className="modal-image-container">
              <img src={driver} alt="Circular" className="modal-image" />
            </div>
          </center>
          <center>
            <h2 className="modal-subheading">
              Ram Sharma will arrive in 6 minutes
            </h2>
          </center>
        </div>
        <div className="modal-buttons">
        <NavLink to="/ride/waiting"><center>
            <ButtonSubmit label="Take the ride" />
          </center></NavLink>
          <NavLink to="/ride"><center>
            <div
              className="btn-submit"
              style={{ backgroundColor: "#F5F5F5", marginBottom: 4, color: 'red', border: 'none', padding: 2, marginTop:5 }}
            >
              <p>Cancel this ride</p>
            </div>
          </center></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modal;
