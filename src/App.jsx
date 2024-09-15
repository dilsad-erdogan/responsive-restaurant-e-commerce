import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Stores from "./components/Stores/Stores"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Stores />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
