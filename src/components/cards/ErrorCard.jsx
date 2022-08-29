import {createPortal} from 'react-dom'
import {useSelector, useDispatch} from 'react-redux'
import HomeButton from '../buttons/HomeButton'
import { Error } from '../../store/Reducers/auth/actions'

const ErrorCard = (props) => {
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.auth);
    
     return createPortal(<>
      {console.log(error)}
      <div className={` flex flex-col shadow-md items-center gap-4 p-6 text-blue-dark z-[1000] text-xl absolute top-24 left-[40%] border border-red-600 rounded-md ${props.style}`}>
       <p className='capitalize text-red-600'>{props.error.code}</p>
       <p>{""}</p>
       <HomeButton text="Okay" style="rounded-md text-xl font-semibold text-red-600 border-red-600 hover:bg-red-600 mt-0"
       function={()=>{ 
          dispatch(Error(null))
       }}/>
      </div>
       </>,
       document.getElementById("modal"))
  }
  

export default ErrorCard