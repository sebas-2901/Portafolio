import { Routes, Route } from "react-router-dom";
import Curriculum from "./components/curriculum";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
    </div>
  )
}

export default App
