import React, { useState } from "react";
import { registerData } from "../Data/registerData";
const Login = ({ login, setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkCredentials(email, password) {
    return registerData.some(
      (user) => user.email === email && user.password === password
    );
  }
  const handleLogin = () => {
    if (checkCredentials(email, password)) {
      console.log("inside");
      setLogin(true);
      window.alert("Loged in Successfull");
    } else {
      setLogin(false);
      window.alert("Email or password incorrect");
    }
  };

  return (
    <>
      {!login ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card mt-5">
                <div className="card-body">
                  <h2 className="text-center mb-4">Login Form</h2>
                  <form onSubmit={(e) => e.preventDefault(e)}>
                    <div className="mb-3">
                      <label htmlhtmlhtmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlhtmlFor="password" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      onClick={() => handleLogin()}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loged In</h1>
      )}
    </>
  );
};

export default Login;
