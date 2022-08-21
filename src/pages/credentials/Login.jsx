import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch, connect } from "react-redux";
import { LoginState, } from "../../store/Reducers/auth/actions";
import TextFieldBase from "../../components/textFields/TextFieldBase";
import HomeButton from "../../components/buttons/HomeButton";

const Login = () => {
  const {uid, isLoggedIn}  = useSelector((state) => state.auth);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (<>
  {isLoggedIn === true && Navigate("/dashboard")}
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        dispatch(LoginState(values))
      }}
    >
      <div className="pt-20 px-6 md:px-8 md:pt24">
        <h1 className="text-5xl text-blue-dark pb-10 md:pd-20"> Login</h1>
        <Form className="flex flex-col gap-4">
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
          <p onClick={()=>Navigate("/change_password")} className="text-blue-dark -mb-4 cursor-pointer">forgot your password?</p>
          <div className="flex gap-4 -mt-2">
            <HomeButton
              type="submit"
              text="Login"
              style="rounded-md text-blue-dark"
            />
            <HomeButton
              function={() => Navigate("/register")}
              text="register"
              style="rounded-md"
            />
          </div>
        </Form>
      </div>
    </Formik>
    </>);
};

export default Login;
