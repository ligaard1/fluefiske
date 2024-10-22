import React from 'react';
import { Link } from 'react-router-dom';

const caenisTypes = [
  {
    id: 1,
    name: 'Caenis Horaria',
    kjennetegn: 'En av de vanligste artene i Caenis-slekten. Voksne insekter er svært små (ofte mindre enn 5 mm) og har en lys kremfarget eller hvit kropp med gjennomsiktige vinger.',
    livssyklus: 'Nymfene lever i innsjøer, dammer og sakteflytende elver, ofte i grunt vann med mye vegetasjon. De lever på bunnen og klekker om kvelden eller tidlig på morgenen, der de stiger til overflaten.',
    klekkemønster: 'Klekkingen foregår på sommeren, fra juni til august. Voksne insekter lever kun kort tid og er mest aktive i de kjøligere kveldstimene.',
    image: '/images/caenis-h.jpg'
  },
  {
    id: 2,
    name: 'Caenis Rivulorum',
    kjennetegn: 'En annen vanlig art med en kropp som er litt mørkere enn Horaria, men fortsatt svært liten (ca. 5 mm). Vingene er klare og gjennomsiktige, og kroppen er hvitaktig eller lys brun.',
    livssyklus: 'Nymfene finnes i rennende vann, spesielt i små elver og bekker med moderat strøm. De lever i sedimentet på bunnen og kryper ut av vannet for å klekke. Som andre Caenis-arter lever de voksne insektene svært kort tid.',
    klekkemønster: 'Klekkingen skjer fra juni til august, med høy aktivitet på varme, stille dager og i kveldstimene.',
    image: '/images/caenis-r.jpg'
  },
  {
    id: 3,
    name: 'Caenis Luctuosa',
    kjennetegn: 'Svært liten, hvitaktig eller lys brun døgnflue med klare vinger. Denne arten er enda mindre enn de andre Caenis-artene, noe som gjør den vanskelig å imitere for fluefiskere.',
    livssyklus: 'Nymfene lever i sakteflytende eller stillestående vann, som dammer og innsjøer. De lever på bunnen i sedimentet og klekker på overflaten. Voksne insekter er mest aktive i de kjøligere timene på dagen.',
    klekkemønster: 'Klekkingen skjer tidlig på sommeren, vanligvis fra juni til juli, men kan også foregå utover sensommeren i enkelte områder. Klekkingene skjer typisk i store mengder.',
    image: '/images/caenis-l.jpg'
  },
  {
    id: 4,
    name: 'Caenis Macrura',
    kjennetegn: 'En litt større art enn Luctuosa, men fortsatt svært liten sammenlignet med mange andre døgnfluer. Den har en hvit eller lys brun kropp og klare, gjennomsiktige vinger.',
    livssyklus: 'Nymfene lever i sakteflytende vann, spesielt i innsjøer og dammer med mye vegetasjon. De voksne klekker fra vannoverflaten, vanligvis om morgenen eller kvelden når vannet er rolig.',
    klekkemønster: 'Klekkingen foregår fra tidlig sommer til midten av sommeren (juni til august). Som med andre Caenis-arter, skjer klekkingen ofte i store mengder over en kort periode.',
    image: '/images/caenis-m.jpg'
  },
  {
    id: 5,
    name: 'Caenis Pusilla',
    kjennetegn: 'En liten art med en lys til hvit kropp og klare vinger, ligner Caenis Horaria men er litt mindre. Denne arten er utbredt i innsjøer og stilleflytende elver.',
    livssyklus: 'Nymfene lever i mudder og organisk materiale på bunnen av vannet. Voksne klekker tidlig om morgenen eller på kvelden, ofte i store antall.',
    klekkemønster: 'Fra mai til august. Klekkemønsteret er ofte massivt, med klekkinger som skjer på kvelden eller tidlig på morgenen, noe som gjør det til en utfordring for fiskere å imitere på grunn av den lille størrelsen.',
    image: '/images/caenis-p.jpg'
  }
];

function CaenisPage() {
  return (
    <div className="caenis-page">
      <div className="navigation">
        <Link to="/mayfly" className="back-button">Tilbake til Døgnfluer</Link>
      </div>
      <div className="caenis-list">
        {caenisTypes.map(type => (
          <div key={type.id} className="caenis-item">
            {type.image && <img src={type.image} alt={type.name} />}
            <h3>{type.name}</h3>
            <div className="caenis-info">
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

export default CaenisPage;
