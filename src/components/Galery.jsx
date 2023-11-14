// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import GaleryCard from "./GaleryCard";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "../api/axios";
const FOTOS_URL = "/fotos/";

function Galery() {
  const [fotos, setFotos] = useState([]);
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  useEffect(() => {
    async function getFotos() {
      try {
        const response = await axios.get(FOTOS_URL, {
          withCredentials: true,
        });
        setFotos(response?.data);
      } catch (err) {
        // navigate("/admin");
      }
    }
    getFotos();
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center gap-1 p-2 mt-2 lg:gap-7 lg:pt-14"
      id="galeria"
    >
      <h1 className="text-base font-semibold final-mobile:text-lg text-verde sm:text-2xl lg:text-3xl xl:text-4xl">
        Galeria de Fotos
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2 p-2 lg:w-3/4 lg:gap-5 lg:p-0">
        {fotos &&
          fotos.map((item, index) => {
            if (index <= 7) {
              const data = item.data.split("-").reverse();

              return (
                <GaleryCard
                  key={item.titulo}
                  title={item.titulo}
                  date={`${months[Number(data[1] - 1)]} ${data[0]}`}
                  img={item.link1}
                />
              );
            }
          })}
      </div>
      <Link to="/galeria">
        <Button>Ver Galeria</Button>
      </Link>
    </div>
  );
}

export default Galery;
