import React from 'react';
// utilizamos Link para que al momento de hacer click en nuestros a nos redireccionen, ya sea en home/login/register/myrecipes
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Header() {

  return (
    <div className="sticky top-0 bg-white">
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        <Link to="/">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-4xl">
              <a className="no-underline text-red-300 font-bold hover:text-red-500 font-bold" href="/#">
                Peruvian Cuisine Recipes
              </a>
            </h1>
            {/* <a className="text-black hover:text-orange md:hidden" href="#">
                <i className="fa fa-2x fa-bars"></i>
              </a> */}
          </div>
        </Link>
        <form className="mb-4 w-full md:mb-0 md:w-1/4">
          <label className="hidden" for="search-form">Search</label>
          <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search Recipe" type="text" />
          <button className="hidden">Submit</button>
        </form>
        <Navbar/>
      </header>
    </div>
  )
}

export default Header

