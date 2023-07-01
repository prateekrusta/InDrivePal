import "../../assets/buttons.css";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ButtonChoice = (props) => {
  return (
    <center>
      <div className="btn-choice">
        <Checkbox {...label} defaultChecked color="default" />
        <p>{props.label}</p>
      </div>
    </center>
  );
};

export default ButtonChoice;
