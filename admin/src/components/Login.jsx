import axios from 'axios'
import { useState } from 'react';
import { backendURL } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {

    try {

      e.preventDefault();
      console.log(email,password)
      const response = await axios.post(backendURL + '/api/user/admin',{email, password})        
       console.log(response);
      if(response.data.success){
            setToken(response.data.token)
            console.log("Login successful");
        }
        else{
          console.log("Login error");
          toast.error(response.data.message)
        }
      
      } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    
  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white showdow-md rounded-lg px-8 py-6 max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
          <form onSubmit={onSubmitHandler}> 
            <div className='mb-3 min-w-72'>
              <p className='text-sm font-medium texy-gray-700 mb-2'>Email Address</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='Your email' required/>
            </div>
            <div className='mb-3 min-w-72'>
              <p className='text-sm font-medium texy-gray-700 mb-2'>Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter Your password' required/>
            </div>
            <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'> Login </button>
          </form>
        </div>
    </div>
  )
}

export default Login