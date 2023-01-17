import * as Yup from "yup";

// const passwordRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );

export const signupSchema = Yup.object({
  username: Yup.string().min(3).required("Please enter your username."),
  password: Yup.string()
    // .matches(passwordRegex, "Please enter valid password.")
    .required("Please enter your password."),
});
