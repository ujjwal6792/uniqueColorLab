import React, {lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"
import PageTransition from './components/loader/PageTransition';
import ScrollToTop from "./utils/ScrollToTop"
const Dashboard = lazy(()=> import("./pages/dashboard"))
const Home = lazy(()=> import("./pages/home"))
const About = lazy(()=> import("./pages/About"))
const Login = lazy(()=> import("./pages/credentials/Login"))
const Register = lazy(()=> import("./pages/credentials/Register"))
const PasswordReset = lazy(()=> import("./pages/credentials/PasswordReset"))
const Contact = lazy(()=> import("./pages/contact"))
const Cart = lazy(()=> import("./pages/cart"))


function App() {

  return (<>
    <Header/>
    <ScrollToTop/>
    <React.Suspense fallback={<PageTransition/>}>
   <Routes>
   <Route path="/products" element={<div className='pt-20'>coming</div>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
   <Route path="/change_password" element={<PasswordReset/>}/>
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