import React from "react";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ContactCard from "./contact-card";
import ButtonSubmit from "./button-submit";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../assets/css/emergency.css";

const ListEmergencyContacts = () => {
  const [contacts, setContacts] = useState([
    {"name": "John Doe", "mobile": "+1234567890"},
    {"name": "Jane Smith", "mobile": "+9876543210"},
    {"name": "Alice Johnson", "mobile": "+5555555555"},
    {"name": "Bob Anderson", "mobile": "+9999999999"},
    {"name": "Emily Brown", "mobile": "+1111111111"}
  ]);

  const removeContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div className="icons-top">
        <NavLink to="/emergency/add-contact"><div className="back-icons"><ArrowBackIosIcon style={{color: 'grey'}} /><h3>Back</h3></div></NavLink>
        <NavLink to="/ride"><div className="forward-icons"><h3>Skip</h3><ArrowForwardIosIcon style={{color: 'grey'}} /></div></NavLink>
      </div>
      <center>
        <p className="emergency-heading">Emergency contacts</p>
      </center>
      <div>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            contact={contact.mobile}
            onRemove={() => removeContact(index)}
          />
        ))}
      </div>
      <div className="btn">
      <NavLink to="/emergency/add-contact"><center><div className="btn-cc" style={{backgroundColor:"#F5F5F5", marginBottom:4}}><p>Add another contact</p></div></center></NavLink>
      <NavLink to="/ride"><center><ButtonSubmit label="Proceed" /></center></NavLink>
      </div>
    </div>
  );
};

export default ListEmergencyContacts;
