import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { checkUserContext } from '../../../context/checkUserContext';
import BackLogo from '../../../assets/img/Back @2x.png';
import BurgerBtn from '../../../assets/img/menu@2x.png';
import SideBar from "./sidebar";
import { useLocation } from 'react-router-dom';
import Logo from '../../common/Logo';

function Nav() {
  const { userCheck, setUserCheck } = useContext(checkUserContext);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const {showNav,setShowNav} = useContext(checkUserContext);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname==="/"||location.pathname.includes("/stores/details/")||location.pathname.includes("/restaurants/details/")||location.pathname.includes("/user/profile/")){
      setShowNav(false);
    }
    else{
      setShowNav(true);
    }
   
    
  },[showNav])

  const handleClick = () => {
    setClicked(!clicked)
  }
  console.log(showNav)
  const handleLogout = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/logout', { withCredentials: true });
      await setUserCheck(null);
      navigate("/")
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <header>
      {showNav===true?<div>{userCheck === null? <div className='navContainer'>
       {/* <div className='navUser'>
        <Link onClick={handleClick} to="/">Login</Link>
        <Link onClick={handleClick} to="/signup">Registro</Link>
       </div> */}
        <Logo className='logoHeader'/>
      </div> : <div className='navContainer'>
        {/* <div className='navUser'>
          <Link to={'User/Profile'}><p>{userCheck}</p></Link>
          <Link onClick={handleLogout}>Logout</Link>
        </div> */}
        <Logo className='logoHeader'/>
      </div>}</div>:null}
    </header>
  )
}

export default Nav