import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';  
import Header from './components/Header';
import Collections from './pages/Collections';
import About from './pages/About';
import Galleries from './pages/Galleries';

export default function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/about" element={<About />} />
                <Route path="/galleries" element={<Galleries />} />
            </Routes>
        </Router>
    );
}
