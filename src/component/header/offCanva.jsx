
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';


import {XMarkIcon} from '@heroicons/react/24/solid'
import DarkMode from "../darkMode/DarkMode.jsx";



const MenuItems =({openMenu, open}) => {


    return (

        <div>
            <ul className={open ? 'flex-col flex text-2xl z-50 dark:text-white  px-2 absolute right-0 transition-all duration-100 ease-in-out inset-0 lg:hidden justify-center gap-3 bg-white text-neutral-500 dark:bg-neutral-800 backdrop-blur-xl ' : 'hidden'}>
                <XMarkIcon
                    className='h-8 w-8 dark:text-white text-black absolute top-10'
                    onClick={openMenu} />

                <NavLink to='/' className={'border-b-[1px] hover:text-sky-600'}>
                    Home
                </NavLink>

                <Link to="details" className={'border-b-[1px] hover:text-sky-600'}>
                    Details
                </Link>
                <div className={'flex justify-between'}>
                    <DarkMode  />
                </div>
            </ul>
        </div>

    )
}

MenuItems.propTypes = {
    openMenu: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

MenuItems.defaultProps = {
    openMenu: () =>  {},
    open: false,
};


export default MenuItems