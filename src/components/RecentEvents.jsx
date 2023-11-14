// eslint-disable-next-line no-unused-vars
import React from "react";
import CardEvents from "../components/CardEvents";

export default function RecentEvents({fotos}) {
  

  return (
    
    <div className="w-full flex flex-col justify-center items-center gap-6 pb-3 bg-gradient-to-t from-[#E7FFE9] to-white to-70%">
        <h1 className="font-semibold text-verde lg:text-2xl xl:text3xl">Eventos Recentes</h1>
      {fotos &&
        fotos.map((item, index) => {
          return (
            <div key={index}>
              <CardEvents
                image={item.link1}
                title={item.titulo}
                date={item.data}
                desc={item.desc}
              />
            </div>
          );
        })}
    </div>
  );
}
