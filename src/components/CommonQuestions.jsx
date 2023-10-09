import React from 'react'
import QuestionAnswer from './QuestionAnswer'

function CommonQuestions() {
    
    return (
        <div className='flex flex-col items-center mt-4 relative w-full'>
            <img src='mancha.png' className='absolute w-full -z-10 h-[120%] -top-5'/>
            <h1 className='text-verde font-semibold sm:text-2xl'>Perguntas Frequentes</h1>
            <div className='w-full flex items-center lg:h-96'>
                <div className='p-2 w-full'>
                    <QuestionAnswer/>
                </div>
                <div className='p-2 w-full max-lg:hidden'>
                    <QuestionAnswer/>
                </div>
            </div>
        </div>
    )
}

export default CommonQuestions