import './App.css';

const steps = [
  {
    id: 'etape-1',
    badge: 'Etape 1',
    tag: 'Demarrage',
    title: 'Preparer le projet',
    objective: 'Creer un nouveau projet React vierge.',
    file: 'Terminal',
    instructions: [
      'Ouvrir un terminal.',
      'Executer la commande de creation du projet.',
      'Se placer dans le dossier cree.',
      'Lancer l application React.',
    ],
    code: [
      'npx create-react-app tp-hooks-debutant',
      '',
      'cd tp-hooks-debutant',
      '',
      'npm start',
    ].join('\n'),
    notesTitle: 'Points a retenir',
    notes: [
      "Si c'est la premiere fois, l'installation peut durer quelques minutes.",
      'La page http://localhost:3000 doit s ouvrir apres le demarrage.',
    ],
  },
  {
    id: 'etape-2',
    badge: 'Etape 2',
    tag: 'useReducer',
    title: 'Creer un compteur avec useReducer',
    objective: 'Gerer un compteur avec un reducer au lieu de useState.',
    file: 'src/Compteur.js',
    instructions: [
      'Dans src/, creer un fichier Compteur.js.',
      'Copier le code suivant.',
    ],
    code: [
      "import { useReducer } from 'react';",
      '',
      '// Etat initial',
      'const initialState = { count: 0 };',
      '',
      '// Fonction reducer qui decide comment mettre a jour l etat',
      'function reducer(state, action) {',
      '  switch (action.type) {',
      "    case 'increment':",
      '      return { count: state.count + 1 };',
      "    case 'decrement':",
      '      return { count: state.count - 1 };',
      '    default:',
      "      throw new Error('Action non reconnue');",
      '  }',
      '}',
      '',
      'function Compteur() {',
      '  const [state, dispatch] = useReducer(reducer, initialState);',
      '',
      '  return (',
      '    <div>',
      '      <p>Compteur : {state.count}</p>',
      "      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>",
      "      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>",
      '    </div>',
      '  );',
      '}',
      '',
      'export default Compteur;',
    ].join('\n'),
    notesTitle: 'Explication simple',
    notes: [
      'reducer recoit l etat actuel et l action demandee.',
      'dispatch permet d envoyer l action.',
      'Le switch verifie quelle action faire.',
      'Ici on incremente ou decremente count.',
    ],
    tip: 'Pense a bien nommer les actions (increment, decrement) pour eviter les erreurs.',
  },
  {
    id: 'etape-3',
    badge: 'Etape 3',
    tag: 'useRef',
    title: 'Utiliser useRef pour donner le focus a un champ texte',
    objective: 'Cliquer sur un bouton pour mettre le curseur dans un champ.',
    file: 'src/FocusInput.js',
    instructions: [
      'Creer FocusInput.js.',
      'Copier le code ci-dessous.',
    ],
    code: [
      "import { useRef } from 'react';",
      '',
      'function FocusInput() {',
      '  const inputRef = useRef(null);',
      '',
      '  const handleClick = () => {',
      "    // current pointe vers l element <input>",
      '    inputRef.current.focus();',
      '  };',
      '',
      '  return (',
      '    <div>',
      '      <input ref={inputRef} placeholder="Tapez ici..." />',
      '      <button onClick={handleClick}>Mettre le focus</button>',
      '    </div>',
      '  );',
      '}',
      '',
      'export default FocusInput;',
    ].join('\n'),
    notesTitle: 'Explication simple',
    notes: [
      'useRef() cree une reference vide.',
      'L attribut ref={inputRef} relie le champ a la reference.',
      'inputRef.current.focus() place le curseur dedans.',
    ],
  },
  {
    id: 'etape-4',
    badge: 'Etape 4',
    tag: 'useRef + useEffect',
    title: 'Compter les rendus avec useRef',
    objective: 'Afficher combien de fois le composant s est recharge.',
    file: 'src/CompteurRendu.js',
    instructions: [
      'Creer CompteurRendu.js.',
      'Copier le code suivant.',
    ],
    code: [
      "import { useRef, useEffect } from 'react';",
      '',
      'function CompteurRendu() {',
      '  const compteur = useRef(0);',
      '',
      '  useEffect(() => {',
      '    compteur.current += 1;',
      '    console.log(`Le composant a ete affiche ${compteur.current} fois.`);',
      '  });',
      '',
      '  return <div>Regarde la console pour voir le nombre de rendus.</div>;',
      '}',
      '',
      'export default CompteurRendu;',
    ].join('\n'),
    notesTitle: 'Explication',
    notes: [
      'useRef(0) initialise un compteur.',
      'useEffect s execute apres chaque affichage et incremente le compteur.',
      'console.log ecrit dans la console du navigateur.',
    ],
  },
  {
    id: 'etape-5',
    badge: 'Etape 5',
    tag: 'Hook personnalise',
    title: 'Creer le hook useFetch',
    objective: 'Reutiliser une logique de recuperation d API.',
    file: 'src/useFetch.js',
    instructions: [
      'Creer useFetch.js.',
      'Copier le code suivant.',
    ],
    code: [
      "import { useState, useEffect } from 'react';",
      '',
      'function useFetch(url) {',
      '  const [data, setData] = useState(null);',
      '  const [chargement, setChargement] = useState(true);',
      '  const [erreur, setErreur] = useState(null);',
      '',
      '  useEffect(() => {',
      '    setChargement(true);',
      '    fetch(url)',
      '      .then((response) => response.json())',
      '      .then((data) => setData(data))',
      '      .catch((err) => setErreur(err))',
      '      .finally(() => setChargement(false));',
      '  }, [url]);',
      '',
      '  return { data, chargement, erreur };',
      '}',
      '',
      'export default useFetch;',
    ].join('\n'),
    notesTitle: 'Explication simple',
    notes: [
      'useFetch recoit une URL.',
      'Il cree 3 etats : data, chargement, erreur.',
      'fetch telecharge les donnees et met a jour data.',
      'Si une erreur arrive, elle est sauvegardee dans erreur.',
      'Le hook retourne ces valeurs pour les utiliser dans un composant.',
    ],
  },
  {
    id: 'etape-6',
    badge: 'Etape 6',
    tag: 'Consommation du hook',
    title: 'Utiliser useFetch pour afficher une liste',
    objective: 'Voir le hook personnalise en action.',
    file: 'src/ListeArticles.js',
    instructions: [
      'Creer ListeArticles.js.',
      'Copier le code suivant.',
    ],
    code: [
      "import useFetch from './useFetch';",
      '',
      'function ListeArticles() {',
      "  const { data, chargement, erreur } = useFetch('https://jsonplaceholder.typicode.com/posts');",
      '',
      '  if (chargement) return <p>Chargement en cours...</p>;',
      '  if (erreur) return <p>Erreur : {erreur.message}</p>;',
      '',
      '  return (',
      '    <ul>',
      '      {data.map((article) => (',
      '        <li key={article.id}>{article.title}</li>',
      '      ))}',
      '    </ul>',
      '  );',
      '}',
      '',
      'export default ListeArticles;',
    ].join('\n'),
    notesTitle: 'Explication',
    notes: [
      'useFetch recupere les articles JSON.',
      'Le composant affiche la liste une fois chargee.',
      "L URL utilisee est un exemple d API gratuite.",
    ],
    tip: 'Toujours verifier que data est un tableau avant d utiliser map().',
  },
  {
    id: 'etape-7',
    badge: 'Etape 7',
    tag: 'Nettoyage',
    title: 'Creer un Timer avec nettoyage',
    objective: 'Mettre un intervalle qui s arrete automatiquement.',
    file: 'src/Timer.js',
    instructions: [
      'Creer Timer.js.',
      'Copier le code suivant.',
    ],
    code: [
      "import { useState, useEffect } from 'react';",
      '',
      'function Timer() {',
      '  const [secondes, setSecondes] = useState(0);',
      '',
      '  useEffect(() => {',
      '    const id = setInterval(() => {',
      '      setSecondes((s) => s + 1);',
      '    }, 1000);',
      '',
      '    return () => clearInterval(id);',
      '  }, []);',
      '',
      '  return <p>Temps ecoule : {secondes} secondes</p>;',
      '}',
      '',
      'export default Timer;',
    ].join('\n'),
    notesTitle: 'Explication simple',
    notes: [
      'setInterval incremente le compteur chaque seconde.',
      'La fonction retournee dans useEffect nettoie le timer.',
      'Sans clearInterval, le compteur continuerait meme si le composant disparait.',
    ],
  },
  {
    id: 'etape-8',
    badge: 'Etape 8',
    tag: 'Assemblage final',
    title: 'Afficher tous les composants dans App.js',
    objective: 'Assembler tous les exercices dans une seule application.',
    file: 'src/App.js',
    instructions: [
      'Ouvrir src/App.js.',
      'Remplacer le contenu par le code suivant.',
    ],
    code: [
      "import Compteur from './Compteur';",
      "import FocusInput from './FocusInput';",
      "import CompteurRendu from './CompteurRendu';",
      "import ListeArticles from './ListeArticles';",
      "import Timer from './Timer';",
      '',
      'function App() {',
      '  return (',
      '    <div>',
      "      <h1>TP Hooks Avances - Niveau Debutant</h1>",
      '      <h2>Compteur avec useReducer</h2>',
      '      <Compteur />',
      '      <h2>Mettre le focus avec useRef</h2>',
      '      <FocusInput />',
      '      <h2>Compteur de rendus</h2>',
      '      <CompteurRendu />',
      "      <h2>Liste d articles avec useFetch</h2>",
      '      <ListeArticles />',
      "      <h2>Timer avec nettoyage d effet</h2>",
      '      <Timer />',
      '    </div>',
      '  );',
      '}',
      '',
      'export default App;',
    ].join('\n'),
    notesTitle: 'Resultat attendu',
    notes: [
      'L application regroupe tous les hooks et exemples du TP.',
      'Cette etape sert de synthese finale avant la verification complete.',
    ],
  },
];

