import "../../assets/onboarding.css";
import ButtonChoice from "./button-choice";
import ButtonSubmit from "./button-submit";

const Onboarding2 = (props) => {
  return (
    <div className="onboarding">
      <center>
        <p style={{fontSize:20, marginTop:100}}>Select your special need(s)?</p>
      </center>
      <div style={{marginTop:50}}>
      <ButtonChoice label="Visual Impairment" />
      <ButtonChoice label="Hearing Impairment" />
      <ButtonChoice label="Speech Impairment" />
      <ButtonChoice label="Locomotor Disability" />

      </div>
      <div style={{marginTop:100}}>
      <ButtonSubmit label="Proceed with your PAL" />
      </div>
    </div>
  );
};

export default Onboarding2;
