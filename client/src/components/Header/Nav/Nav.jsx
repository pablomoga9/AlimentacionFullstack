import React from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { checkUserContext } from '../../../context/checkUserContext'
function Nav() {
  const { userCheck, setUserCheck } = useContext(checkUserContext);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked)
  }

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
      {userCheck === null ? <div>
        <Link onClick={handleClick} to="/">Login</Link>
        <Link onClick={handleClick} to="/signup">Registro</Link>
      </div> : <div>
        <Link to={'User/Profile'}><p>{userCheck}</p></Link>
        <Link onClick={handleLogout}>Logout</Link>
      </div>}
    </header>
  )
}

export default Nav