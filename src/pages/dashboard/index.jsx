import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../../store/Reducers/auth/actions";


const Dashboard = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {uid, user, isLoggedIn}  = useSelector((state) => state.auth);

  const logOut = ()=>{
   dispatch(LogOut()) 
  } 
  return ( <>
    { isLoggedIn===true?
    <div className=' pt-20'>
      <p>{(user?.firstname)}</p>
    <button onClick={()=> logOut()}
    className="rounded-md border-red-600 text-red-600 hover:bg-red-600 mt-8 text-lg border h-min w-max py-2 px-4 hover:text-white hover:transition-opacity shadow-md">logout</button>
    </div>
    : Navigate('/login')
  }
  </>)
}

export default Dashboard