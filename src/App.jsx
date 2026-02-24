import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import EBoard from './pages/EBoard'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-ieee-navy">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/eboard" element={<EBoard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
