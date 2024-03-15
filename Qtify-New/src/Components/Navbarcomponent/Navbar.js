import React from 'react';
import "./Navbar.css";
import Search from '../Searchcomponent/Search';
import Button from '../Buttoncomponent/Button';
import Logo from '../../Images/Logo';
import HeroImage from '../HeroImage/HeroImage';
// import Logo from '../Navbarcomponent/Navbar.js';

const Navbar = () => {
  return (
    <div className="backgroundcolor">
      
    
    <div className="logo">
      <Logo/></div>
      <Search />
      <Button />

    </div>
  )
}

export default Navbar;