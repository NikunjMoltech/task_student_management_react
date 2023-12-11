import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Name Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  address: yup.string().required("Required"),
  gender: yup.string().required("Select Gender"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Passwords must match")
  //     .required("Required"),
  country: yup
    .string()
    .oneOf(["India", "UK", "USA", "Australia"], "Select Country")
    .required("Required"),

  hobbies: yup.array().of(yup.string().notRequired()).notRequired(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please Enter Valid Password" })
    .required("Required"),
});

export const updateFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Name Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  address: yup.string().required("Required"),
  gender: yup.string().required("Select Gender"),
  country: yup
    .string()
    .oneOf(["India", "UK", "USA", "Australia"], "Select Country")
    .required("Required"),
});
