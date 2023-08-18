
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'


function SearchBar() {
    return (
        <>
         
            <button type="button"
                    className="hidden gap-2 w-full lg:flex cursor-auto items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-sky-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 0  ">
                <MagnifyingGlassIcon className='h-6' />
            </button>
           

        </>
    )
}

export default SearchBar