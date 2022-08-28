import { Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { RegisterState, RegisterReset } from "../../store/Reducers/auth/actions";
import * as Yup from "yup";
import TextFieldBase from "../../components/textFields/TextFieldBase";
import HomeButton from "../../components/buttons/HomeButton";
import { useNavigate } from "react-router-dom";
import ErrorCard from "../../components/cards/ErrorCard";

const Register = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { isRegistered, error } = useSelector((state) => state.auth);

  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, "Must be 20 letters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 letters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password much match")
      .required("Confirm password is required"),
  });

  return (
    <>
      {isRegistered === true && dispatch(RegisterReset(false))&& Navigate("/login")}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          dispatch(RegisterState(values));
        }}
      >
        {(formik) => (
          <div className=" pt-20 px-6 md:px-8 md:pt24">
            <h1 className="text-5xl text-blue-dark pb-10 md:pd-20">
              {" "}
              Register
            </h1>
            <Form className="flex flex-col gap-4">
              <TextFieldBase
                style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
                placeholder="First Name"
                name="firstName"
                labelstyle="font-semibold -my-2 text-blue-dark"
              />

              <TextFieldBase
                style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
                placeholder="Last Name"
                name="lastName"
                labelstyle="font-semibold -my-2 text-blue-dark"
              />

              <TextFieldBase
                style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
                placeholder="Email Address"
                type="email"
                name="email"
                labelstyle="font-semibold -my-2 text-blue-dark"
              />

              <TextFieldBase
                style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
                placeholder="Password"
                type="password"
                name="password"
                labelstyle="font-semibold -my-2 text-blue-dark"
              />

              <TextFieldBase
                style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                labelstyle="font-semibold -my-2 text-blue-dark"
              />
              <div className="flex gap-4 -mt-2">
                <HomeButton
                  type="submit"
                  text="Register"
                  style="rounded-md text-blue-dark"
                />
                <HomeButton
                  type="reset"
                  text="Reset"
                  style="rounded-md border-red-600 text-red-600 hover:bg-red-600"
                />
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <ErrorCard error={error}/>
    </>
  );
};

export default Register;
