import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { shopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const[menu,setMenu]=useState()
  const {getTotalCartItems}=useContext(shopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>STYLE<span style={{color: '#ff4141'}}>ON</span></p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
             <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

    </div>
  )
} 
