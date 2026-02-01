import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerSlab from './components/TickerSlab';
import Problems from './components/Problems';
import USP from './components/USP';
import Differentiation from './components/Differentiation';
import ContentHub from './components/ContentHub';
import HowItWorks from './components/HowItWorks';
import TrustProof from './components/TrustProof';
import KnowledgeCenter from './components/KnowledgeCenter';
import FinalConversion from './components/FinalConversion';
import Footer from './components/Footer';
import UseCase from './pages/UseCase';
import Services from './pages/Services';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TickerSlab />
              <Problems />
              <USP />
              <Differentiation />
              <ContentHub />
              <HowItWorks />
              <TrustProof />
              <KnowledgeCenter />
              <FinalConversion />
            </>
          } />
          <Route path="/use-cases" element={<UseCase />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
