import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState("green-vegitables");
  useEffect(() => {
    setTimeout(() => {
      setProduct("fruits");
    }, 3000);
  }, []);
  
  return <div className="container p-4">This is : {product}</div>;
};

export default Product;