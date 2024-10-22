import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const vaarfluer = [
  {
    id: 1,
    name: 'Hydropsyche',
    kjentSom: 'Nettspinnende vårflue',
    beskrivelse: 'Denne slekten består av middels til store vårfluer som lever i rennende vann. Larvene spinner nett under vann for å fange matpartikler som flyter forbi. De er svært tilpasningsdyktige og finnes i mange elver over hele verden. De voksne insektene har hårete vinger og klekker ofte om kvelden.',
    livssyklus: 'Larvene spinner nett under vann for å fange matpartikler.',
    sesong: 'Klekker ofte om kvelden.',
    underkategorier: [
      'Hydropsyche Pellucidula: Vanlig i elver med rask strøm. Larvene lager nett av silke for å fange partikler i vannet.',
      'Hydropsyche Angustipennis: Funnet i lignende habitater, men mindre i størrelse.',
      'Hydropsyche Instabilis: Forekommer i mange elver i Europa. Viktig for fisk gjennom sommeren.'
    ],
    bilde: 'images/hydropsyche-p.jpg'
  },
  {
    id: 2,
    name: 'Rhyacophila',
    kjentSom: 'Grønn vårflue',
    beskrivelse: 'Larvene i denne slekten bygger ikke hus som mange andre vårfluer, men lever som rovdyr i rennende vann. De voksne insektene er ofte grønne eller brune, og de klekker ofte i stor mengde. De finnes i raskt rennende elver og bekker.',
    livssyklus: 'Larvene lever som rovdyr i rennende vann.',
    sesong: 'Klekker ofte i stor mengde.',
    underkategorier: [
      'Rhyacophila Nubila: Funnet i hurtigstrømmende vann. Larvene er frie rovdyr.',
      'Rhyacophila Fasciata: Finnes i europeiske elver med raskt vann.',
      'Rhyacophila Punctata: Klekkes ofte om våren og sommeren i fjellbekker.'
    ],
    bilde: '/images/rhyacophila.jpg'
  },
  {
    id: 3,
    name: 'Phryganea',
    kjentSom: 'Stor rød vårflue',
    beskrivelse: 'En av de største vårfluene, med en kroppslengde på opptil 2-3 cm. Larvene bygger hylster av plantebiter og sand, og lever i innsjøer og sakteflytende elver. De voksne insektene har store, kraftige vinger, og fisk blir ofte selektive når disse klekker.',
    livssyklus: 'Larvene bygger hylster av plantebiter og sand.',
    sesong: 'Klekker ofte når fisk blir selektive.',
    underkategorier: [
      'Phryganea Grandis: En av de største artene, ofte funnet i stillestående vann.',
      'Phryganea Striata: Litt mindre enn Grandis, men med lignende habitat.',
      'Phryganea Bipunctata: Funnet i dammer og sakteflytende elver.'
    ],
    bilde: '/images/phryganea.jpg'
  },
  {
    id: 4,
    name: 'Limnephilus',
    kjentSom: 'Høst vårflue',
    beskrivelse: 'En vanlig slekt av vårfluer som finnes i innsjøer, dammer og sakteflytende elver. Larvene bygger solide hus av pinner, blader og sand. Vårfluene i denne slekten klekker sent på sommeren og tidlig høst, noe som gjør dem viktige for fisking i sen-sesongen.',
    livssyklus: 'Larvene bygger solide hus av pinner, blader og sand.',
    sesong: 'Klekker sent på sommeren og tidlig høst.',
    underkategorier: [
      'Limnephilus Lunatus: Bygger hylster av plantebiter og finnes i innsjøer.',
      'Limnephilus Rhombicus: Vanlig i dammer og sakteflytende elver.',
      'Limnephilus Decipiens: Funnet i både stillestående og rennende vann.'
    ],
    bilde: '/images/limnephilus.jpg'
  },
  {
    id: 5,
    name: 'Sericostoma',
    kjentSom: 'Hylstervårflue',
    beskrivelse: 'Larvene i denne slekten bygger hylstre av sandkorn og småstein, og lever i rennende vann. De voksne insektene er små til middels store med mørke vinger.',
    livssyklus: 'Larvene bygger hylstre av sandkorn og småstein.',
    sesong: 'Klekker i rennende vann.',
    underkategorier: [
      'Sericostoma Personatum: Vanlig i elver og bekker.',
      'Sericostoma Spinosum: Funnet i sakteflytende vann.',
      'Sericostoma Curvirostre: Funnet i fjellbekker.'
    ],
    bilde: '/images/sericostoma.jpg'
  },
  {
    id: 6,
    name: 'Leptoceridae',
    kjentSom: 'Langhornet vårflue',
    beskrivelse: 'Vårfluer i denne slekten er kjent for sine lange antenner og slanke kropper. De finnes i både sakteflytende elver og innsjøer. Larvene bygger hylstre av plantebiter og sandkorn og klekker ofte sent på kvelden eller natten.',
    livssyklus: 'Larvene bygger hylstre av plantebiter og sandkorn.',
    sesong: 'Klekker ofte sent på kvelden eller natten.',
    underkategorier: [
      'Leptocerus Intermedius: Funnet i innsjøer og stille vann.',
      'Leptocerus Albifrons: Finnes i både elver og innsjøer, med lange antenner og mørke vinger.',
      'Leptocerus Nigronervosus: Funnet i sakteflytende vann i Europa og Nord-Amerika.'
    ],
    bilde: '/images/leptoceridae.jpg'
  },
  {
    id: 7,
    name: 'Odontoceridae',
    kjentSom: 'Sterk hylstervårflue',
    beskrivelse: 'Larvene i denne slekten bygger sterke hylstre av små steiner og sandkorn, og de lever i hurtigstrømmende vann, som elver og bekker. De voksne insektene er middels store med mørke vinger, og de klekker ofte sent på sommeren.',
    livssyklus: 'Larvene bygger sterke hylstre av små steiner og sandkorn.',
    sesong: 'Klekker ofte sent på sommeren.',
    underkategorier: [
      'Odontocerum Albicorne: Funnet i raske elver og bekker, spesielt i fjellområder.',
      'Odontocerum Potamophylax: Lever i saktere vann og bygger sterke hylstre.',
      'Odontocerum Fulvipes: Funnet i elver med moderat strøm i Europa.'
    ],
    bilde: '/images/odontoceridae.jpg'
  },
  {
    id: 8,
    name: 'Psychomyia',
    kjentSom: 'Liten vårflue',
    beskrivelse: 'Små vårfluer som er vanlige i sakteflytende vann og innsjøer. Larvene bygger små rørformede hus av plantebiter og sand. De klekker ofte sent på ettermiddagen eller tidlig kveld, og de voksne insektene er små og mørkfargede.',
    livssyklus: 'Larvene bygger små rørformede hus av plantebiter og sand.',
    sesong: 'Klekker ofte sent på ettermiddagen eller tidlig kveld.',
    underkategorier: [
      'Psychomyia Pusilla: Funnet i sakteflytende vann, larvene bygger små hylster av planter.',
      'Psychomyia Similis: Litt større enn Pusilla, men finnes i lignende habitat.',
      'Psychomyia Montana: Funnet i høyfjellsområder og bekker.'
    ],
    bilde: '/images/psychomyia.jpg'
  }
];

