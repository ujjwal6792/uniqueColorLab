import React, {lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"

const Dashboard = lazy(()=> import("./pages/dashboard"))
const Home = lazy(()=> import("./pages/home"))
const About = lazy(()=> import("./pages/About"))
const Login = lazy(()=> import("./pages/credentials/Login"))
const Register = lazy(()=> import("./pages/credentials/Register"))
const PasswordRecovery = lazy(()=> import("./pages/credentials/PasswordRecovery"))
const Contact = lazy(()=> import("./pages/contact"))

function App() {

  return (<>
    <Header/>
    <React.Suspense fallback={<>...loading</>}>
   <Routes>
   <Route path="/change_password" element={<PasswordRecovery/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </React.Suspense>
   <Footer/>
   </>)
}

export default App