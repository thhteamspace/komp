import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import USP from './components/USP';
import Differentiation from './components/Differentiation';
import ContentHub from './components/ContentHub';
import HowItWorks from './components/HowItWorks';
import TrustProof from './components/TrustProof';
import KnowledgeCenter from './components/KnowledgeCenter';
import FinalConversion from './components/FinalConversion';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Problems />
      <USP />
      <Differentiation />
      <ContentHub />
      <HowItWorks />
      <TrustProof />
      <KnowledgeCenter />
      <FinalConversion />
      <Footer />
    </div>
  );
}

export default App;
