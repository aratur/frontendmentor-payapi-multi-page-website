import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
/* eslint-disable jsx-a11y/label-has-associated-control */

const App = () => {
  const Router = BrowserRouter;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empty" element={<p>Empty</p>} />
        <Route path="*" element={<p>Page does not exist</p>} />
      </Routes>
      <Footer />
      {/* <Home /> */}
    </Router>
  );
};

export default App;
