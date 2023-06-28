import React from 'react'

const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
  return (
    <div className="product">
        
        <img src={productImage}/>
        <div className="desciption">
            <p>
                <b>{productName}</b>
            </p>
            <p>
            ₹ {price}
            </p>            
            <button className='addToCartBttn'> Add to cart</button>


        </div>
    
    
    
    
    </div>
  )
}

export default Product
