// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import GalerySwiper from '../components/GalerySwiper'
import RecentEvents from '../components/RecentEvents'
import Footer from '../components/Footer'
import axios from "../api/axios";
const FOTOS_URL = "/fotos/";

export default function Events() {
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
  <div className='flex flex-col '>
    <Navbar/>
    <GalerySwiper fotos={fotos} months={months}/>
    <RecentEvents fotos={fotos}/>
    <Footer/>
  </div>
  )
}
