import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/ProductContext";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const About = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
    allProduct,
    editProduct,
  } = context;
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisibel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisibel(true);
  };
  const closeEditModal = () => {
    setModalVisibel(false);
    setSelectedProduct(null);
  };
  const saveEdit = (updateData) => {
    console.log("save edit");

    editProduct(selectedProduct._id, updateData);
  };
  const handleDelete = async (id) => {
    console.log("deleting product");
    // await deleteProduct(id)
  };
  useEffect(() => {
    allProduct();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="title">
          <h4>My products</h4>
        </div>
        {product &&
          product.map((item) => {
            return (
              <div className="col-md-3">
                <div key={item._id}>
                  <div className="card">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="card image"
                      height={350}
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5 className="card-title">{item.title || "title"}</h5>
                        <BsThreeDots onClick={() => toggleMenu(item._id)} />
                        {menuVisible[item._id] && (
                          <div className="menu-options">
                            <button onClick={() => openEditModal(item)}>
                              Edit
                            </button>
                            <button onClick={() => handleDelete(item._id)}>
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="card-text">
                        {item.description || "follow me for more news updates"}
                      </p>
                      <p className="card-text">
                        Rs. {item.price || "follow me for more news updates"}
                      </p>
                      {/* something?():() */}
                      {cart && cart.some((p) => p._id === item._id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            });
                          }}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            });
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                  {modalVisible &&
                    selectedProduct &&
                    selectedProduct._id === item._id && (
                      <EditProductModal
                        product={selectedProduct}
                        onClose={closeEditModal}
                        onSave={saveEdit}
                      />
                    )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default About;