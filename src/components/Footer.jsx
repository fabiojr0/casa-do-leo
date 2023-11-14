import { FacebookLogo, WhatsappLogo } from '@phosphor-icons/react'
import { Link } from "react-router-dom";

function  Footer() {
    return (
        <footer className='bg-[#E7FFE9] w-full p-2 flex flex-col items-center gap-2 lg:p-4'>
            <h2 className='text-verde text-sm w-full sm:text-2xl lg:text-3xl final-mobile:text-base'>Casa do Léo</h2>
            <hr className='w-[90%]'/>
            <div className='flex items-center justify-between w-full'>
                <div className='text-xs text-verde flex items-center gap-1 sm:text-base lg:text-xl final-mobile:text-sm'>
                    <Link to="/formulario">Formulário</Link>
                    <p>|</p>
                    <Link to="/galeria">Galeria de Fotos</Link>
                </div>
                <div className='flex items-center gap-2 text-verde text-lg final-mobile2:text-2 xl sm:text-3xl lg:text-4xl final-mobile:text-xl'>
                    <FacebookLogo  weight='fill'/>
                    <WhatsappLogo  weight='fill'/>
                </div>
            </div>
        </footer>
    )
}

export default Footer