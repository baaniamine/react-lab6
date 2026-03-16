import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  if (chargement) {
    return <p className="helper-text">Chargement en cours...</p>;
  }

  if (erreur) {
    return <p className="error-text">Erreur : {erreur.message}</p>;
  }

  const articles = Array.isArray(data) ? data : [];

  return (
    <ul className="articles-list">
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;
