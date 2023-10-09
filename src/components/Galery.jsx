import React from 'react'
import GaleryCard from './GaleryCard'
import Button from './Button'

function Galery() {
    return (
        <div className='w-full flex flex-col items-center gap-1 p-2 mt-2 lg:gap-4'>
            <h1 className='text-sm text-verde font-semibold sm:text-2xl'>Galeria de Fotos</h1>

            <div className='grid grid-cols-3 sm:grid-cols-4 w-full gap-2 p-2 lg:w-3/4 lg:gap-4 lg:p-0'>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="avast.png"/>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="chico.png"/>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="bizarro.png"/>
                
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="leon.png"/>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="nilce.png"/>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="neymar.png"/>

                <span className='max-sm:hidden'>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="bizarro.png"/>
                </span>
                <span className='max-sm:hidden'>
                <GaleryCard title="Campanha do agasalho" date="SET 29" img="neymar.png"/>
                </span>
                
            </div>
            <Button>Ver Galeria</Button>
        </div>
    )
}

export default Galery
