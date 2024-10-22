import React from 'react';
import { Link } from 'react-router-dom';

const rhithrogenaTypes = [
  {
    id: 1,
    name: 'Rhithrogena Germanica (March Brown)',
    kjennetegn: 'En av de mest kjente døgnfluene i Europa, med en mørkebrun kropp og gjennomsiktige vinger med mørke årenett. Den klekker tidlig på våren og er en viktig art i raskt rennende elver og bekker.',
    livssyklus: 'Nymfene lever på steinbunn i hurtigstrømmende vann. De voksne klekker i stor mengde tidlig på våren, noe som ofte fører til at fisken blir svært selektiv.',
    sesong: 'Fra mars til april, med en kort men intens klekkeperiode.',
    image: '/images/rhithrogena-g.jpg'
  },
  {
    id: 2,
    name: 'Rhithrogena Semicolorata',
    kjennetegn: 'Ligner på Rhithrogena Germanica, men er ofte noe mindre og har en lysere brun eller oliven kropp. Den er også funnet i hurtigstrømmende vann, men klekker senere enn Germanica.',
    livssyklus: 'Nymfene lever i strømrike elver og bekker. Klekkingen skjer vanligvis senere på våren og fortsetter utover sommeren.',
    sesong: 'Fra april til juni, med lengre varighet enn Germanica.',
    image: '/images/rhithrogena-s.jpg'
  },
  {
    id: 3,
    name: 'Rhithrogena Heros',
    kjennetegn: 'Denne arten finnes hovedsakelig i høyfjellsområder og kaldt, raskt rennende vann. Den har en mørkebrun kropp med noe lysere vingeflekker. Litt større enn andre arter i slekten.',
    livssyklus: 'Nymfene lever på steiner i raskt rennende vann, ofte i kalde fjellvann og elver. De klekker tidlig på sommeren når snøsmeltingen er over.',
    sesong: 'Fra mai til juli, avhengig av temperatur og høyde.',
    image: '/images/rhithrogena-h.jpg'
  },
  {
    id: 4,
    name: 'Rhithrogena Savoi',
    kjennetegn: 'En mindre kjent art, men funnet i lignende habitat som Rhithrogena Semicolorata. Den har en lysere kropp med gule eller olivenfargede markeringer. Mest utbredt i sentraleuropeiske elver.',
    livssyklus: 'Nymfene lever i raskt rennende vann. Voksne klekker i løpet av forsommeren.',
    sesong: 'Fra mai til juni.',
    image: '/images/rhithrogena-si.jpg'
  },
  {
    id: 5,
    name: 'Rhithrogena Nubila',
    kjennetegn: 'En middels stor døgnflue med en mørk kropp og klare vinger. Den finnes ofte i fjellområder og elver med rask strøm.',
    livssyklus: 'Nymfene klamrer seg fast til steiner i hurtigstrømmende vann. De voksne insektene klekker på tidlig vår.',
    sesong: 'Fra mars til mai, avhengig av klima og vannforhold.',
    image: '/images/rhithrogena-n.jpg'
  },
  {
    id: 6,
    name: 'Rhithrogena Morisoni',
    kjennetegn: 'Denne arten har en mørk, brun kropp og klare vinger, ligner på Rhithrogena Germanica, men er mindre i størrelse. Den finnes ofte i elver med rask strøm og steinbunn.',
    livssyklus: 'Nymfene lever i raskt rennende vann med mye oksygen, hvor de klamrer seg fast til bunnen. De klekker tidlig på sommeren.',
    sesong: 'Fra mai til juni.',
    image: '/images/rhithrogena-m.jpg'
  }
];

function RhithrogenaPage() {
  return (
    <div className="rhithrogena-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="rhithrogena-list">
        {rhithrogenaTypes.map(type => (
          <div key={type.id} className="rhithrogena-item">
            {type.image && <img src={type.image} alt={type.name} />}
            <h3>{type.name}</h3>
            <div className="rhithrogena-info">
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

export default RhithrogenaPage;
