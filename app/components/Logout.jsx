'use client'
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/userSlice';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const Logout = () => {
    const dispatch=useDispatch();
    const router=useRouter();

    const logoutHandler = async () => {
      console.log("inside logout")
    try {
      const res = await axios.post(
        BASE_URL + "/logout",{},{
          withCredentials:true,
        }
      );
      console.log("res",res)
      dispatch(removeUser());
       router.push("/");
      
    } catch (error) {
      console.log("error",error)
      return console.log("Error" + error.message);
    }
  };

  return (
     <button className="btn flex justify-end " onClick={()=>logoutHandler()}>Logout</button>  )
    }

export default Logout