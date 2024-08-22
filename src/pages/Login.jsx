import React from 'react'

const Login = () => {
  return (
    <div className=' bg-white rounded-lg shadow-md p-6 mx-auto lg:w-[450px] w-full  my-4 border border-gray'>
    
    <h3 className='font-bold text-xl mb-4 text-center'>Log In</h3>
    <form>


      <div className='mb-4'>
      <label className='block text-gray-700 mb-2'>Email ID</label>
      <input type='email' 
      className='w-full p-2 border border-gray-300 rounded outline-none'
      placeholder='Enter your email Id' />

      </div>


      <div className='mb-4'>
      <label className='block text-gray-700 mb-2'>Password</label>
      <input type='text' 
      className='w-full p-2 border border-gray-300 rounded outline-none'
      placeholder='Enter your password' />

      </div>
      
      <button type='submit' className='  ml-24 w-[200px] py-2 px-4 primary-btn text-white rounded '>Log In</button>
    </form>

    </div>
  )
}

export default Login;