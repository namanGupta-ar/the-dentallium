import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemToPerfect from './components/ProblemToPerfect'
import Treatments from './components/Treatments'
import Technology from './components/Technology'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemToPerfect />
      <Treatments />
      <Technology />
      <Results />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
