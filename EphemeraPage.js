import React from 'react';
import { Link } from 'react-router-dom';

const ephemeraTypes = [
  {
    id: 1,
    name: 'Ephemera Danica (Green Drake)',
    kjennetegn: 'En av de største døgnfluene i Europa, med en kropp som kan bli opptil 3 cm lang. Den har en lys, grønngul kropp og store, klare vinger.',
    livssyklus: 'Nymfene lever i bunnen av innsjøer og sakteflytende elver, ofte i mudder eller sand. De kan tilbringe opptil to år som nymfer før de klekker til voksne insekter. Voksne individer lever kun noen få dager, nok til å reprodusere.',
    sesong: 'Klekkes fra mai til juli, avhengig av temperatur. Det er vanligvis en kort, intens klekkeperiode, noe som kan føre til svært aktiv fiske.',
    image: '/images/ephemera-d.jpg'
  },
  {
    id: 2,
    name: 'Ephemera Vulgata (Yellow Drake)',
    kjennetegn: 'Ligner Ephemera Danica, men har en noe mørkere, gulbrun kropp. Størrelsesmessig er den også stor, og har et lignende klekkemønster.',
    livssyklus: 'Som med Danica, lever nymfene i bunnen av innsjøer og sakteflytende elver, ofte i sand og mudder. Nymfene kan bruke opptil to år på å utvikle seg før de klekker.',
    sesong: 'Klekkes vanligvis samtidig med eller litt senere enn Danica, fra juni til juli.',
    image: '/images/ephemera-v.jpg'
  },
  {
    id: 3,
    name: 'Ephemera Simulans',
    kjennetegn: 'Mindre kjent enn Danica og Vulgata, men også en stor døgnflue med lyse, gule eller brunaktige markeringer. Den er vanligvis mindre enn de to andre, men deler mange av de samme fysiske trekkene.',
    livssyklus: 'Lever også som nymfe i bunnen av sakteflytende elver og innsjøer. Den har en liknende utviklingssyklus som de andre artene, med en to-årig nymfetid før den klekker til voksen.',
    sesong: 'Klekkes på senvåren til tidlig sommer, fra mai til juni.',
    image: '/images/ephemera-s.jpg'
  }
];

function EphemeraPage() {
  return (
    <div className="ephemera-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="ephemera-list">
        {ephemeraTypes.map(type => (
          <div key={type.id} className="ephemera-item">
            <img src={type.image} alt={type.name} />
            <h3>{type.name}</h3>
            <div className="ephemera-info">
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

export default EphemeraPage;
