// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GaleryCard from "./GaleryCard";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function GalerySwiper({ fotos, months }) {
  return (
    <div>
      <div className="flex flex-col w-screen items-center justify-center pt-6 gap-6 pb-12">
        <h1 className="lg:text-2xl font-semibold text-verde xl:text-3xl">Galeria</h1>
        <div className="w-screen flex justify-center items-center px-10">
          <Swiper
            slidesPerView={3}
            initialSlide={1}
            centeredSlides={true}
            spaceBetween={0.5 }
            navigation={true}
            modules={[Navigation]}
          >
            {fotos &&
              fotos.map((item) => {
                const data = item.data.split("-").reverse();

                return (
                  <SwiperSlide key={item.titulo}>
                    <GaleryCard
                      title={item.titulo}
                      date={`${months[Number(data[1] - 1)]} ${data[0]}`}
                      img={item.link1}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
