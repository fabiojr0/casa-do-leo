import Button from './Button';

function Hero() {
  return (
    <div className='relative' id="hero">
      <img src='home.jpg' className='w-screen h-auto brightness-[0.5]' alt='Hero Image'/>

      <div className='absolute flex flex-col justify-center inset-0 gap-1 mobile425:gap-3 px-2 lg:p-8 lg:gap-2 text-zinc-100 final-mobile:gap-4'>
        <h1 className='font-medium text-base sm:text-2xl lg:text-4xl final-mobile:text-lg final-mobile2:text-xl xl:text-5xl'>Contribua para a fundação 
          <span className='font-semibold text-green-500 sm:text-2xl lg:text-4xl block xl:text-5xl'> Casa do Léo</span>
        </h1>
        
        <p className='text-[0.6rem] w-3/4 mobile425:text-xs sm:text-lg lg:text-2xl lg:w-1/2 final-mobile:text-xs final-mobile2:text-sm xl:text-4xl'>Com o seu apoio, podemos fazer mais. Não importa como, o que vale é a intenção!</p>
        <Button>Saiba Mais</Button>
      </div>
    </div>
  );
}

export default Hero;