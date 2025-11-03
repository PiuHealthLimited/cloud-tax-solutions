// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Accounts_book_keeping from './pages/Accounts_book_keeping';
import Payroll_services from './pages/Payroll_services';
import Corporate_tax from './pages/Corporate_tax';
import Individual_tax from './pages/Individual_tax';
import Estate_and_tax_planning from './pages/Estate_and_tax_planning';
import Business_advisory from './pages/Business_advisory';
import Virtual_CFO_services from './pages/Virtual_CFO_services';
import Restaurant_franchise_accounting from './pages/Restaurant_franchise_accounting';
import HST_rebate from './pages/HST_rebate';
import SRED_consulting from './pages/SRED_consulting';
import Small_business_loans from './pages/Small_business_loans';
import Business_startup_and_incorporation from './pages/Business_startup_and_incorporation';
import CRA_audits from './pages/CRA_audits';
import Sale_and_purchase_of_business from './pages/Sale_and_purchase_of_business';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accounts_book_keeping" element={<Accounts_book_keeping />} />
        <Route path="/Payroll_services" element={<Payroll_services />} />
        <Route path="/Corporate_tax" element={<Corporate_tax />} />
        <Route path="/Individual_tax" element={<Individual_tax />} />
        <Route path="/Estate_and_tax_planning" element={<Estate_and_tax_planning />} />
        <Route path="/Business_advisory" element={<Business_advisory />} />
        <Route path="/Virtual_CFO_services" element={<Virtual_CFO_services />} />
        <Route
          path="/Restaurant_franchise_accounting"
          element={<Restaurant_franchise_accounting />}
        />
        <Route path="/HST_rebate" element={<HST_rebate />} />
        <Route path="/SRED_consulting" element={<SRED_consulting />} />
        <Route path="/Small_business_loans" element={<Small_business_loans />} />
        <Route
          path="/Business_startup_and_incorporation"
          element={<Business_startup_and_incorporation />}
        />
        <Route path="/CRA_audits" element={<CRA_audits />} />
        <Route path="/Sale_and_purchase_of_business" element={<Sale_and_purchase_of_business />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
