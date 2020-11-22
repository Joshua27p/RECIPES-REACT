import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RecipeDetail from './pages/RecipeDetails';


function App() {
  return (
    <div className='md:container md:mx-auto'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          {/* para que encapsule los ID y no se tenga que crear una página por cada recipe, se utilizan los ":('el string que quieras')" */}
          <Route path='/recipe-detail/:id' exact component={RecipeDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
