import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MyRecipes from './pages/myRecipes'
import RecipeDetail from './pages/RecipeDetails';
import { UserContext } from './context'
import { SearchContext } from './context'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [valueSearch, setValueSearch] =  useState("")

  return (
    <UserContext.Provider value={{ user, setUser }} >
     <SearchContext.Provider value={{ valueSearch, setValueSearch }} >
      <div className='md:container md:mx-auto'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            {/* para que encapsule los ID y no se tenga que crear una página por cada recipe, se utilizan los ":" */}
            <Route path='/recipe-detail/:id' exact component={RecipeDetail} />
            <Route path='/my-recipes' exaact component={MyRecipes} />
          </Switch>
        </Router>
      </div>
    </SearchContext.Provider>
    </UserContext.Provider>
    
  )
}

export default App;
