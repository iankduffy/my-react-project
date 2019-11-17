const TextInput = (props) => {
  let inputDetails = props.optionsValue
  return (
    <div className="col-12 u-mar-b-sm">
      <label htmlFor={props.text} >
        <input className="col-12 u-pad-v-xs" list="qty" name="qty" placeholder={`QTY: ${props.defaultValue}`}/>
      </label>
      <datalist id="qty">
        {inputDetails.map((option) => <option value={option}/>)}
      </datalist>
    </div>
  )
};

export default TextInput;
