import '../../App.css';

import { NavLink } from 'react-router-dom';

import DarkMode from '../darkMode/DarkMode';

import MenuItems from './offCanva.jsx';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import SearchBar from './searchBar.jsx'

import logo from '/vite.svg'
import { useState } from 'react';


function Header() {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    return (

        <header className='p-2 dark:bg-[#1f2024]  bg-slate-50 flex items-center'>

            <nav className='flex w-full justify-between items-center gap-3 dark:text-slate-200'>

                <NavLink className={'uppercase font-bold dark:text-slate-200 text-black'} to="/">
                    <div className='flex items-center'>
                    <img src={logo} to='/' alt="" />
                        <span className='hidden lg:flex' >CineStream</span>
                    </div>   
                </NavLink>

                <ul className='hidden lg:flex gap-5'>

                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to="details" >
                        Details
                    </NavLink>
                    
                </ul>
            
                <MenuItems openMenu={openMenu} open={open} />
                

                <div className='flex align-middle gap-2'>
                    <DarkMode />
                    <SearchBar />
                    <div className=' lg:hidden hover:rounded-full dark:hover:bg-slate-700  hover:bg-slate-200'>
                        <Bars3BottomRightIcon 
                            className='h-8 text-black hover:rounded-lg dark:text-slate-200 '  
                            onClick={openMenu}/>
                    </div>
                    
                </div>
                
            </nav>
         
            
            

        </header>

    )
}


export default Header