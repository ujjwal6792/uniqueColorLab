import {useState,useEffect} from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup"
import TextFieldBase from "../../components/textFields/TextFieldBase";
import HomeButton from "../../components/buttons/HomeButton";

const PasswordRecovery = () => {
    const [formValues, setFormValues] = useState()

    const validate = Yup.object({
        email:  Yup.string().email( "Email is invalid").required("Email is required"),
        password:  Yup.string().min(8, "Must be 8 characters or more").required("Password is required"),
        confirmPassword:  Yup.string().oneOf([Yup.ref("password"), null], "Password much match").required("Confirm password is required"), 
    })

  return  <Formik
  initialValues={{
    email: "",
    password: "",
    confirmPassword: "",
  }}
  validationSchema={validate}
  onSubmit = {values => {setFormValues(values)}}
>
    {formik => (
  <div className=" pt-20 px-6 md:px-8 md:pt24">
    <h1 className="text-5xl text-blue-dark pb-10 md:pd-20"> Change Password</h1>
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

      <TextFieldBase
        style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
        labelstyle="font-semibold -my-2 text-blue-dark"
      />
      <div className="flex gap-4 -mt-2">
          <HomeButton type="submit" text="Register" style="rounded-md text-blue-dark"/>
          <HomeButton type="reset" text="Reset" style="rounded-md border-red-600 text-red-600 hover:bg-red-600"/>
      </div>
     </Form>
  </div>
    )}
</Formik>
};

export default PasswordRecovery;
