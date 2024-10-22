import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const baetisVariants = [
  { id: 1, name: 'Baetis Rhodani', knownAs: 'Large Dark Olive', description: 'En av de mest kjente og utbredte artene innen Baetis-slekten. Den har en olivenfarget kropp og mørkere, litt blålige vinger.', lifecycle: 'Nymfene er aktive svømmere og finnes i både rennende vann og stille vann. De voksne insektene har en oliven kropp og mørke vinger.', hatchPattern: 'Klekkes tidlig på sesongen, fra tidlig vår til sen høst, og er spesielt aktive i kjøligere perioder.', flyImitations: 'Nymfer imiteres ofte med små nymfefluer, mens tørrfluer imiterer de voksne insektene.', image: '/images/baetis-r.jpg' },
  { id: 2, name: 'Baetis Niger', knownAs: 'Iron Blue Dun', description: 'En mindre art enn Baetis Rhodani, kjent for sin mørkeblå eller blågrå kropp. Denne arten er kjent for å klekke på overskyede dager eller i dårlig vær.', lifecycle: 'Nymfene er også aktive svømmere, og de voksne insektene har en karakteristisk mørk farge som skiller dem fra andre Baetis-arter.', hatchPattern: 'Klekkes tidlig vår og sen høst, ofte i kaldere og mer vått vær.', flyImitations: 'Små nymfer og tørrfluer med mørkere kroppsfarger brukes til å imitere denne arten.', image: '/images/baetis-n.jpg' },
  { id: 3, name: 'Baetis Tricaudatus', description: 'En av de mest vanlige artene i Nord-Amerika. Den har en olivengrønn kropp og klarvingede voksne. Nymfene er svært aktive svømmere og utgjør en stor del av fiskenes diett.', lifecycle: 'Nymfene lever i både rennende og stille vann. De voksne klekker gjennom hele sesongen, og er ofte mest aktive fra sen vår til tidlig høst.', hatchPattern: 'Sesongmessig klekking fra vår til høst, spesielt på overskyede dager.', flyImitations: 'Nymfe- og tørrflueimitasjoner med oliven kropp og klarvinger.', image: '/images/baetis-t.jpg' },
  { id: 4, name: 'Baetis Fuscatus', knownAs: 'Small Dark Olive', description: 'En liten døgnflueart med en olivengrønn kropp og mørkere vinger. Denne arten klekker i store mengder og kan føre til at fisk blir selektive i valg av mat.', lifecycle: 'Nymfene lever i både elver og innsjøer, og de voksne insektene har en tendens til å klekke i større antall om våren og sommeren.', hatchPattern: 'Klekkes gjennom hele sommeren, men er spesielt aktive i tidlig vår.', flyImitations: 'Små, mørke nymfer og tørrfluer med olivengrønn eller mørk kropp imiterer denne arten best.', image: '/images/baetis-f.jpg' },
  { id: 5, name: 'Baetis Muticus', description: 'Denne arten finnes i mindre bekker og innsjøer og har en olivengrønn kropp med gjennomsiktige vinger. Nymfene er aktive svømmere og kan være svært vanskelige å imitere på grunn av deres små størrelse.', lifecycle: 'Nymfer lever i sakteflytende elver og dammer, og de voksne insektene klekker sent på våren og tidlig sommer.', hatchPattern: 'Sommerklekkingen er kort, men intens.', flyImitations: 'Bruk små nymfeimitasjoner med olivengrønn kropp for å matche denne arten.', image: '/images/baetis-m.jpg' },
  { id: 6, name: 'Baetis Vernus', knownAs: 'Medium Olive', description: 'En middels stor døgnflue med olivengrønn kropp og klare vinger. Denne arten klekker tidlig på våren og er en favoritt blant fisk som nettopp har begynt å spise etter vinteren.', lifecycle: 'Nymfene er aktive tidlig i sesongen og finnes ofte i rennende vann. Voksne insekter klekker om våren.', hatchPattern: 'Aktiv fra tidlig vår til forsommer.', flyImitations: 'Olivengrønne nymfer og tørrfluer er mest effektive.', image: '/images/baetis-v.jpg' },
  { id: 7, name: 'Baetis Alpinus', description: 'Finnes ofte i kaldt, rennende vann i fjellområder. Denne arten har en olivengrønn kropp og klare vinger, og nymfene er svært aktive i raskt vann.', lifecycle: 'Nymfene finnes i rennende vann og klekker på sommeren, spesielt i fjellvann og bekker.', hatchPattern: 'Sommerklekkingen i høyere strøk er typisk kort, men intens.', flyImitations: 'Nymfer med olivengrønn kropp og raske bevegelser imiterer denne arten godt.', image: '/images/baetis-a.jpg' },
  { id: 8, name: 'Baetis Scambus', description: 'En mindre kjent art, men finnes i raskt rennende vann i Europa. Denne arten har en oliven- eller brunaktig kropp, og de voksne insektene har klare vinger.', lifecycle: 'Nymfene lever i rennende vann, spesielt i elver og bekker med moderate til raske strømmer.', hatchPattern: 'Klekkes fra tidlig vår til sensommer.', flyImitations: 'Bruk små nymfer og tørrfluer med oliven kropp.', image: '/images/baetis-s.jpg' },
  { id: 9, name: 'Baetis Digitatus', description: 'Denne arten finnes ofte i sakteflytende bekker og innsjøer, og den har en olivengrønn kropp med klare vinger. Nymfene er svært aktive og beveger seg raskt.', lifecycle: 'Nymfer lever i sakteflytende vann, og de voksne insektene klekker gjennom hele sommeren.', hatchPattern: 'Aktiv fra sen vår til tidlig høst.', flyImitations: 'Små, olivenfargede nymfer og tørrfluer imiterer denne arten best.', image: '/images/baetis-d.jpg' }
];

function BaetisPage() {
  const [expandedVariantId, setExpandedVariantId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedVariantId(expandedVariantId === id ? null : id);
  };

  return (
    <div className="baetis-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <h2>Baetis Varianter</h2>
      <div className="baetis-list">
        {baetisVariants.map(variant => (
          <div
            key={variant.id}
            className={`baetis-item ${expandedVariantId === variant.id ? 'expanded' : ''}`}
            onClick={() => handleToggleExpand(variant.id)}
          >
            <img src={variant.image} alt={variant.name} />
            <h3>{variant.name}</h3>
            {expandedVariantId === variant.id && (
              <div className="baetis-info">
                {variant.knownAs && <p><strong>Kjent som:</strong> {variant.knownAs}</p>}
                <p><strong>Beskrivelse:</strong> {variant.description}</p>
                <p><strong>Livssyklus:</strong> {variant.lifecycle}</p>
                <p><strong>Klekkemønster:</strong> {variant.hatchPattern}</p>
                <p><strong>Flueimitasjoner:</strong> {variant.flyImitations}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BaetisPage;