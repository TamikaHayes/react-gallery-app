import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        
        <ul className="main-nav">
          <li><Link to="/birds">Birds</Link></li>
          <li><Link to="/whales">Whales</Link></li>
          <li><Link to="/flowers">Flowers</Link></li>
        </ul>
     
    );
}


export default Nav;