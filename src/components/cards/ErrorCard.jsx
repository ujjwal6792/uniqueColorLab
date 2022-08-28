import {createPortal} from 'react-dom'
import {useSelector, useDispatch} from 'react-redux'
import HomeButton from '../buttons/HomeButton'
import { Modal } from '../../store/Reducers/interactions/actions'

const ErrorCard = (props) => {
    const dispatch = useDispatch()
    const { modal } = useSelector((state) => state.interactions);
    
    if (modal===true) return createPortal(<>
      <div className={` flex flex-col shadow-md items-center gap-4 text-blue-dark z-[1000] text-xl absolute top-24 left-1/2 ${props.style}`}>
       <p className='capitalize text-red-600'>{props.error}</p>
       <p>{props.error}</p>
       <HomeButton text="Logout" style="rounded-md text-xl font-semibold text-red-600"
       function={()=>{ 
          dispatch(Modal(false))
       }}/>
      </div>
       </>,
       document.getElementById("modal"))
  }
  

export default ErrorCard