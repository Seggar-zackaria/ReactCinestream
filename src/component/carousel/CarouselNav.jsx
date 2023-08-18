import { useSwiper } from 'swiper/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

 const NavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="grid gap-3 items-center absolute bottom-10 right-10 z-40">
            <div
                className=" w-8 h-8 text-black bg-white rounded-md p-1 "
                onClick={() => swiper.slidePrev()}>
                <ChevronLeftIcon  />
            </div>
            <div
                className="h-8 w-8 text-black bg-white rounded-md p-1 "
                onClick={() => swiper.slideNext()}>
                <ChevronRightIcon />
            </div>
        </div>
    );
};

export default NavButtons