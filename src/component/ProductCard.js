import React from "react";

const ProductCard = (  {item} ) => {
  return (
    <div>
      <img src={item?.img}/>
      <div>{item?.choice==true?"선택":""}</div>
      <div>{item?.title}</div> 
      <div>{item?.price}</div>
      <div>{item?.div}</div>
      <div>{item?.new==true?"신제품":"구제품"}</div>
    </div>
  );
};

export default ProductCard;
