import "../../assets/buttons.css";
const ButtonSubmit = (props) => {
  return (
    <center>
      <div className="btn-submit">
        <p>{props.label}</p>
      </div>
    </center>
  );
};

export default ButtonSubmit;
