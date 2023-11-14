import { Play } from "@phosphor-icons/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./Button";

function AboutUs() {
  return (
    <div className="flex gap-4 p-2 px-3 justify-between items-center md:flex-row md:p-4 max-md:my-5 w-full lg:p-8 lg:pt-10 lg:flex-row flex-col" id="quem-somos">
      <img
        src="quemsomos.jpg"
        alt="Menino feliz por estudar"
        className="w-[70%] final-mobile:w-[60%] final-mobile2:w-[55%] mobile425:w-[60%] md:w-[40%] lg:w-[40%] lg:ml-10"
      />
      <section className="w-full flex flex-col mobile425:gap-2 mobile425:px-2 final-mobile:gap-4 max-sm:gap-1 lg:gap-5 lg:w-1/2 ">
        <h2 className="text-base font-semibold mb-2 text-verde final-mobile:text-lg  sm:text-2xl lg:text-3xl">
          Quem Somos
        </h2>
        <p className="text-xs  mb-2 final-mobile:text-xs final-mobile2:text-sm sm:text-lg lg:text-xl">
          Somos um grupo de pessoas que optou por ajudar pessoas carentes. Essa
          foi a forma que encontramos de estar mais perto do nosso filho, Léo,
          que nos deixou há dez anos. Acreditamos que olhar para o próximo com
          empatia e compaixão nos fortalece a cada dia e nos mantém mais
          próximos do maior e mais nobre sentimento do mundo - o amor
        </p>
        <Button>
          Saiba Mais{" "}
          <span className="text-base">
            <Play weight="fill" />
          </span>
        </Button>
      </section>
    </div>
  );
}

export default AboutUs;