const overview = [
  {
    label: 'Objectif',
    value: 'Transformer les captures en un TP clair et redige dans une seule page React.',
  },
  {
    label: 'Hooks etudies',
    value: 'useReducer, useRef, useEffect, useState et un hook personnalise useFetch.',
  },
  {
    label: 'Livrable',
    value: 'Une application React qui presente les 8 etapes, le code a recopier et les explications utiles.',
  },
];

function StepCard({ step, index }) {
  return (
    <article
      className="step-card"
      id={step.id}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="step-top">
        <span className="step-badge">{step.badge}</span>
        <span className="step-tag">{step.tag}</span>
      </div>

      <h2>{step.title}</h2>
      <p className="objective">
        <strong>But :</strong> {step.objective}
      </p>

      <div className="file-pill">{step.file}</div>

      <ol className="instruction-list">
        {step.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>

      <div className="code-panel">
        <div className="code-header">Code / commande</div>
        <pre>
          <code>{step.code}</code>
        </pre>
      </div>

      <div className="notes">
        <h3>{step.notesTitle}</h3>
        <ul>
          {step.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      {step.tip ? <p className="tip">Conseil : {step.tip}</p> : null}
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Lab 6 · React</p>
          <h1>TP Hooks avance redige en une seule page</h1>
          <p className="hero-text">
            Cette application remplace les captures ecran par un support propre,
            lisible et directement exploitable. Chaque etape reprend l objectif,
            les fichiers a creer, le code a recopier et les explications utiles.
          </p>
        </div>

        <div className="hero-panel">
          <p className="hero-panel-title">Fichiers du TP</p>
          <ul>
            <li>src/Compteur.js</li>
            <li>src/FocusInput.js</li>
            <li>src/CompteurRendu.js</li>
            <li>src/useFetch.js</li>
            <li>src/ListeArticles.js</li>
            <li>src/Timer.js</li>
            <li>src/App.js</li>
          </ul>
        </div>
      </section>

      <section className="overview-grid" aria-label="Resume du TP">
        {overview.map((item) => (
          <article className="overview-card" key={item.label}>
            <p className="overview-label">{item.label}</p>
            <p className="overview-value">{item.value}</p>
          </article>
        ))}
      </section>

      <nav className="quick-nav" aria-label="Navigation rapide des etapes">
        {steps.map((step) => (
          <a href={`#${step.id}`} key={step.id}>
            {step.badge}
          </a>
        ))}
      </nav>

      <section className="section-head">
        <p className="section-kicker">Contenu complet</p>
        <h2>Les 8 etapes du TP</h2>
        <p>
          Le contenu ci-dessous est volontairement redige comme une fiche de
          travail unique pour eviter de naviguer entre plusieurs images.
        </p>
      </section>

      <section className="steps-grid">
        {steps.map((step, index) => (
          <StepCard step={step} index={index} key={step.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
