import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';
import MayflyPage from './MayFlyPage';
import BaetisPage from './BaetisPage'; // Importer BaetisPage
import VaarfluePage from './VaarfluePage';
import EphemeraPage from './EphemeraPage'; // Importer EphemeraPage
import HeptageniaPage from './HeptageniaPage'; // Importer HeptageniaPage
import RhithrogenaPage from './RhithrogenaPage'; // Importer RhithrogenaPage
import CaenisPage from './CaenisPage'; // Importer CaenisPage
import EcdyonurusPage from './EcdyonurusPage'; // Importer EcdyonurusPage
import SerratellaPage from './SerratellaPage'; // Importer SerratellaPage
import EphemerellaPage from './EphemerellaPage'; // Importer EphemerellaPage
import './App.css';

const categories = [
  { id: 1, name: 'Døgnfluer', image: '/images/dognflue.jpg' },
  { id: 2, name: 'Vårfluer', image: '/images/vaarflue.jpg' },
  { id: 3, name: 'Fjærmygg', image: '/images/fjaermygg.jpg' },
  { id: 4, name: 'Steinfluer', image: '/images/steinflue.jpg' },
  { id: 5, name: 'Landinnsekter', image: '/images/flygemaur.jpg' },
  { id: 6, name: 'Hårmygg', image: '/images/haarmygg.jpg' },
  // Legg til flere kategorier her
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    if (category.name === 'Døgnfluer') {
      navigate('/mayfly');
    } else if (category.name === 'Vårfluer') {
      navigate('/vaarflue');
    }
    // Legg til logikk for andre kategorier hvis nødvendig
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CategoryList categories={filteredCategories} onSelectCategory={handleCategorySelect} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Hjem</Link>
        </nav>
        <h1 className="app-title">Insektsguiden</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mayfly" element={<MayflyPage />} />
          <Route path="/baetis" element={<BaetisPage />} />
          <Route path="/vaarflue" element={<VaarfluePage />} />
          <Route path="/ephemera" element={<EphemeraPage />} />
          <Route path="/heptagenia" element={<HeptageniaPage />} />
          <Route path="/rhithrogena" element={<RhithrogenaPage />} />
          <Route path="/caenis" element={<CaenisPage />} />
          <Route path="/ecdyonurus" element={<EcdyonurusPage />} />
          <Route path="/serratella" element={<SerratellaPage />} />
          <Route path="/ephemerella" element={<EphemerellaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
