import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav>
      <ul className="list-reset md:flex md:items-center">
        <Link to="/signup">
          <li className="md:ml-4">
            <a className="block no-underline  group-hover: py-2 text-red-300 font-bold hover:text-red-500 md:border-none md:p-0" href="/#">
              SIGN IN
          </a>
          </li>
        </Link>
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
