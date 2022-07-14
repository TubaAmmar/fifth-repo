import React from 'react'
import { Link } from 'react-router-dom';
import './Nav2.css';

function Nav2() {
  return (
   <div>
    <div  className="header2">
    <div className="container">
        <ul className='nav2' >
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/product'}>Products</Link></li>
        <li><Link to={'/newarrival'}>New Arrival</Link></li>
        <li><Link to={'/flashdeals'}>Flash Deals</Link></li>
        <li><Link to={'/brands'}>Brands</Link></li>
        <li><Link to={'/makeup'}>Makeup</Link></li>
        <li><Link to={'skincare'}>Skin Care</Link></li>
        <li><Link to={'/haircare'}>Hair Care</Link></li>
        <li><Link to={'/bags'}>Bags</Link></li>
        <li><Link to={'/perfumes'}>Perfumes</Link></li>
        <li><Link to={'/watches'}>Watches</Link></li>
        <li><Link to={'/logout'}>Logout</Link></li>
        </ul>
    </div>
</div>
</div>
  )
}

export default Nav2