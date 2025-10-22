import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header className='bg-lime-500'>
        <div className='container py-15 flex justify-between mx-auto'>
            <h1 className='text-xl'>ProductCatalog</h1>
            <ul className='flex  justify-between text-white'>
                <Link to='/register' className='header-link'>Register</Link>
                <Link to='login' className='header-link'>Login</Link>
                <Link to='/products' className='header-link'>Products</Link>
            </ul>
        </div>
    </header>
  )
}
