import React, {lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Header from "./components/header"
import Footer from "./components/footer"
import Contact from './pages/contact';
import About from './pages/About';


const Dashboard = lazy(()=> import("./pages/dashboard"))


function App() {

  return (<>
    <Header/>
   <Routes>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
   <Footer/>
   </>)
}

export default App