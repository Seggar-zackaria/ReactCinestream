import {NavLink} from "react-router-dom";



function Card() {
    return (
        <>
           <div className='bg-white rounded-lg m-3 border overflow-hidden'>
              <div>
                  <img
                      className=' object-fit'
                      src="https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                      alt=""
                  />
              </div>
               <div className={'py-5 px-2'}>
                  <NavLink to={'details'}>
                      <p className="font-bold flex-wrap cursor-pointer text-gray-600 hover:text-sky-500">
                          Spider-Man: Across the Spider-Verse
                      </p>
                  </NavLink>
                   <div className={'flex items-center gap-2'}>

                       <span className='font-light text-neutral-400'> TV</span>
                       <p className={'h-1 w-1 bg-neutral-400 rounded-full block'}></p>
                       <span className='font-light text-neutral-400'> May 31, 2023</span>
                   </div>
               </div>
           </div> 
        </>
    )
}


export default Card