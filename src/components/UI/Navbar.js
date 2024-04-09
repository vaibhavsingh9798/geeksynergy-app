import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () =>{

    const [isLogin,setIsLogin] = useState(false)

   const navigate = useNavigate()

    const handleAuth = async (e) =>{ 
        e.preventDefault();
       if(isLogin){
            localStorage.setItem('isLogin','false')
            setIsLogin(false)
            navigate('/login')
       }else{
        navigate('/login')
       }
    }

    useEffect(()=>{
        const login = localStorage.getItem('isLogin')

        if(login === 'true'){
            setIsLogin(true)
        }
    },[])

    return(
        <div class="bg-gray-700 text-gray-300 p-4"> 
    <div class="container mx-auto flex justify-between items-center">
        <div>
    {isLogin &&   <NavLink to='/movies'>Movies</NavLink> }
        </div>
        <div>
    {isLogin &&   <NavLink to='/about'> Company Info </NavLink> }
        </div>
   
  

        <div class="mr-9">
          <NavLink><button onClick={handleAuth}>{isLogin ? 'Logout': 'Login'}</button></NavLink>
        </div>

    </div>

        </div>
    )
}

export default Navbar;