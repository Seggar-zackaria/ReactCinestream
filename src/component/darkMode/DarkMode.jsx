import {useEffect, useState} from "react"



const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );
    const element = document.documentElement;
    const  darkTheme = window.matchMedia('(prefer-color-scheme: dark)')
    console.log(darkTheme)
    const options = [
        {
            icon: 'sunny',
            text: 'light'
        },
        {
            icon: 'moon',
            text: 'dark'
        },
        {
            icon: 'desktop-outline',
            text: 'system'
        },

    ]

    function onWindowMatch() {
        if (
            localStorage.theme === 'dark' ||
            (('theme' in localStorage) && darkTheme.matches)
        ) {
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
        <>
            {
                options?.map(options => (


                       <button
                           className={`w-8 h-8 bg-teal-500 dark:bg-sky-600 dark:text-white leading-9 text-xl text-black rounded-xl  m-1 ${theme === options.text && 'text-sky-600 '}`}
                           onClick={() => setTheme(options.text)}
                           key={options.text}>
                           <ion-icon name={options.icon}></ion-icon>

                       </button>


                ))
            }
        </>
    )
}

export default DarkMode