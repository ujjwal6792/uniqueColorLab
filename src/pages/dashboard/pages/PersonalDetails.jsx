import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldBase from "../../../components/textFields/TextFieldBase";
import HomeButton from "../../../components/buttons/HomeButton";
import ErrorCard from "../../../components/cards/ErrorCard";
import { db } from "../../../../firebase";

const PersonalDetails = () => {
  const { uid, user } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const validate = Yup.object({
    firstname: Yup.string()
      .max(20, "Must be 20 letters or less")
      .required("Required"),
    surname: Yup.string()
      .max(20, "Must be 20 letters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string()
      .min(8, "Must be 8 digits or more")
      .required("Phone number is required"),
  });

  useEffect(()=>{
    setUserDetails( user)
    console.log('run')
    console.log(userDetails)
  },[user])

  const userDetailsUpdate = (values) => {
    console.log(values);
    db.collection("users")
      .doc(uid)
      .update({
        firstname: values?.firstname || "",
        surname: values?.surname || "",
        email: values?.email || "",
        phone: values?.phone || "",
        uid: uid,
      })
      .then(setEdit(false))
      .catch((values) => console.log(values));
  };
  return (
    <>
      <Formik
        initialValues={{
          firstname: user?.firstname,
          surname: user?.surname,
          email: user?.email,
          phone: user?.phone,
        }}
        validationSchema={validate}
        onSubmit={(values) => userDetailsUpdate(values)}
      >
        {(formik) => (
          <div className=" md:pt24 outl ">
            <div className="flex gap-6">
              <h1 className="text-2xl text-blue-dark pb-10 md:pd-20">
                Personal Details
              </h1>
              <p className="mt-2 cursor-pointer" onClick={() => setEdit(!edit)}>
                Edit
              </p>
            </div>
            <Form className="grid grid-cols-2 gap-12 ">
              <TextFieldBase
                style={`min-w-[300px] max-w-[400px] w-[40vw] border-none text-blue-dark text-lg rounded-none drop-shadow pt-6 placeholder:text-white ${
                  edit ? "outline-1 outline-blue-dark" : "bg-slate-100"
                }`}
                placeholder="First Name"
                name="firstname"
                errorStyle="absolute -top-8"
                disable={edit ? "" : "disable"}
                labelstyle={`text-slate-400 text-sm absolute top-2 left-2 z-50${
                  edit ? "" : "text-slate-100"
                }`}
              />

              <TextFieldBase
                style={`min-w-[300px] max-w-[400px] w-[40vw] border-none text-blue-dark text-lg rounded-none drop-shadow pt-6 placeholder:text-white ${
                  edit ? "outline-1 outline-blue-dark" : "bg-slate-100"
                }`}
                placeholder="Last Name"
                name="surname"
                errorStyle="absolute -top-8"
                disable={edit ? "" : "disable"}
                labelstyle={`text-slate-400 text-sm absolute top-2 left-2 z-50${
                  edit ? "" : "text-slate-100"
                }`}
              />

              <TextFieldBase
                style={`min-w-[300px] max-w-[400px] w-[40vw] border-none text-blue-dark text-lg rounded-none drop-shadow pt-6 placeholder:text-white ${
                  edit ? "outline-1 outline-blue-dark" : "bg-slate-100"
                }`}
                placeholder="Email Address"
                type="email"
                name="email"
                errorStyle="absolute -top-8"
                disable={edit ? "" : "disable"}
                labelstyle={`text-slate-400 text-sm absolute top-2 left-2 z-50${
                  edit ? "" : "text-slate-100"
                }`}
              />

              <TextFieldBase
                style={`min-w-[300px] max-w-[400px] w-[40vw] border-none text-blue-dark text-lg rounded-none drop-shadow pt-6 placeholder:text-white ${
                  edit ? "outline-1 outline-blue-dark" : "bg-slate-100"
                }`}
                placeholder="Phone"
                name="phone"
                errorStyle="absolute -top-8"
                disable={edit ? "" : "disable"}
                labelstyle={`text-slate-400 text-sm absolute top-2 left-2 z-50${
                  edit ? "" : "text-slate-100"
                }`}
              />
              <HomeButton
                type="submit"
                text="Change Details"
                style="m-0 md:-mt-1 text-blue-dark"
            />
            </Form>
          </div>
        )}
      </Formik>

      {/* {error===null || <ErrorCard error={error}/>} */}
    </>
  );
};

export default PersonalDetails;
