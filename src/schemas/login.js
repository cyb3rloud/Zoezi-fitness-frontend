import * as Yup from 'yup';

// const passwordRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );

export const signupSchema = Yup.object({
  email: Yup.string().email('Please enter valid email.').required('Please enter your email.'),
  password: Yup.string()
    // .matches(passwordRegex, "Please enter valid password.")
    .required('Please enter your password.'),
});
