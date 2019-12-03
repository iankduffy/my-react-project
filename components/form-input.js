const FormInput = ({ handleChange, label, name, containerClass, ...otherProps }) => {

  return (
  <div className={`${containerClass ? containerClass : ''} o-input u-pad-v-xs `}>
    {label ? (
      <label htmlFor={name} className="o-input--label u-pad-v-xs">{label}:</label>  ) : null}
      <input id={name} className='o-input--input' onChange={(e) => handleChange(e.target.value)} {...otherProps} />
  </div>
  )
};

export default FormInput;
