
const ProductForm = (props) => {
  const product = props.product; 

  console.log(product)
  return (
	<div className="col-12">
   <button onClick={() => {alert("echo")}}>Add to Bag</button>
	</div>
  )
};
  
export default ProductForm;