import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import EBoard from './pages/EBoard'
import Events from './pages/Events'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eboard" element={<EBoard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
