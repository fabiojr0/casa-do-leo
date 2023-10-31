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
    <div className="lg:gap-6 flex flex-col">
      <Navbar/>
      <Hero/>
      <Welcome/>      
      <AboutUs/>
      <Galery/>
      <CommonQuestions/>
      <Contacts/>
      <FooterDonate/>
      <Footer/>
    </div>
  )
}

export default Home
