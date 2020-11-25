import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context';

function Navbar() {
  //const user = localStorage.getItem('user')
  const { setUser, user } = useContext(UserContext)
  
  return (
    <nav>
      <ul className="list-reset md:flex md:items-center">
        {user?null : <Link to="/login">
          <li className="md:ml-4">
            <a className="block no-underline  group-hover: py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
            LOGIN
          </a>
          </li>
        </Link>}
        {user && 
        <li onClick={()=>{
           localStorage.removeItem('user');
           setUser(null)
        }} className="md:ml-4">
          <a className="block no-underline  group-hover: py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
            LOGOUT
          </a>
        </li>
        }
        {user? null :<Link to="/register">
          <li className="md:ml-4">
             <a className="border-t block no-underline    py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
              REGISTER
             </a>
          </li>
        </Link>}
        {user?<Link to="/my-recipes">
          <li className="md:ml-4">
             <a className="border-t block no-underline  py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
              MY RECIPES
             </a>
          </li>
        </Link>: null}
      </ul>
    </nav>
  )
}

export default Navbar
