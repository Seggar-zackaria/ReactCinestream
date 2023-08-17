import {Link} from "react-router-dom";

function Button() {
    return (
        <>
            <Link to='details'>
                <button className='px-4 my-3 rounded-md py-1 bg-sky-400 font-semibold text-white cursor-pointer'>
                    More Details
                </button>
            </Link>

        </>
    )
}


export default Button