import React, {lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Header from "./components/header"
import Footer from "./components/footer"
import Contact from './pages/contact';
import About from './pages/About';
import Login from './pages/credentials/Login';
import Register from './pages/credentials/Register';
import PasswordRecovery from './pages/credentials/PasswordRecovery';


const Dashboard = lazy(()=> import("./pages/dashboard"))


function App() {

  return (<>
    <Header/>
   <Routes>
   <Route path="/change_password" element={<PasswordRecovery/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
   <Footer/>
   </>)
}

export default App