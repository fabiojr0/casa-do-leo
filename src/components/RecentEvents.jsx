// eslint-disable-next-line no-unused-vars
import React from "react";
import CardEvents from "../components/CardEvents";

export default function RecentEvents() {
  const events = [
    {
      image: "neymar.png",
      title: "EhVentou!",
      date: "19/09/2500",
      desc: "Campanha feita no mês de Agosto com finalidade de arrecadar doações de roupas de frio e cobertores para as famílias beneficiadas.",
    },
    {
      image: "neymar.png",
      title: "EhVentou!",
      date: "19/09/2500",
      desc: "Campanha feita no mês de Agosto com finalidade de arrecadar doações de roupas de frio e cobertores para as famílias beneficiadas.",
    },
    {
      image: "neymar.png",
      title: "EhVentou!",
      date: "19/09/2500",
      desc: "Campanha feita no mês de Agosto com finalidade de arrecadar doações de roupas de frio e cobertores para as famílias beneficiadas.",
    },
  ];

  return (
    
    <div className="w-full flex flex-col justify-center items-center gap-5 pb-3">
        <h1 className="font-bold text-verde text-2xl">Eventos Recentes</h1>
      {events &&
        events.map((item, index) => {
          return (
            <div key={index} >
              <CardEvents
                image={item.image}
                title={item.title}
                date={item.date}
                desc={item.desc}
              />
            </div>
          );
        })}
    </div>
  );
}