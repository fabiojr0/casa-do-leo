import Button from './Button';

function Hero() {
  return (
    <div className='relative'>
      <img src='hero-img.png' className='w-screen h-auto brightness-[0.7]' alt='Hero Image'/>

      <div className='absolute flex flex-col justify-center inset-0 gap-1 px-2 lg:p-8 lg:gap-2 text-zinc-100 final-mobile:gap-4'>
        <h1 className='font-medium text-base sm:text-2xl lg:text-4xl final-mobile:text-lg '>Contribua para a fundação 
          <span className='font-semibold text-green-500 sm:text-2xl lg:text-4xl block'> Casa do Léo</span>
        </h1>
        
        <p className='text-[0.6rem] w-3/4 sm:text-lg lg:text-2xl lg:w-1/2 final-mobile:text-xs'>Com o seu apoio, podemos fazer mais. Não importa o valor o que vale é a intenção!</p>
        <Button>Saiba Mais</Button>
      </div>
    </div>
  );
}

export default Hero;