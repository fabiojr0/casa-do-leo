import { Play  } from '@phosphor-icons/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from './Button'

function AboutUs() {
    return (
        <div className='flex gap-4 p-2 justify-between items-center max-md:mt-10 w-full lg:p-8 lg:pt-16'>
            <img src='feliz_por_estudar.png' alt='Menino feliz por estudar' className='w-[80%] md:w-[20%] lg:w-[30%] lg:ml-10'/>
            <section className='w-full flex flex-col max-sm:gap-1 lg:gap-5 lg:w-1/2 '>
                <h1 className='text-sm font-semibold text-verde sm:text-2xl lg:text-3xl'>Quem Somos</h1>
                <p className='text-xs sm:text-lg lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus, nam eaque quae sequi voluptas harum laudantium rem molestiae, itaque.</p>
                <p className='text-xs sm:text-lg lg:text-lg max-lg:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus, nam eaque quae sequi voluptas harum laudantium rem molestiae, itaque.</p>
                <Button>Saiba Mais <Play  size={20} weight='fill'/></Button>
            </section>
        </div>
    )
}

export default AboutUs