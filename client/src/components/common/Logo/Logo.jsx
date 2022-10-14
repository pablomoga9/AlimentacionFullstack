import React from "react";
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div>
      <Link to={"/"}><img style={{ width: "200px" }} src="https://cdn.pixabay.com/photo/2016/12/17/18/12/logo-1914020_1280.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
