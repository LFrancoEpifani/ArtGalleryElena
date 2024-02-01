import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';  
import Collections from './pages/Collections';
import About from './pages/About';
import Galleries from './pages/Galleries';
import ArtDetails from './pages/ArtDetails';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/art/:artId" element={<ArtDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/galleries" element={<Galleries />} />
            </Routes>
        </Router>
    );
}
