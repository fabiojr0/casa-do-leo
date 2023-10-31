import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import AboutUs from "../components/AboutUs"
import Galery from "../components/Galery"
import CommonQuestions from "../components/CommonQuestions"
import Contacts from "../components/Contacts"
import FooterDonate from "../components/FooterDonate"
import Footer from "../components/Footer"


function Home() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <Welcome/>      
      <AboutUs/>
      <Galery/>
      <CommonQuestions/>
      <Contacts/>
      <FooterDonate/>
      <Footer/>
    </>
  )
}

export default Home
