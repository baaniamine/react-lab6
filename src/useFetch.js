import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    let ignore = false;
    const chargerArticles = async () => {
      setChargement(true);
      setErreur(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Erreur lors du chargement des donnees.');
        }

        const json = await response.json();

        if (!ignore) {
          setData(json);
        }
      } catch (err) {
        if (!ignore) {
          setErreur(err);
        }
      } finally {
        if (!ignore) {
          setChargement(false);
        }
      }
    };

    chargerArticles();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;
