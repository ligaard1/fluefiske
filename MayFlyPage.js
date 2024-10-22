import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const mayflies = [
  { id: 1, name: 'Baetis', knownAs: 'Blue-Winged Olive (BWO)', description: 'Små døgnfluer som er olivenfarget med blåaktige vinger. De er svært vanlige og finnes i både stille og rennende vann.', lifecycle: 'Nymfene er aktive svømmere, og de voksne insektene er vanligvis små, noe som gjør dem populære blant fluefiskere tidlig på sesongen.', season: 'Fra tidlig vår til sen høst', image: '/images/dognfluer/baetis-niger.jpg' },
  { id: 2, name: 'Ephemera', knownAs: 'Green Drake', description: 'En av de største døgnfluene, med en kropp som kan være opptil 3 cm lang. De har grønngule kropper og store klare vinger.', lifecycle: 'Nymfene lever i bunnen av stille vann og kan leve der i opptil 2 år før de klekker.', season: 'Klekkes i løpet av sene vår- og sommermåneder', image: '/images/dognfluer/ephemera-danica.jpg' },
  { id: 3, name: 'Heptagenia', knownAs: 'Yellow May', description: 'Gulaktig kropp og klare, litt gule vinger. De finnes i elver og bekker med raskt rennende vann.', lifecycle: 'Nymfene er flate og tilpasset til å leve i raskt vann der de holder seg fast til steiner.', season: 'Klekkes i løpet av sommeren', image: '/images/dognfluer/heptagenia-s.jpg' },
  { id: 4, name: 'Rhithrogena', knownAs: 'March Brown', description: 'Mørkebrun kropp med noe striping og gjennomsiktive vinger med mørke årenett. De er kjent for å være blant de første døgnfluene som klekker om våren.', lifecycle: 'Nymfer som lever på steinbunn i raskt rennende vann.', season: 'Tidlig vår, ofte i mars/april', image: '/images/dognfluer/rhithrogena-germanica.jpg' },
  { id: 5, name: 'Caenis', knownAs: "Angler's Curse", description: 'En svært liten døgnflue, kjent for å være vanskelig å etterligne på grunn av sin størrelse. Caenis-døgnfluene er vanligvis hvite eller kremfargete.', lifecycle: 'Nymfene lever i grunt vann, ofte i dammer og innsjøer, og de voksne insektene lever veldig kort tid, derav navnet "Angler\'s Curse."', season: 'Sommer', image: '/images/dognfluer/caenis-horaria.jpg' },
  { id: 6, name: 'Ecdyonurus', knownAs: 'Large Brook Dun', description: 'Middels store døgnfluer med brun eller oliven kropp og store klare vinger. De foretrekker elver med raskt rennende vann.', lifecycle: 'Nymfer lever på bunnen av elver og bekker med rask strøm.', season: 'Sommer', image: '/images/dognfluer/ecdyonurus-venosus.jpg' },
  { id: 7, name: 'Serratella', knownAs: 'Iron Blue Dun', description: 'Små, mørkfargede døgnfluer med en blålig kropp og mørke vinger. De er populære blant fluefiskere på grunn av sin unike farge og utfordrende imitasjon.', lifecycle: 'Nymfer lever i både stille vann og rennende vann, og de voksne insektene flyr ofte i kjøligere vær.', season: 'Fra vår til høst, spesielt på overskyede dager', image: '/images/dognfluer/serratella-ignita.jpg' },
  { id: 8, name: 'Ephemerella', knownAs: 'Pale Morning Dun (PMD)', description: 'Lyse, nesten gulaktige døgnfluer med bleke vinger. De er svært vanlige i elver og innsjøer over hele Europa og Nord-Amerika.', lifecycle: 'Nymfene lever i vannplanter og organisk materiale i elver og innsjøer, mens de voksne klekkes og svever over vannet.', season: 'Tidlig sommer til midt på sommeren', image: '/images/dognfluer/ephemerella-notata.jpg' },
  { id: 9, name: 'Leptophlebia Marginata', knownAs: 'Sepia Dun', description: 'Brune eller mørke døgnfluer med lyse vinger. De er vanlige i innsjøer og dammer.', lifecycle: 'Nymfene lever i bløtbunn og vegetasjon, og de voksne klekker på ettermiddagen.', season: 'Tidlig vår til sen vår', image: '/images/dognfluer/leptophlebia-marginata.jpg' },
  { id: 10, name: 'Cloeon Dipterum', knownAs: 'Lake Olive', description: 'Mindre døgnfluer med oliven kropp og gjennomsiktige vinger. De finnes hovedsakelig i innsjøer, dammer og sakte rennende vann.', lifecycle: 'Nymfene er aktive svømmere, og de voksne insektene klekker om ettermiddagen og tidlig kveld.', season: 'Fra vår til høst', image: '/images/dognfluer/cloeon-dipterum.jpg' }
];

function MayflyPage() {
  const navigate = useNavigate();
  const [expandedMayflyId, setExpandedMayflyId] = useState(null);

  const handleToggleExpand = (id) => {
    if (id === 1) { // Hvis Baetis
      navigate('/baetis');
    } else if (id === 2) { // Hvis Ephemera
      navigate('/ephemera');
    } else if (id === 3) { // Hvis Heptagenia
      navigate('/heptagenia');
    } else if (id === 4) { // Hvis Rhithrogena
      navigate('/rhithrogena');
    } else if (id === 5) { // Hvis Caenis
      navigate('/caenis');
    } else if (id === 6) { // Hvis Ecdyonurus
      navigate('/ecdyonurus');
    } else if (id === 7) { // Hvis Serratella
      navigate('/serratella');
    } else if (id === 8) { // Hvis Ephemerella
      navigate('/ephemerella');
    } else {
      setExpandedMayflyId(expandedMayflyId === id ? null : id);
    }
  };

  return (
    <div className="mayfly-page">
      <div className="navigation">
        <Link to="/" className="back-button">Tilbake til forsiden</Link>
      </div>
      <div className="mayfly-list">
        {mayflies.map(mayfly => (
          <div
            key={mayfly.id}
            className={`mayfly-item ${expandedMayflyId === mayfly.id ? 'expanded' : ''}`}
            onClick={() => handleToggleExpand(mayfly.id)}
          >
            <img src={mayfly.image} alt={mayfly.name} />
            <h3>{mayfly.name}</h3>
            {expandedMayflyId === mayfly.id && (
              <div className="mayfly-info">
                <p><strong>Kjent som:</strong> {mayfly.knownAs}</p>
                <p><strong>Kjennetegn:</strong> {mayfly.description}</p>
                <p><strong>Livssyklus:</strong> {mayfly.lifecycle}</p>
                <p><strong>Sesong:</strong> {mayfly.season}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MayflyPage;
