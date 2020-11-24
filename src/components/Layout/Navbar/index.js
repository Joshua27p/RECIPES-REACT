// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  //const user = localStorage.getItem('user')
  console.log('props.user', props.user);
  return (
    <nav>
      <ul className="list-reset md:flex md:items-center">
        {props.user?null : <Link to="/login">
          <li className="md:ml-4">
            <a className="block no-underline  group-hover: py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
            LOGIN
          </a>
          </li>
        </Link>}
        {props.user && 
        <li onClick={()=>{
           localStorage.removeItem('user');
           props.setUser(null)
        }} className="md:ml-4">
          <a className="block no-underline  group-hover: py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
            LOGOUT
          </a>
        </li>
        }
        <Link to="/register">
          <li className="md:ml-4">
             <a className="border-t block no-underline    py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
              REGISTER
             </a>
          </li>
        </Link>
        <Link>
          <li className="md:ml-4">
             <a className="border-t block no-underline  py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
              MY RECIPES
             </a>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
