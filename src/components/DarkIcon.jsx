import '../App.css'

import { FaMoon, FaSun } from 'react-icons/fa'

import { useState } from 'react'

const SideNavIconSettings = () => {
    const [isDarkmode, setIsDarkmode] = useState(window.document.body.classList.contains("dark"))
    return (
        <div className="sidebar-icon group" onClick={
            () => {
                const body = window.document.body.classList
                // body.contains('dark') ? body.remove('dark') : body.add('dark')
                if(body.contains('dark')) {
                    setIsDarkmode(false)
                } else {
                    setIsDarkmode(true)
                }
            }
        }>
            <div className="transition-all">
                {isDarkmode ? <FaSun size="28" className="group-hover:text-white transition-all text-green-900"/> : <FaMoon size="28" className="group-hover:text-white transition-all text-green-900"/> }
            </div>
            <span className="absolute w-auto p-2 m-2 min-w-max left-[70px] rounded-md dark:bg-gray-700 dark:text-white bg-gray-300 scale-0 group-hover:scale-100 transition-all origin-left">
                <p>{isDarkmode ? "Turn on the lights" : "Turn off the lights"}</p>
            </span>
        </div>
    )
}
export default SideNavIconSettings