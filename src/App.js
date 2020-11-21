import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Signup from './pages/Signup';


function App() {
  return (
    <div className='md:container md:mx-auto'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' exact component={Register} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
