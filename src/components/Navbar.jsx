import { List } from '@phosphor-icons/react/dist/ssr'
import React, { useEffect, useState } from 'react'

function Navbar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const updateDimension = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenWidth])
    
    return (
        <nav className='w-full flex items-center justify-between p-2 '>
            <img src='Logo.png' className='h-10 sm:h-16'/>
            {screenWidth >= 1024 
            ? <ul className='flex items-center gap-6 text-verde font-semibold '>
                <li><a href='#'>Início</a></li>
                <li><a href='#'>Bem-Vindo</a></li>
                <li><a href='#'>Quem Somos</a></li>
                <li><a href='#'>Galeria</a></li>
                <li><a href='#'>Perguntas Frequentes</a></li>
                <li><a href='#'>Contato</a></li>
            </ul>
            : <List size={32} weight='bold'/>
            }
            {screenWidth >= 1024 && <div></div>}
        </nav>
    )
}

export default Navbar
