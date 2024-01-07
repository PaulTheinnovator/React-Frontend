import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ServicesSection from './components/ServicesSection';
import ContactPage from './components/ContactPage';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />  {/* Add this line for the AuthPage route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
