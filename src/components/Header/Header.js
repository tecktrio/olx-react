import React, { useContext,createContext } from 'react';
import { Navigate,NavLink } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';

import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import authContext from '../../Authcontext';
function Header() {

  const username = useContext(authContext)
  const nav = Navigate
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <NavLink to='/'>
           <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        </NavLink>
       
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <NavLink to='/login' className='link'>
           <div className="loginPage">
          <span>{username.email}</span>
          <hr />
        </div>
        </NavLink>
       
<NavLink to='/create'>
   <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
</NavLink>
       
      </div>
    </div>
  );
}

export default Header;
