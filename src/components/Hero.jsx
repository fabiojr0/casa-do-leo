import Button from './Button';

function Hero() {
  return (
    <div className='relative'>
      <img src='hero-img.png' className='w-screen h-auto' alt='Hero Image' />

      <div className='absolute flex flex-col justify-center inset-0 gap-1 px-2 lg:p-8 lg:gap-2 text-zinc-100'>
        <h1 className='font-medium text-sm sm:text-2xl lg:text-4xl'>Contribua para a fundação</h1>
        <span className='font-semibold text-green-500 text-sm sm:text-2xl lg:text-4xl'>Casa do Léo</span>
        <p className='text-[0.6rem] w-3/4 sm:text-lg lg:text-2xl lg:w-1/2'>Com o seu apoio, podemos fazer mais. Não importa o valor o que vale é a intenção!</p>
        <Button>Saiba Mais</Button>
      </div>
    </div>
  );
}

export default Hero;
