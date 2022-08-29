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
    <div className='pt-20 grid grid-cols-12 text-blue-dark'>

    <div className='flex flex-col gap-4 p-4 col-span-3 '>
      <section className="flex gap-4 items-center shadow-md p-2">
        {user?.img===undefined?
        <img className="border rounded-full p-1 w-16" src="https://img.icons8.com/laces/64/000000/user.png" alt="" />
        :
        <img src={user?.img} alt="" /> }
        
        <p className="text-2xl font-semibold">{`Hi, ${user?.firstname}`}</p>
      </section>
      <section className="flex flex-col gap-2 items-center shadow-md py-2">
       <p className="text-xl px-2 pb-2 border-b-2 w-full font-semibold">My Orders</p>
       <p className="text-xl px-2 pb-2 w-full font-semibold">Account Details
       <p className="pl-8 pt-4 pb-2 text-base">Personal Details</p>
       <p className="pl-8 py-2 text-base">Manage Addresses</p>
       <p className="pl-8 py-2 text-base">My Wishlist</p>

       </p>
      </section>
      <section className="flex flex-col gap-2 items-center shadow-md py-2 bg-blue-dark">
      <button onClick={()=> logOut()} className="text-xl text-white font-semibold text-opacity-95">Logout</button>
      </section>
    </div>


    <div className="col-span-9 p-4 h-full ">
      <section className="h-full shadow-md">
        
      </section>
    </div>
    </div>
    : Navigate('/login')
  }
  </>)
}

export default Dashboard