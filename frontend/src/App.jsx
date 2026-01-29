import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FeaturePreviewPage from './pages/FeaturePreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Placeholder for other routes */}
        <Route path="/solutions" element={<LandingPage />} />
        <Route path="/enterprise" element={<LandingPage />} />
        <Route path="/pricing" element={<LandingPage />} />
        <Route path="/resources" element={<LandingPage />} />
        <Route path="/feature-preview" element={<FeaturePreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
