import React, { useState } from 'react';

const ProductImages = (props) => {
  const images = props.ProductImages.slice(0, 4)
  const [image, setImage] = useState(images[0]);

  return (
  <div className="col-5 col-12@md container__row">
    <img src={image} className="col-8"></img>
    <div className="col-3 u-mar-h-sm">
      {images.map((image, i) => <img src={image} className="c-product__image-sidebar" onClick={() => {setImage(image)}} key={i}/>)}
    </div>
  </div>
  )
};
  
export default ProductImages;