// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import GalerySwiper from '../components/GalerySwiper'
import RecentEvents from '../components/RecentEvents'
import Footer from '../components/Footer'

export default function Events() {
  return (
  <div className='flex flex-col'>
    <Navbar/>
    <GalerySwiper/>
    <RecentEvents/>
    <Footer/>
  </div>
  )
}
