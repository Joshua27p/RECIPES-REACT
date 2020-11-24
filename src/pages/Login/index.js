import React, { useState, useEffect } from 'react'
import authAPI from '../../APIs/authAPI';
import { useHistory } from 'react-router-dom'

const Login = (props) => {
  const history = useHistory();
  const [userName, setUserName ] = useState("");
  const [password, setPassword] = useState("");
  
  const login = async (userName, password) =>{
    try {
      const log = await authAPI.login(userName, password)
      console.log(log.data.user[0]);
      const logStringy = JSON.stringify(log.data.user[0])
      localStorage.setItem('user', logStringy)
      history.push('/')
      props.setUser(logStringy)
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <div className="bg-green-100 h-screen w-screen" >
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-30">
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-bold text-red-400">Time to cook...</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                    <div className="flex flex-col mt-4">
                      <input onChange={e => setUserName(e.target.value)} id="email" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="email" placeholder="Email" />
                            </div>
                      <div className="flex flex-col mt-4">
                        <input onChange={e=>setPassword(e.target.value)} id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" />
                            </div>
                        <div className="flex items-center mt-4">
                          <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label for="remember" className="text-sm text-grey-dark">Remember Me</label>
                            </div>
                          <div className="flex flex-col mt-8">
                            <button onClick={()=> login(userName, password)} type="button" className="bg-black-100 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                              Login
                                </button>
                          </div>
                        </form>
                        <div className="text-center mt-4">
                          <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                            Forgot Your Password?
                            </a>
                        </div>
                      </div>
                    </div>
            </div>
                  <div className="hidden md:block md:w-1/2 rounded-r-lg"  style={{ backgroundImage:"url(https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80)"  }} ></div>
                </div>
              </div>
            </div>


          </div>

  )
}

export default Login;
