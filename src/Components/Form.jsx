import React from "react";
import { basicSchema } from "../Schemas";
import { useFormik } from "formik";

const Form = ({ handleCheckbox, students, Submit, hobbiesAvailable }) => {
  const onSubmit = async (values, actions) => {
    Submit(values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
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
      name: "",
      email: "",
      address: "",
      password: "",
      country: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const countries = ["India", "UK", "USA", "Australia"];
  const countriesOption = countries.map((name, key) => (
    <option value={name} key={key}>
      {name}
    </option>
  ));
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center mb-4">Registration Form</h2>
              <form onSubmit={(e) => e.preventDefault(e)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:*
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <p className="error">{errors.name}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:*
                  </label>
                  <input
                    required
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
                  <label htmlFor="email" className="form-label">
                    password:*
                  </label>
                  <input
                    required
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
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address:*
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.address && touched.address && (
                    <p className="error">{errors.address}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender:*
                  </label>
                  <br />
                  <div
                    className="form-check form-check-inline"
                    onChange={(e) => handleChange(e)}
                  >
                    <input
                      type="radio"
                      value="male"
                      checked={values.gender === "male"}
                      name="gender"
                      onBlur={handleBlur}
                    />
                    Male
                    <input
                      type="radio"
                      value="female"
                      checked={values.gender === "female"}
                      name="gender"
                      onBlur={handleBlur}
                    />
                    Female
                  </div>
                  {errors.gender && touched.gender && (
                    <p className="error">{errors.gender}</p>
                  )}
                </div>

                <div role="group" className="mb-3">
                  <label htmlFor="hobbies" className="form-label">
                    Hobbies:
                  </label>
                  <br />
                  {hobbiesAvailable.map((hoby, index) => {
                    return (
                      <div className="form-check form-check-inline" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={hoby.name}
                          id={hoby.id}
                          value={hoby.hobby}
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label className="form-check-label" htmlFor="reading">
                          {hoby.hobby}
                        </label>
                      </div>
                    );
                  })}
                  <>
                    {" "}
                    {/* <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="writing"
                id="writing"
                value="writing"
                onChange={(e) => handleCheckbox(e)}
              />
              <label className="form-check-label" htmlFor="writing">
                Writing
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="swimming"
                id="swimming"
                value="swimming"
                onChange={(e) => handleCheckbox(e)}
              />
              <label className="form-check-label" htmlFor="swimming">
                Swimming
              </label>
            </div> */}
                  </>
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country:*
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    defaultValue={""}
                    onChange={handleChange}
                  >
                    <option value={""}>select</option>
                    {countriesOption}
                  </select>
                  {errors.country && touched.country && (
                    <p className="error">{errors.country}</p>
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
  );
};

export default Form;
