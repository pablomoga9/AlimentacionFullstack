import React from "react";
import { Link } from 'react-router-dom';
import LogoCircle from '../../../assets/img/logoC.png'

const Logo = () => {
  return (
    <div>
      <Link to={"/home"}><div className="logoHeader"><h1 className="logoTextHeader">K'm<img className="logoImgHeader" src={LogoCircle}></img>n</h1></div>
      </Link>
    </div>
  );
};

export default Logo;
