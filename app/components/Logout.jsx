'use client'
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/userSlice';

const Logout = () => {
    const dispatch=useDispatch();

    const logoutHandler = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",{},{
          withCredentials:true,
        }
      );
      dispatch(removeUser());
       router.push("/");
      
    } catch (error) {
      return console.log("Error" + error.message);
    }
  };

  return (
     <button className="btn flex justify-end " onClick={()=>logoutHandler}>Logout</button>  )
    }

export default Logout