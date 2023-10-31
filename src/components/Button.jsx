import React from 'react'

function Button({children}) {
    return (
        <span>
            <button className='bg-verde p-1.5 text-zinc-100 rounded-md text-sm hover:bg-green-700 transition-all flex items-center sm:text-lg lg:text-2xl active:translate-y-1'>
                {children}
            </button>
        </span>
    )
}

export default Button