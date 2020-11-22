import React from 'react'

const Register = () => {
  return (
    <div>
    <div class="bg-green-100 h-screen w-screen ">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-30">
          <div class="flex flex-col w-full md:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="text-4xl text-center font-bold text-red-400">Registration</h1>
              <div class="w-full mt-4">
                <form class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                      </form>
                      <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account </button>
                    </div>
                  </div>
          </div>
                <div class="hidden md:block md:w-1/2 rounded-r-lg"  style={{ backgroundImage:"url(https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=430&q=80)"  }} ></div>
              </div>
            </div>
          </div>


        </div>
  )
}

export default Register
