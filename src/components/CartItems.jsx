import React, { useContext } from "react";
import productContext from "../context/ProductContext";
import { MdDelete } from "react-icons/md";

const CartItems = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  const Total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container cart-page mt-5">
      <div className="productcontainer-cart">
        <ul className="product-list">
          {cart &&
            cart.map((item) => (
              <li key={item._id}>
                <div className="row cart-list">
                  <div className="col-md-2">
                    <img
                      src={item.img}
                      style={{ height: "80px", width: "80px" }}
                      alt="hero image"
                    />
                  </div>
                  <div className="col-md-2">
                    <h6>Name:{item.title}</h6>
                  </div>
                  <div className="col-md-2">
                    <h6>Rs. {item.price}</h6>
                  </div>
                  <div className="col-md-2">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_CART_ITEM",
                          payload: { _id: item._id, qty: e.target.value },
                        })
                      }
                      className="form_control"
                    >
                      {[...Array(item.instock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="filter-summary">
        <div className="title">Total items: {cart.length}</div>
        <h4>Total: Rs. {Total}</h4>
        <button className="btn btn-primary"> Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartItems;