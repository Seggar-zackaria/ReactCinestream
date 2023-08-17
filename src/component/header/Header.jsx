import '../../App.css';

import { NavLink } from 'react-router-dom';



import MenuItems from './offCanva.jsx';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import SearchBar from './searchBar.jsx'

import logo from '/vite.svg'
import { useState } from 'react';


function DarkMode() {
    return null;
}

function Header() {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    return (

        <header className=' w-full mx-auto p-3 dark:bg-[#1f2024]  bg-slate-50 flex justify-between items-center ' >

            <div className='flex items-center'>
                <img src={logo} to='/' alt="" />
                <NavLink className={'uppercase font-bold dark:text-slate-200 text-black'} to="/">CineStream</NavLink>
            </div>

            <nav className=' justify-between flex items-center gap-6 dark:text-slate-200'>

                <div className='absolute right-6 top-3 lg:hidden hover:rounded-full p-1 dark:hover:bg-slate-700  hover:bg-slate-200'>
                    <Bars3BottomRightIcon className='h-8 text-black hover:rounded-xl dark:text-slate-200 '  onClick={openMenu}/>
                </div>

                <ul className='hidden lg:flex  gap-7'>

                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to="details" >
                        Details
                    </NavLink>

                </ul>
                <SearchBar />
                <DarkMode />
            </nav>

            <MenuItems openMenu={openMenu} open={open} />
        </header>

    )
}


export default Header