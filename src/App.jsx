import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </Layout>
                </Router>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;
