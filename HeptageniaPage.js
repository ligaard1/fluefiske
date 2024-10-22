import React from 'react';
import { Link } from 'react-router-dom';

const heptageniaTypes = [
  {
    id: 1,
    name: 'Heptagenia Sulphurea (Yellow May Dun)',
    kjennetegn: 'Denne døgnfluen har en gulaktig kropp med klare, litt gule vinger. Den er middels stor og finnes ofte i raskt rennende elver og bekker. Det er en populær flue for imitasjon på grunn av dens synlighet.',
    livssyklus: 'Nymfene er flate og tilpasset livet i raskt vann der de holder seg fast på steiner. Nymfene kryper ut på steiner eller vegetasjon ved vannkanten for å klekke til voksne.',
    sesong: 'Klekkes fra juni til august, med høy aktivitet i midtsommer.',
    image: '/images/heptagenia-s.jpg'
  },
  {
    id: 2,
    name: 'Heptagenia Longicauda',
    kjennetegn: 'Litt større enn Heptagenia Sulphurea, med en lys gul kropp og lange haletråder. Vingene er klare, og kroppen er tydelig lysere enn andre Heptagenia-arter.',
    livssyklus: 'Nymfene lever i hurtigstrømmende vann der de klamrer seg fast til steiner og annet substrat. De klekker til voksne ved å krype ut på land eller vegetasjon ved vannkanten.',
    sesong: 'Klekkes om sommeren, spesielt i juni og juli, i elver og bekker med rask strøm.',
    image: '/images/heptagenia-l.jpg'
  },
  {
    id: 3,
    name: 'Heptagenia Flavescens',
    kjennetegn: 'Middels stor døgnflue med gulaktig eller gulbrun kropp. De voksne insektene har klare vinger og en kropp som er litt mørkere enn Sulphurea.',
    livssyklus: 'Nymfene lever på bunnen av elver og bekker med moderat til rask strøm. Nymfene klekker fra vannet ved å krype på vegetasjon eller steiner, der de blir til voksne insekter.',
    sesong: 'Klekkes i løpet av sommeren, vanligvis fra juni til august, spesielt i elver med moderat til rask strøm.',
    image: '/images/heptagenia-f.jpg'
  }
];

function HeptageniaPage() {
  return (
    <div className="heptagenia-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="heptagenia-list">
        {heptageniaTypes.map(type => (
          <div key={type.id} className="heptagenia-item">
            <img src={type.image} alt={type.name} />
            <h3>{type.name}</h3>
            <div className="heptagenia-info">
              <p><strong>Kjennetegn:</strong> {type.kjennetegn}</p>
              <p><strong>Livssyklus:</strong> {type.livssyklus}</p>
              <p><strong>Sesong:</strong> {type.sesong}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeptageniaPage;
