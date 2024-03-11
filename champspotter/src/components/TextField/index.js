import "./TextField.css";

const TextField = (props) => {

  const onEdit = (event) => {
    props.onEdit(event.target.value)
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onEdit}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
