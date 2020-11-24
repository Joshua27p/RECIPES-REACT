import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RecipeDetail from './pages/RecipeDetails';


function App() {
  const [user, setUser] = useState(localStorage.getItem('user'))

  return (
    <div className='md:container md:mx-auto'>
      <Router>
        <Header user={user} setUser={setUser}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact >
            <Login setUser={setUser} />
          </Route>
          {/* para que encapsule los ID y no se tenga que crear una página por cada recipe, se utilizan los ":" */}
          <Route path='/recipe-detail/:id' exact component={RecipeDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
