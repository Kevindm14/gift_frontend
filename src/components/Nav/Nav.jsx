import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-5 font-sans text-sm'>
      <h1 className='text-2xl font-extrabold'>LiveGift</h1>

      <ul className='flex space-x-5'>
        <li>
          <Link to='/' className='p-2'>Inicio</Link>
        </li>
        <li>
          <Link to='/'>Acerca</Link>
        </li>
        <li>
          <Link className='rounded-none bg-gray-800 hover:bg-gray-600 text-white py-2 px-7' to='/login'>Entrar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
