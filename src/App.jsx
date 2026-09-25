import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import States from './pages/States';
import Karnataka from './pages/Karnataka';
import Dishes from './pages/Dishes';
import Places from './pages/Places';
import Reviews from './pages/Reviews';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="app-shell">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/states" element={<States />} />
            <Route path="/states/karnataka" element={<Karnataka />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/places" element={<Places />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
