import { useEffect, useRef, useState } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);
  const [, setRerender] = useState(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a ete affiche ${compteur.current} fois.`);
  });

  return (
    <div className="demo-block">
      <p className="helper-text">
        Regarde la console pour voir le nombre de rendus du composant.
      </p>
      <button
        className="secondary-button"
        onClick={() => setRerender((value) => value + 1)}
        type="button"
      >
        Relancer un rendu
      </button>
    </div>
  );
}

export default CompteurRendu;
