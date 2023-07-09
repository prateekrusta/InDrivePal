import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/SOS.css";

const SOS = () => {
  const [isSosSent, setIsSosSent] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSosSent(!isSosSent);
    setTimeout(() => {
      navigate('/ride/waiting')
    }, 1000);
    
  };

  return (
    <div className="modal-overlay">
      <input type="checkbox" id="lol-checkbox" checked={isSosSent} />
      <label htmlFor="lol-checkbox" className={isSosSent ? "sent" : ""} onClick={handleToggle}>
        <div id="knob"></div>
        {!isSosSent && <strong><div id="alright">Send SOS</div></strong>}
        {isSosSent && <strong><div id="alright">Sent!</div></strong>}
      </label>
    </div>
  );
};

export default SOS;
