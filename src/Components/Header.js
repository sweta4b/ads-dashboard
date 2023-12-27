import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className=' w-full border-b  bg-white h-[80px]  '>
            <div className='md:max-w-[1480px] max-w-[600px]   m-auto w-full h-full flex justify-between items-center md:px-4 px-8'>
                <NavLink to="/" className='text-blue-950 text-2xl font-semibold cursor-pointer '>APP LOGO</NavLink>

                <div className='hidden md:block'>
                    <NavLink to="/" className=' hover:border-slate-800 px-8 py-3  font-semibold text-gray-600'>DASHBOARD</NavLink>
                    <NavLink to="/ads" className=' hover:border-slate-800 px-8 py-3  font-semibold text-gray-600'>CREATE ADS</NavLink>
                </div>
                <div className='md:hidden '>
                    <button className="btn" onClick={() => setShowMenu(!showMenu)}><i className={showMenu ? "fa fa-close" : "fa fa-bars"}></i></button>
                </div>
            </div>
            <div className={showMenu ? "absolute z-10  p-4 h-full backdrop-blur-xl w-full px-8 md:hidden" : "hidden"}>
                <ul className='flex flex-col justify-center gap-4 items-center '>
                    <NavLink to="/" onClick={() => setShowMenu(!showMenu)} className='border  border-slate-400 hover:border-slate-800 px-8 py-3 rounded-md font-semibold text-gray-600'>DASHBOARD</NavLink>
                    <NavLink to="/ads" onClick={() => setShowMenu(!showMenu)} className='border  border-slate-400 hover:border-slate-800 px-8 py-3 rounded-md font-semibold text-gray-600'>CREATE ADS</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header