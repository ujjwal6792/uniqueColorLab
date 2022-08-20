import React from "react";
import { Form, Formik } from "formik";
import TextFieldBase from "../../components/textFields/TextFieldBase";
import HomeButton from "../../components/buttons/HomeButton";

const Register = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
        {formik => (
      <div className=" pt-20 px-6 md:px-8 md:pt24">
        <h1 className="text-5xl text-blue-dark pb-10 md:pd-20"> Register</h1>
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
              <HomeButton type="submit" text="Register" style="rounded-md text-blue-dark"/>
              <HomeButton type="submit" text="Reset" style="rounded-md border-red-500 text-red-500 hover:bg-red-500"/>
          </div>
         </Form>
      </div>
        )}
    </Formik>
  );
};

export default Register;
