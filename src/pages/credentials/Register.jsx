import React from "react";
import { Form, Formik } from "formik";
import TextFieldBase from "../../components/textFields/TextFieldBase";

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
      <div className=" pt-20 px-6 md:px-8 md:pt24">
        <h1 className="text-5xl text-blue-dark pb-10 md:pd-20"> Register</h1>
        <Form className="flex flex-col gap-4">
          <label htmlFor="firstName" className="font-semibold -my-2 text-blue-dark">First Name</label>
          <TextFieldBase
            style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
            placeholder="First Name"
            id="firstName"
          />
          <label htmlFor="lastName" className="font-semibold -my-2 text-blue-dark">Last Name</label>
          <TextFieldBase
            style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
            placeholder="Last Name"
            id="lastName"
          />
          <label htmlFor="email" className="font-semibold -my-2 text-blue-dark">Email</label>
          <TextFieldBase
            style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
            placeholder="Email Address"
            type="email"
            id="email"
          />
          <label htmlFor="password" className="font-semibold -my-2 text-blue-dark">Password</label>
          <TextFieldBase
            style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
            placeholder="Password"
            type="password"
            id="password"
          />
          <label htmlFor="confirmPassword" className="font-semibold -my-2 text-blue-dark">Confirm Password</label>
          <TextFieldBase
            style="min-w-[300px] max-w-[400px] w-[40vw] text-blue-dark"
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
          />
        </Form>
      </div>
    </Formik>
  );
};

export default Register;
