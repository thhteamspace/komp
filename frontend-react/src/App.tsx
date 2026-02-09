import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CompliancePage from './pages/CompliancePage'
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import ResourcesPage from './pages/ResourcesPage'
import PricingPage from './pages/PricingPage'
import SecurityPage from './pages/SecurityPage'
import ComparePage from './pages/ComparePage'
import DemoPage from './pages/DemoPage'
import LandingPage from './pages/LandingPage'
import UseCasesPage from './pages/UseCasesPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
