# React Lab 6

Projet React base sur le contenu des images du TP.

## Fonctionnalites

- `Compteur` avec `useReducer`
- `FocusInput` avec `useRef`
- `CompteurRendu` avec `useRef` et `useEffect`
- `useFetch` pour recuperer des articles depuis une API
- `ListeArticles` qui affiche les articles charges
- `Timer` avec nettoyage via `clearInterval`

## Installation

```bash
npm install
```

## Lancement

Le serveur de developpement est configure sur le port `3000`.

```bash
npm start
```

Puis ouvrir `http://localhost:3000`.

## Scripts

```bash
npm start
npm run build
npm run lint
```

## Structure

```text
src/
  App.jsx
  Compteur.jsx
  FocusInput.jsx
  CompteurRendu.jsx
  useFetch.js
  ListeArticles.jsx
  Timer.jsx
```
