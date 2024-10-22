import React from 'react';
import { Link } from 'react-router-dom';

const ecdyonurusTypes = [
  {
    id: 1,
    name: 'Ecdyonurus Venosus',
    kjennetegn: 'Middels stor døgnflue med en brun eller olivengrønn kropp og store, klare vinger. Den har mørke åremønstre på vingene, som gjør den lett gjenkjennelig. Den er en av de største artene i Ecdyonurus-slekten.',
    livssyklus: 'Nymfene lever på bunnen av elver og bekker med rask strøm, der de holder seg fast til steiner og annet substrat. Nymfene er flate og tilpasset livet i hurtigstrømmende vann. Klekkingen skjer når nymfene stiger mot overflaten eller kryper ut på steiner og vegetasjon ved vannkanten.',
    klekkemønster: 'Klekkes fra juni til august, spesielt på varme sommerdager. Voksne insekter er mest aktive på ettermiddagen og kvelden.',
    image: '/images/ecdyonurus-v.jpg'
  },
  {
    id: 2,
    name: 'Ecdyonurus Torrentis',
    kjennetegn: 'En mindre art enn Ecdyonurus Venosus, men med en lignende brun eller olivengrønn kropp. Den har mørke åremønstre i vingene og er funnet i elver med raskere vannføring.',
    livssyklus: 'Nymfene lever på bunnen av strømrike elver og bekker, der de holder seg fast til steiner. De stiger opp til overflaten for å klekke, og de voksne insektene flyr raskt etter klekking.',
    klekkemønster: 'Klekkes i løpet av sommeren, vanligvis fra juni til juli, i elver med kraftigere strøm enn der Venosus klekker.',
    image: '/images/ecdyonurus-t.jpg'
  },
  {
    id: 3,
    name: 'Ecdyonurus Dispar',
    kjennetegn: 'En annen middels stor døgnflue, med en mørkere brun kropp og klare vinger. Den har et karakteristisk åremønster i vingene som er tydeligere enn hos andre Ecdyonurus-arter. Vanlig i elver med moderat til rask strøm.',
    livssyklus: 'Nymfene lever på steinete bunner i elver og bekker med rask strøm. De voksne klekker når nymfene stiger mot overflaten eller kryper ut av vannet på steiner. De voksne insektene lever kort tid, nok til å reprodusere.',
    klekkemønster: 'Klekkes i løpet av sommeren, fra juni til august, spesielt på varme dager med høy vanntemperatur.',
    image: '/images/ecdyonurus-d.jpg'
  },
  {
    id: 4,
    name: 'Ecdyonurus Lateralis',
    kjennetegn: 'Mindre enn Ecdyonurus Venosus og med en gulbrun kropp. Den har en lysere fargetone enn de andre artene i slekten. Vingene er klare med tydelig åremønster.',
    livssyklus: 'Nymfene lever på bunnen av elver og bekker, spesielt i områder med rask strøm. Som andre arter i slekten stiger nymfene opp mot overflaten for å klekke, men kan også krype på land eller vegetasjon.',
    klekkemønster: 'Klekkes fra tidlig sommer til midten av sommeren, vanligvis fra juni til juli.',
    image: '/images/ecdl.jpg'
  },
  {
    id: 5,
    name: 'Ecdyonurus Insignis',
    kjennetegn: 'En mindre kjent art med en brun til oliven kropp og klare vinger. Insignis er noe mindre enn de andre artene i slekten, men deler de samme fysiske trekkene med et markert åremønster i vingene.',
    livssyklus: 'Nymfene lever i elver med rask strøm, der de holder seg til bunnen under steiner. Voksne klekker ved overflaten, spesielt i varme perioder.',
    klekkemønster: 'Klekkes i midten av sommeren, ofte fra juli til august, avhengig av vannforholdene.',
    image: '/images/ecdyonurus-i.jpg'
  }
];

function EcdyonurusPage() {
  return (
    <div className="ecdyonurus-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="ecdyonurus-list">
        {ecdyonurusTypes.map(type => (
          <div key={type.id} className="ecdyonurus-item">
            {type.image && <img src={type.image} alt={type.name} />}
            <h3>{type.name}</h3>
            <div className="ecdyonurus-info">
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

export default EcdyonurusPage;
