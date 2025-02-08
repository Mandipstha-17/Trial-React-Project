import React, { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { cartReducer } from "./Reducer";
import hoodie from "../assets/green-hoodie.jpg"
import tshirt from "../assets/green-tshirt.jpg"
import buff from "../assets/buff-jacket.jpg"
import coat from "../assets/womens-coat.png"


const ProductState = (props) => {
  const prod = [
    {
      _id: 1,
      title: "Green Hoodie",
      description: "this is a plain green hoodie",
      price: 1000,
      instock: 10,
      img: hoodie,
    },
    {
      _id: 2,
      title: "Green Tshirt",
      description: "this is a plain green Tshirt",
      price: 500,
      instock: 5,
      img: tshirt,
    },
    {
      _id: 3,
      title: "buffer jacket ",
      description: "this is buffer jacket",
      price: 400,
      instock: 5,
      img: buff,
    },
    {
      _id: 4,
      title: "Womens Coat",
      description: "this is women coat",
      price: 400,
      instock: 5,
      img: coat,
    },
  ];
  const [product, setProduct] = useState(prod);
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

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        console.log("product deleted succesfully!");
      } else {
        console.log("failed to delete the product");
      }
      allProduct();
    } catch (error) {
      console.error("internal server error");
    }
  };

  return (
    <productContext.Provider
      value={{
        product,
        state,
        dispatch,
        allProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;