import * as Yup from 'yup';

// const passwordRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );

export const signupSchema = Yup.object({
  firstname: Yup.string().min(3).required('Please enter your first name.'),
  lastname: Yup.string().min(3).required('Please enter your last name.'),
  //   username: Yup.string().min(3).required("Please enter your username."),
  email: Yup.string().email('Please enter valid email.').required('Please enter your email.'),
  password: Yup.string()
    // .matches(passwordRegex, "Please enter valid password.")
    .required('Please enter your password.'),
  //   password_confirmation: Yup.string()
  //     .oneOf([Yup.ref("password")], "Password do NOT match!")
  //     .required("Please enter confirm password."),
  contact: Yup.number().required('Please enter your phone number.'),
  age: Yup.number()
    .required('Please enter your age')
    .min(18, 'You must be at least 18 years')
    .max(60, 'You must be at most 60 years'),
  height: Yup.number().required('Please enter your height'),
  current_weight: Yup.number().required('Please enter your current weight'),
});
