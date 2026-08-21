import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="bg-[#90ADCD] min-h-screen">

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Manager />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App