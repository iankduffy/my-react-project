import FormInput from '../form-input'

const SideBar = ({onSearch}) => (
  <div className="col-3 col-12@md o-section u-pad-h-sm u-pad-v-sm u-mar-t-xl@md-min u-mar-b-md">
    <FormInput    
      name='Search'
      type='Search'
      handleChange={onSearch}
      value={""}
      label='Search'
      placeholder='Search'
      classes="col-12 u-mar-v-md"
      formId="Search"
      />
      <h4>Rating Select</h4>
      <h4>Brewery Select</h4>
      <h4>Sort Select</h4>

  </div>
);
  
export default SideBar;