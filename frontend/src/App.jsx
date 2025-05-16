import { Routes, Route } from 'react-router-dom'
import HeaderNavbar from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import RegistroPage from './pages/RegistroPage'
import ListaPage from './pages/ListaPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/lista" element={<ListaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App