function VaarfluePage() {
  const [expandedVaarflueId, setExpandedVaarflueId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedVaarflueId(expandedVaarflueId === id ? null : id);
  };

  return (
    <div className="vaarflue-page">
      <div className="navigation">
        <Link to="/" className="back-button">Tilbake til forsiden</Link>
      </div>
      <div className="vaarflue-list">
        {vaarfluer.map(vaarflue => (
          <div
            key={vaarflue.id}
            className={`vaarflue-item ${expandedVaarflueId === vaarflue.id ? 'expanded' : ''}`}
            onClick={() => handleToggleExpand(vaarflue.id)}
          >
            <img src={vaarflue.bilde} alt={vaarflue.name} />
            <h3>{vaarflue.name}</h3>
            {expandedVaarflueId === vaarflue.id && (
              <div className="vaarflue-info">
                <p><strong>Kjent som:</strong> {vaarflue.kjentSom}</p>
                <p><strong>Kjennetegn:</strong> {vaarflue.beskrivelse}</p>
                <p><strong>Livssyklus:</strong> {vaarflue.livssyklus}</p>
                <p><strong>Sesong:</strong> {vaarflue.sesong}</p>
                <p><strong>Underkategorier:</strong> {vaarflue.underkategorier.join(', ')}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VaarfluePage;
