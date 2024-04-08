
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user,setUser] = useState({name:'',phoneNumber:'',email:'',password:''})
  const [error,setError] = useState('')
  


   let navigate = useNavigate()

const handleChange = (e) =>{
    setError('')
    setUser({...user,[e.target.name]:e.target.value.trim()})
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`singup`,JSON.stringify(user))
     if(user.name && user.password){
        localStorage.setItem('user',JSON.stringify({name:user.name,password:user.password})) 
        navigate('/login')
     }else{
         setError('Please check credentials and try again.')
     }
     setUser({name:'',phoneNumber:'',email:'',password:''})
  
}

const handleLogin = (e) =>{
    e.preventDefault();
    navigate('/login')
}
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <form className="bg-zinc-50 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sing Up</h2>


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
            minLength={2}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={user.phoneNumber}
            minLength={10}
            maxLength={10}
            onChange={handleChange}
            required
          />
        </div>


      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
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
            minLength={4}
            onChange={handleChange}
          />
        </div>
     
        
        <div className="flex flex-col items-center justify-center">
          <button
            className={` ${user.password.length <= 3 ? 'bg-indigo-300' : 'bg-indigo-700'}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}            type="submit"
          > Sing up  </button>
        </div>
        <div className='mt-4'>
      
     <p  className='text-slate-400'>Have an account? <button className="text-blue-500" onClick={handleLogin}>Log in </button></p>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;