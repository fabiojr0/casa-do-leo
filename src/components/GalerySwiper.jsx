// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GaleryCard from "./GaleryCard";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function GalerySwiper() {
  const images = [
    {
      title: "Avast",
      data: "10 OUT",
      img: "avast.png",
    },
    {
      title: "Bizarro",
      data: "10 OUT",
      img: "bizarro.png",
    },
    {
      title: "Chico",
      data: "10 OUT",
      img: "chico.png",
    },
    {
      title: "Leon",
      data: "10 OUT",
      img: "leon.png",
    },
    {
      title: "Neymar",
      data: "10 OUT",
      img: "neymar.png",
    },
    {
      title: "Nilce",
      data: "10 OUT",
      img: "nilce.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-col w-screen items-center justify-center pt-14">
        <h1 className="lg:text-2xl font-semibold text-verde">Galeria</h1>
        <div className="w-screen flex justify-center items-center p-5">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={1}
            navigation={true}
            modules={[Navigation]}
            loop={true}
          >
            {images &&
              images.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full justify-center items-center flex p-20">
                      <GaleryCard
                        img={item.img}
                        title={item.title}
                        date={item.data}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
