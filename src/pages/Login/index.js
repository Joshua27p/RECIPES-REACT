import React, { useState, useContext } from 'react';
import authAPI from '../../APIs/authAPI';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context';

const Login = () => {

  const history = useHistory();
  const [userName, setUserName ] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const login = async (userName, password) =>{
    try {
      if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userName) && password.length >= 6){

        const log = await authAPI.login(userName, password)
       console.log(log.data.user[0]);
       const logStringy = JSON.stringify(log.data.user[0])
       localStorage.setItem('user', logStringy)
       history.push('/')
       setUser(logStringy)

      }else{
        alert("Email or Pasword invalid")
      }
    } catch (error) {
      console.log(error);
      alert("Usuario no existe")
    }
  }

  return (
    <div>
      <div className="h-screen w-screen" >
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-gray-700 sm:mx-0 h-30">
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-bold text-white">Time to cook...</h1>
                  <div className="w-full mt-4">
                <form  className="form-horizontal w-3/4 mx-auto" >
                   <div className="flex flex-col mt-4">
                  <input
                  // funcion que captura username
                    onChange={e => setUserName(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="flex-grow h-8 px-2 border rounded border-grey-400"
                    />
                    </div>
                    <div className="flex flex-col mt-4">
                  <input
                      //funcion que captura password
                    onChange={e=>setPassword(e.target.value)}
                    name="password"
                    type="password"
                    className="flex-grow h-8 px-2 rounded border border-grey-400"
                    placeholder="Password"
                    />
                      </div>
                      {/* <div className="flex items-center mt-4">
                          <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="mr-2"
                          />
                          <label for="remember" className="text-sm text-white">Remember Me</label>
                        </div> */}
                          <div className="flex flex-col mt-8">
                      <button
                      onClick={()=> login(userName, password)}
                      type="button"
                      className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"> Login
                      </button>
                          </div>
                        </form>
                        {/* <div className="text-center mt-4">
                          <a className="no-underline hover:underline text-white text-xs" href="{{ route('password.request') }}">
                            Forgot Your Password?
                            </a>
                        </div> */}
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
