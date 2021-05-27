import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => { 
    return (
        
        <ul className="main-nav">
          <li><NavLink to="/birds" >Birds</NavLink></li>
          <li><NavLink to="/whales">Whales</NavLink></li>
          <li><NavLink to="/flowers">Flowers</NavLink></li>
        </ul>
    );
}


export default Nav;