import React from 'react';
import { Eye, RocketLaunch, SketchLogo } from '@phosphor-icons/react';
import Card from './Card';

function Welcome() {
  const cardInfos = [
    {
      title: "Missão",
      desc: "Facilitar acesso a recursos essenciais para famílias carentes em necessidade.",
      icon: <RocketLaunch  />,
    },
    {
      title: "Visão",
      desc: "Construir um mundo onde todas as famílias tenham oportunidades e esperança.",
      icon: <Eye  />,
    },
    {
      title: "Valores",
      desc: "Nós acreditamos na integridade, resiliência e generosidade como pilares fundamentais.",
      icon: <SketchLogo  />,
    },
  ];

  return (
    <div className='relative mt-2 lg:flex lg:items-center lg:flex-col'>
      <img src='World_Map.png' className='w-screen h-auto lg:w-2/3 opacity-60' alt='World Map' />
      <div className='absolute inset-0 flex flex-col items-center gap-4 px-2 text-zinc-100 '>
        <h1 className='text-sm text-black sm:text-2xl lg:text-3xl'>Bem-vindo à Casa do Léo</h1>

        <div className='flex w-full justify-around gap-2 items-center p-4 '>
          {cardInfos.map((item, index) => (
            <React.Fragment key={item.title}>
              {index !== 0 ? <div className='h-4/5 w-0.5 bg-zinc-500 '></div> : <></>}
              <Card title={item.title} desc={item.desc} icon={item.icon} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
