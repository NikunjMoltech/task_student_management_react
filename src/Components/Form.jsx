import React from "react";

// const onSubmit = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

const Form = ({
  students,
  handleChange,
  handleCheckbox,
  handleSubmit,
  hobbiesAvailable,
}) => {
  // const {
  //   values,
  //   errors,
  //   touched,
  //   isSubmitting,
  //   handleBlur,
  //   handleChange,
  //   handleSubmit,
  // } = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //     address: "",
  //     gender: "",
  //     hobbies: [],
  //     country: "",
  //     //confirmPassword: "",
  //   },
  //   validationSchema: basicSchema,
  //   onSubmit,
  // });

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
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={students.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={students.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={students.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    value={students.address}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender:
                  </label>
                  <br />
                  <div
                    className="form-check form-check-inline"
                    onChange={(e) => handleChange(e)}
                  >
                    <input
                      type="radio"
                      value="male"
                      checked={students.gender === "male"}
                      name="gender"
                    />
                    Male
                    <input
                      type="radio"
                      value="female"
                      checked={students.gender === "female"}
                      name="gender"
                    />
                    Female
                  </div>
                </div>

                <div className="mb-3">
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
                          name={hoby.hobby}
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
                    Country:
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    defaultValue={""}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value={""}>select</option>
                    {countriesOption}
                  </select>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={() => handleSubmit()}
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
