import React, { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { cartReducer } from "./Reducer";
import hoodie1 from "../assets/green-hoodie.jpg";
import tshirt1 from "../assets/green-tshirt.jpg";
import buff from "../assets/buff-jacket.jpg";
import women from "../assets/womens-coat.png";

const initialProducts = [
  {
    _id: 1,
    title: "Green hoodie",
    description: "Comfy and cool green hoodie.",
    price: 2500,
    instock: 5,
    img: hoodie1,
  },
  {
    _id: 2,
    title: "Green plain tshirt",
    description: "Comfy and cool green t-shirt.",
    price: 1500,
    instock: 7,
    img: tshirt1,
  },
  {
    _id: 3,
    title: "Mens Buffer Jacket",
    description: "Comfy and cool buffer jacket.",
    price: 4500,
    instock: 5,
    img: buff,
  },
  {
    _id: 4,
    title: "Womens Coat",
    description: "Comfy and cool women's coat.",
    price: 5000,
    instock: 5,
    img: women,
  },
];

const ProductState = (props) => {
  const [product, setProduct] = useState(initialProducts); // Corrected this line
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  const allProduct = async () => {
    const response = await fetch(
      "http://localhost:3000/api/product/getallproduct", //dummy api
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  const editProduct = async (selectedProduct, updateData) => {
    console.log("edit product", selectedProduct);
    const { title, description, price, instock } = updateData;
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/updateproduct/${selectedProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description, price, instock }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      throw new Error("fail to update");
    }
  };

  return (
    <productContext.Provider
      value={{ product, state, dispatch, allProduct, editProduct }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
