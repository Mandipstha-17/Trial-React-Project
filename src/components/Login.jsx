import React, { useState } from "react";
import s1 from "../assets/form1.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log("form submitted", data);
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <div className="form-image">
            <img src={s1} alt="Signup image" />
          </div>
        </div>
        <div className="col-md-6">
          <h4>Welcome </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                value={credentials.email}
                onChange={handleChange}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                value={credentials.password}
                onChange={handleChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p>
            Not register? <Link to="/sign-up">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;