import {createPortal} from 'react-dom'
import {useSelector, useDispatch} from 'react-redux'
import HomeButton from '../buttons/HomeButton'
import { LogOut } from '../../store/Reducers/auth/actions'

const UserCard = (props) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const { modal } = useSelector((state) => state.interactions);
  
  if (modal===true) return createPortal(<>
    <div className={` flex flex-col shadow-md items-center gap-4 text-blue-dark z-[1000] text-xl ${props.style}`}>
     <p className='capitalize'><span>{`${user?.firstname} ${user?.surname}`}</span></p>
     <p>{user?.email}</p>
     <HomeButton text="Logout" style="rounded-md text-xl font-semibold"
     function={()=>{ 
        dispatch(LogOut())
        
     }}/>
    </div>
     {console.log(user)}
     </>,
     document.getElementById("modal"))
}

export default UserCard