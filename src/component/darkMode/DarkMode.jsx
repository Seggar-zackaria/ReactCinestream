import {useEffect, useState} from "react"



const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );
    const element = document.documentElement;
    const  darkTheme = window.matchMedia('(prefer-color-scheme: dark)')
    const options = [
        {
            icon: 'sunny',
            text: 'light'
        },
        {
            icon: 'moon',
            text: 'dark'
        },
     

    ]

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage)
            && darkTheme.matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }

    onWindowMatch()

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')

                break
            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;

        }
    },[theme])

    darkTheme.addEventListener('change', (e) => {
        if(!('theme') in localStorage ){
            if (e.matches) {
                element.classList.add('dark')
            } else {
                element.classList.remove('dark')
            }
        }
    })

    return (
        <div className="justify-end  flex items-center gap-3">
            {
                options?.map(options => (


                       <button
                           className={`w-fit h-fit dark:text-gray-400 text-gray-500  ${theme === options.text && 'dark:text-white text-gray-900 '}`}
                           onClick={() => setTheme(options.text)}
                           key={options.text}>
                           <ion-icon name={options.icon}></ion-icon>

                       </button>


                ))
            }
        </div>
    )
}

export default DarkMode