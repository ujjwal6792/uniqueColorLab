import {useState} from 'react'
import { useSelector } from "react-redux";

const PersonalDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false)

  return (
    <div className='text-blue-dark'>
        <div className='flex gap-6'>
            <h1 className='text-2xl'>Personal Details</h1>
            <p className='mt-auto cursor-pointer' onClick={()=>setEdit(!edit)}>Edit</p>
        </div>
    <section className='w-full mt-8 p-2 capitalize grid grid-cols-4 gap-8'>
        <div className='relative col-span-2'>
            <input type="text" value={user?.firstname} disabled={edit?"":"disabled"}
            className={`p-2 pt-6 text-lg w-full outline-none border ${edit?"": "bg-slate-100"} `}/>
            <p className={`absolute top-1 left-2 text-sm filter contrast-75
            ${edit?"": "hidden"}`}> First Name</p>
        </div>
        <div className='relative col-span-2'>
            <input type="text" value={user?.surname} disabled={edit?"":"disabled"}
            className={`p-2 pt-6 text-lg w-full outline-none border ${edit?"": "bg-slate-100"} `}/>
            <p className={`absolute top-1 left-2 text-sm filter contrast-75
            ${edit?"": "hidden"}`}> Last Name</p>
        </div>
        <div className='relative col-span-2'>
            <input type="text" value={user?.email} disabled={edit?"":"disabled"}
            className={`p-2 pt-6 text-lg w-full outline-none border ${edit?"": "bg-slate-100"} `}/>
            <p className={`absolute top-1 left-2 text-sm filter contrast-75
            ${edit?"": "hidden"}`}> Email Address</p>
        </div>
        <div className='relative col-span-2'>
            <input type="text" value={user?.phone} disabled={edit?"":"disabled"}
            className={`p-2 pt-6 text-lg w-full outline-none border ${edit?"": "bg-slate-100"} `}/>
            <p className={`absolute top-1 left-2 text-sm filter contrast-75
            ${edit?"": "hidden"}`}> Phone</p>
        </div>
    </section>
    
    </div>
  )
}

export default PersonalDetails