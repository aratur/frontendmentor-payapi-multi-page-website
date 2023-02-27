import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

const PricingLazy = lazy(() => import('./pages/Pricing'));
const AboutLazy = lazy(() => import('./pages/About'));
const ContactLazy = lazy(() => import('./pages/Contact'));

const App = () => {
  const Router = BrowserRouter;
  return (
    <Router>
      <Header />
      <Suspense fallback={<span className="loader" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingLazy />} />
          <Route path="/about" element={<AboutLazy />} />
          <Route path="/contact" element={<ContactLazy />} />
          <Route path="*" element={<p>Page does not exist</p>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
