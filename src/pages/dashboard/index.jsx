import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { LoginState } from "../../store/Reducers/auth/actions";


const Dashboard = () => {
  const {uid, isLoggedIn}  = useSelector((state) => state.auth);
  return (
    <div className=' pt-20'>Dashboard</div>
  )
}

export default Dashboard