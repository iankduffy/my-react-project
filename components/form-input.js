const FormInput = ({ handleChange, type, label, formId, name, classes, ...otherProps }) => {

  return (
    <div className={`o-input--group u-mar-t-sm ${classes}`}>
      <input className="o-input--input" type={type} id={formId} required onChange={(e) => handleChange(e.target.value)}/>
      <label className="o-input--label" htmlFor={formId}>{label}</label>
    </div>
  )
};

export default FormInput;
