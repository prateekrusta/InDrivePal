import "../../assets/css/buttons.css";
import "../../assets/css/onboarding.css";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ButtonChoice = (props) => {
  return (
    <center>
      <div className="btn-choice">
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: "#A7E92F",
            "&.Mui-checked": {
              color: "#A7E92F",
            },
          }}
        />
        <p className="no-underline" style={{fontWeight: 200}}>{props.label}</p>
      </div>
    </center>
  );
};

export default ButtonChoice;
