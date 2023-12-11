import React, { useState } from "react";
import { registerData } from "../Data/registerData";
import { useFormik } from "formik";
import { loginSchema } from "../Schemas";
import axios from "axios";
import { APIVariables } from "../Data/APIEndPoints";
const Login = ({ login, setLogin }) => {
  const onSubmit = async (values, actions) => {
    const info = values;
    axios
      .post(APIVariables.API_URL + "Registration/login", info)
      .then((result) => {
        if (result.status === 200) {
          if (result.data === 1) {
            actions.resetForm();
            setLogin(true);
            return window.alert("Login Successfull");
          } else {
            return window.alert("Email Password Incorrect");
          }
        }
      })
      .catch((error) => {
        alert(error);
      });

    await new Promise((resolve) => setTimeout(resolve, 500));
  };
  const {
    values,
    actions,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  function checkCredentials(email, password) {
    return registerData.some(
      (user) => user.email === email && user.password === password
    );
  }
  // const handleLogin = () => {
  //   if (checkCredentials(email, password)) {
  //     console.log("inside");
  //     setLogin(true);
  //     window.alert("Loged in Successfull");
  //   } else {
  //     setLogin(false);
  //     window.alert("Email or password incorrect");
  //   }
  // };
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
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      onClick={() => handleSubmit(values, actions)}
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
