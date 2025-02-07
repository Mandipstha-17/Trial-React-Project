import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    instock: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("instock", product.instock);
    if (product.image) {
      formData.append("myfile", product.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        formData,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

  
      toast.success("Product added successfully in cart ");

      
      setProduct({
        title: "",
        description: "",
        price: "",
        instock: "",
        image: "",
      });
    } catch (error) {

      toast.error("Error adding product. Please try again.");
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="container mt-4">
      <h4>Add your product here !!</h4>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="exampleInputEmail1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instock</label>
          <input
            type="number"
            name="instock"
            value={product.instock}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="form-control"
            id="image"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
