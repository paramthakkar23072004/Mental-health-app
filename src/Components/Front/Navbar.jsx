import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6'>
        <div>
            <ul>
                <li>Logo</li>
            </ul>
        </div>
        <div>
            <ul className='flex'>
                <li className='mr-8'>Home</li>
                <li className='mr-8'>About</li>
                <li className='mr-8'>Detection</li>
                <li className='mr-8'>Log In</li>
                <li className='mr-8'>Sign Up</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar