import React from 'react';
import { Link } from 'react-router-dom';

const serratellaTypes = [
  {
    id: 1,
    name: 'Serratella Ignita',
    kjennetegn: 'En liten døgnflue med en mørk, blåaktig kropp og gjennomsiktige vinger. Den er kjent for sin mørke farge, som gjør den lett gjenkjennelig for fluefiskere, spesielt på kjøligere og overskyede dager.',
    livssyklus: 'Nymfene lever i både stille og rennende vann, der de gjemmer seg under steiner og annet bunnsubstrat. De voksne klekker fra overflaten og svever kort tid over vannet før de reproduserer.',
    klekkemønster: 'Klekkes fra vår til høst, med høy aktivitet i kjølige perioder, spesielt på overskyede dager. Voksne klekker typisk i mai og september.',
    image: '/images/serratella-i.jpg'
  },
  {
    id: 2,
    name: 'Serratella Montana',
    kjennetegn: 'En litt større art enn Serratella Ignita, men med lignende farge. Den har en mørkebrun eller blålig kropp med klare, lett gjennomsiktige vinger.',
    livssyklus: 'Nymfene lever i hurtigstrømmende vann, ofte på steinbunn i elver. De klekker fra overflaten, og de voksne insektene flyr kort tid etter klekking for å reprodusere.',
    klekkemønster: 'Klekkingen skjer sent på våren til tidlig sommer, vanligvis fra mai til juli, spesielt i hurtigstrømmende elver.',
    image: '/images/sera-m.jpg'
  },
  {
    id: 3,
    name: 'Serratella Deficiens',
    kjennetegn: 'En mindre art med en mørkebrun eller blåaktig kropp og gjennomsiktige vinger, ligner på Serratella Ignita, men er noe mindre. Denne arten er vanlig i både stille vann og sakteflytende elver.',
    livssyklus: 'Nymfene lever i bunnsubstratet i sakteflytende vann og gjemmer seg under steiner og vegetasjon. De klekker på overflaten, og voksne insekter lever kort tid etter klekking.',
    klekkemønster: 'Klekkes fra mai til august, ofte om ettermiddagen og tidlig kveld, når vannet er rolig.',
    image: '/images/sera-d.jpg'
  },
  {
    id: 4,
    name: 'Serratella Septentrionalis',
    kjennetegn: 'En liten døgnflue med en lysere brun kropp sammenlignet med de andre artene i Serratella-slekten. Den har klare vinger med lett synlige årer.',
    livssyklus: 'Nymfene lever i sakteflytende eller stille vann, hvor de klamrer seg fast til bunnen. De klekker ved overflaten, og voksne insekter flyr kort tid etter for å reprodusere.',
    klekkemønster: 'Klekkingen skjer sent på våren til tidlig sommer, ofte i juni til juli, avhengig av vanntemperaturer.',
    image: '/images/sera-s.jpg'
  },
  {
    id: 5,
    name: 'Serratella Albida',
    kjennetegn: 'Denne arten er en mindre kjent art i Serratella-slekten, med en lys brun eller olivenfarget kropp og gjennomsiktige vinger. Den er vanlig i rennende vann med moderat strøm.',
    livssyklus: 'Nymfene lever i elver og bekker med moderat strøm. De voksne klekker fra vannoverflaten, og de er mest aktive tidlig på sommeren.',
    klekkemønster: 'Klekkingen skjer fra juni til august, ofte på varme, stille dager.',
    image: '/images/sera-a.jpg'
  }
];

function SerratellaPage() {
  return (
    <div className="serratella-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="serratella-list">
        {serratellaTypes.map(type => (
          <div key={type.id} className="serratella-item">
            {type.image && <img src={type.image} alt={type.name} />}
            <h3>{type.name}</h3>
            <div className="serratella-info">
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

export default SerratellaPage;
