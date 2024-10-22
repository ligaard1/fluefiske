import React from 'react';
import { Link } from 'react-router-dom';

const ephemerellaTypes = [
  {
    id: 1,
    name: 'Ephemerella Notata',
    kjennetegn: 'Lys, nesten gulaktig kropp med bleke vinger. Den har en delikat og tynn kropp som gjør den lett gjenkjennelig for fluefiskere. Dette er en svært vanlig art, både i Europa og Nord-Amerika.',
    livssyklus: 'Nymfene lever i vannplanter og organisk materiale i elver og innsjøer. Nymfene stiger til overflaten for å klekke, og de voksne insektene flyr kort tid etter klekking.',
    klekkemønster: 'Klekkingen skjer tidlig på sommeren, vanligvis fra juni til midten av juli. Den har en kort, men intens klekkeperiode i mange elver og innsjøer.',
    image: '/images/ephemerella-n.jpg'
  },
  {
    id: 2,
    name: 'Ephemerella Subvaria',
    kjennetegn: 'Lys rosaaktig eller kremfarget kropp med klare vinger. Denne arten er spesielt populær blant fluefiskere i Nord-Amerika på grunn av sin store klekkeperiode tidlig på sesongen.',
    livssyklus: 'Nymfene lever i rennende vann, spesielt i steinete områder med rask strøm. Nymfene stiger opp til overflaten for å klekke, og de voksne insektene lever kun noen få dager etter klekking.',
    klekkemønster: 'Klekkes fra tidlig vår til tidlig sommer, vanligvis fra april til juni, og er ofte en av de første døgnfluene som klekker etter vinteren.',
    image: '/images/ephemerella-s.jpg'
  },
  {
    id: 3,
    name: 'Ephemerella Inermis',
    kjennetegn: 'En lys gulaktig kropp med klare, lette vinger, ligner på Ephemerella Notata, men finnes ofte i hurtigstrømmende vann. Denne arten har også en lang klekkesesong, noe som gjør den til en viktig art for fluefiskere.',
    livssyklus: 'Nymfene lever i raskt rennende elver, hvor de gjemmer seg under steiner og annet bunnsubstrat. De voksne klekker fra vannoverflaten og lever kort tid før de reproduserer.',
    klekkemønster: 'Klekkes fra tidlig sommer til midtsommer, vanligvis fra juni til august, avhengig av vanntemperaturen.',
    image: '/images/ephemerella-i.jpg'
  },
  {
    id: 4,
    name: 'Ephemerella Dorothea',
    kjennetegn: 'Mindre enn de andre Ephemerella-artene, men med en lys, gulaktig kropp og klare vinger. Den er lett å kjenne igjen på grunn av sin lysende gulfarge.',
    livssyklus: 'Nymfene lever i rennende vann, spesielt i elver og bekker med moderat strøm. De klekker fra vannoverflaten, og de voksne insektene er mest aktive tidlig på sommeren.',
    klekkemønster: 'Klekkes fra mai til juli, med hovedvekt på tidlig sommer, og kan ofte finnes i store mengder i enkelte elver.',
    image: '/images/ephemerella-d.jpg'
  },
  {
    id: 5,
    name: 'Ephemerella Excrucians',
    kjennetegn: 'En middels stor døgnflue med en lys gul eller olivenfarget kropp og klare vinger. Denne arten finnes ofte i både stillestående og rennende vann.',
    livssyklus: 'Nymfene lever i bunnsubstratet i innsjøer og elver, hvor de klamrer seg fast til steiner eller vegetasjon. De voksne insektene klekker fra vannoverflaten, og de er mest aktive om morgenen eller på kvelden.',
    klekkemønster: 'Klekkingen skjer fra tidlig vår til midten av sommeren, vanligvis fra april til juli.',
    image: '/images/ephemerella-e.jpg'
  },
  {
    id: 6,
    name: 'Ephemerella Aurivillii',
    kjennetegn: 'En mindre art med en gulaktig til lysebrun kropp og klare vinger. Den finnes hovedsakelig i elver med moderat til rask strøm.',
    livssyklus: 'Nymfene lever i elver med rask strøm, der de holder seg fast til steiner og andre harde overflater. De voksne klekker på ettermiddagen, og de flyr kort tid etter klekking.',
    klekkemønster: 'Klekkes fra tidlig sommer til midtsommer, vanligvis fra juni til juli.',
    image: '/images/ephemerella-a.jpg'
  }
];

function EphemerellaPage() {
  return (
    <div className="ephemerella-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="ephemerella-list">
        {ephemerellaTypes.map(type => (
          <div key={type.id} className="ephemerella-item">
            {type.image && <img src={type.image} alt={type.name} />}
            <h3>{type.name}</h3>
            <div className="ephemerella-info">
              <p><strong>Kjennetegn:</strong> {type.kjennetegn}</p>
              <p><strong>Livssyklus:</strong> {type.livssyklus}</p>
              <p><strong>Klekkemønster:</strong> {type.klekkemønster}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EphemerellaPage;
