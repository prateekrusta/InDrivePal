import "../../assets/onboarding.css";
import React, { useState } from "react";
import ButtonSubmit from "./button-submit";
import Radio from '@mui/material/Radio';
const Onboarding1 = (props) => {

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div className="onboarding">
      <center>
        <p style={{fontSize:20, marginTop:100}}>Do you need specially abled features?</p>
      </center>
      <center><div style={{marginTop:50}}>
      <div className="btn-choice">
      <Radio {...controlProps('a')} color="default" />
      <p>Yes</p>
      </div>
      <div className="btn-choice">
      <Radio {...controlProps('b')} color="default" />
      <p>No</p>
      </div>
      </div>
      </center>
      <div style={{marginTop:200}}>
      <ButtonSubmit label="Proceed" />
      </div>
    </div>
  );
};

export default Onboarding1;
