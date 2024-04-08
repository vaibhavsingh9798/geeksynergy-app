
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user,setUser] = useState({name:'',password:''})
  const [error,setError] = useState('')
  


   let navigate = useNavigate()

const handleChange = (e) =>{
    setError('')
    setUser({...user,[e.target.name]:e.target.value})
}

  const handleSubmit = async (e) => {
    e.preventDefault();
     if(user.name && user.password){
       let savedUser =  JSON.parse(localStorage.getItem('user'))
       if((savedUser.name === user.name) && (savedUser.password === user.password)){
        localStorage.setItem('isLogin','true')
        navigate('/movies')
       }else{
        setError('Invalid username or password.')
       }
     
     }else{
         setError('Invalid credentials.')
     }
     setUser({name:'',phoneNumber:'',email:'',password:''})
  
}

const handleSignup = (e) =>{
    e.preventDefault();
    navigate('/signup')
}
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <form className="bg-zinc-50 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h2>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            required
            onChange={handleChange}
          />
        </div>
     
        
        <div className="flex flex-col items-center justify-center">
          <button
            className={` ${user.password.length <=3 ? 'bg-indigo-300' : 'bg-indigo-700'}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
            type="submit"
          > Log in  </button>
        </div>
        <div className='mt-4'>
      
     <p  className='text-slate-400'>Don't have an account? <button className="text-blue-500" onClick={handleSignup}>Sign up </button></p>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;