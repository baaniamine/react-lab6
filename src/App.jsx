import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import './App.css';

const sections = [
  {
    title: 'Compteur avec useReducer',
    description: 'Gestion d un compteur avec un reducer a la place de useState.',
    component: <Compteur />,
  },
  {
    title: 'Mettre le focus avec useRef',
    description: 'Cliquer sur un bouton pour donner le focus au champ texte.',
    component: <FocusInput />,
  },
  {
    title: 'Compteur de rendus',
    description: 'Observer les rendus du composant dans la console du navigateur.',
    component: <CompteurRendu />,
  },
  {
    title: 'Liste d articles avec useFetch',
    description: 'Recuperer des donnees depuis une API avec un hook personnalise.',
    component: <ListeArticles />,
  },
  {
    title: 'Timer avec nettoyage d effet',
    description: 'Incrementer un compteur chaque seconde puis nettoyer l intervalle.',
    component: <Timer />,
  },
];

function App() {
  return (
    <main className="app-shell">
      <section className="card-grid">
        {sections.map((section) => (
          <article className="card" key={section.title}>
            <h2>{section.title}</h2>
            <p className="card-description">{section.description}</p>
            {section.component}
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
