import React from 'react'
import {useSelector} from 'react-redux'

const UserCard = (props) => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
 
  return (<>
    { isLoggedIn==true? 
    <div className={`w-[320px] flex flex-col absolute shadow-md border border-blue-dark top-24 right-11 ${props.style}`}>
     <p> Name: <span>{`${user.firstname} ${user.lastname}`}</span></p>
    </div>
     :""}
     {console.log('help me')}
     </>)
}

export default UserCard