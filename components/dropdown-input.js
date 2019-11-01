const DropDown = (props) => {
  let inputDetails = props.optionsValue
  return (
    <label for={props.text}>
      <select defaultValue={props.defaultValue} name={props.text} className="o-select" onChange={(e) => {props.setParentState(event.target.value)}}>
        {inputDetails.map((option) => <option value={option}>{props.optionsText[inputDetails.indexOf(option)]}</option>)}
      </select>
    </label>
  )
};

export default DropDown;
