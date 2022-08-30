import {createPortal} from 'react-dom'
import {useSelector, useDispatch} from 'react-redux'
import HomeButton from '../buttons/HomeButton'
import { LogOut } from '../../store/Reducers/auth/actions'
import {BiUser,BiMobileAlt,BiEnvelope} from 'react-icons/bi'

const UserCard = (props) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const { modal } = useSelector((state) => state.interactions);
  
  if (modal===true) return createPortal(<>
    <div className={` flex flex-col shadow-md items-center gap-4 text-blue-dark z-[1000] text-xl bg-white ${props.style}`}>
     <div className='grid grid-cols-6 gap-4 items-center mb-1'>
      <BiUser className='col-span-1'/>
       <p className='col-span-5 capitalize'><span>{`${user?.firstname} ${user?.surname}`}</span></p>
      <BiEnvelope className='col-span-1'/>
       <p className='col-span-5'>{user?.email}</p>
      <BiMobileAlt className='col-span-1'/>
       <p className='col-span-5'>{user?.phone}</p>
     </div>
     <HomeButton text="Logout" style="mt-0 rounded-md text-xl font-semibold"
     function={()=>{ 
        dispatch(LogOut())
     }}/>
    </div>
     </>,
     document.getElementById("modal"))
}

export default UserCard