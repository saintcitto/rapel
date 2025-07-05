// src/App.js (Ini adalah contoh tipikal, mungkin berbeda sedikit di proyek Anda)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Jika Anda menggunakan React Router
import Navbar from './components/navbar'; // Navbar diimpor di sini
import Home from './pages/home';
import AboutUs from './pages/aboutus';
import Drugs from './pages/drugs';
import Treatment from './pages/treatment';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar dirender di sini, satu kali untuk seluruh aplikasi */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* AboutUs dirender di sini */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;