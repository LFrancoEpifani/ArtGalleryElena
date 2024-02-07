import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import ArtDetails from "./pages/ArtDetails";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import { useTranslation } from "react-i18next";
import { getLanguage } from "./utils/language";

export default function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = getLanguage();
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/art/:artId" element={<ArtDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
}
