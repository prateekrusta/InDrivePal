import "../../assets/buttons.css";
const Button = (props) => {
  return (
    <center>
      <div className="btn-choice">
      <p>{props.label}</p>
      </div>
    </center>
  );
};

export default Button;
