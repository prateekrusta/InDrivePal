import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import "../../assets/css/contact-card.css";

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <AccountCircleIcon className="contact-icon" />
        <div className="contact-details">
          <div className="contact-name">{props.name}</div>
          <div className="contact-mobile">{props.contact}</div>
        </div>
      </div>
      <div className="remove-icon" onClick={props.onRemove}>
        <RemoveIcon />
      </div>
    </div>
  );
};

export default ContactCard;
