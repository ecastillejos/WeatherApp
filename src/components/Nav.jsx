import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {NavLink} from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div className='All'>
      <NavLink to='/'>
      <img alt='' id= 'logoHenry' src= {Logo}/>
      </NavLink>
      <nav>
      <NavLink to='/' exact activeClassname='active'> 
        <div className='home'>
        <span className='emojiHome'>&#127782;</span>
        ¿Buscamos? 
        </div>
      </NavLink>
      <NavLink to='/about' activeClassname='active'>
        <div className='about'>
        <span className='emojiAbout'>&#128640;</span>
        ¡Conoce más!
        </div>
       </NavLink>
      </nav>
        {/* <div className='Bar'>
        <SearchBar onSearch={onSearch}/>
      </div> */}
    </div>
  );
};

export default Nav;
