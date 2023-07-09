import "../../assets/css/buttons.css";
import "../../assets/css/onboarding.css";
const ButtonSubmit = (props) => {
  return (
    <center>
      <div className="btn-submit">
        <p className="no-underline">{props.label}</p>
      </div>
    </center>
  );
};

export default ButtonSubmit;
