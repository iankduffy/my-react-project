const TextInput = (props) => {
  return (
      <label htmlFor={props.text} >
        {props.text}
        <input className="col-12 u-pad-v-xs" name={props.name} type={props.type} x/>
      </label>
  )
};

export default TextInput;
