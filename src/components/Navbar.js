import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="bg-yellow-300 flex justify-between item-center h-16 bg-white text-black relative shadow-md font-mono pt-10 pb-14" role="navigation">
            <Link to='/' className="pl-8 text-2xl font-bold ml-8">
            MERN Stack BLOG
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>

            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/About">About</Link>
                <Link className="p-4" to="/Contact">Contact</Link>
            </div>


        </nav>

    )
}

export default Navbar
