# TP React Hooks - Application de Blog

## Présentation

Ce projet a été réalisé dans le cadre du module **Développement Full Stack** afin de mettre en pratique les principaux Hooks de React ainsi que la création de Hooks personnalisés.

L'application permet d'afficher des articles de blog à partir de l'API **DummyJSON**, d'effectuer des recherches et d'expérimenter différentes techniques d'optimisation proposées par React.

---

# Objectifs du TP

Les objectifs principaux de ce TP sont :

* Comprendre l'utilisation des Hooks React.
* Créer des Hooks personnalisés.
* Optimiser les performances d'une application React.
* Utiliser le Context API.
* Manipuler une API REST.
* Implémenter un chargement progressif des données.

---

# Technologies utilisées

* React
* JavaScript ES6
* React Hooks
* Context API
* Bootstrap 5
* DummyJSON API

---

# Fonctionnalités réalisées

## Exercice 1

* Affichage des articles depuis l'API DummyJSON.
* Recherche d'articles.
* Gestion du chargement des données.
* Gestion des erreurs.
* Pagination des articles.

---

## Exercice 2

Création de Hooks personnalisés :

* useDebounce
* useLocalStorage

Ces Hooks permettent d'améliorer les performances de la recherche et de conserver certaines préférences utilisateur.

---

## Exercice 3

Optimisations réalisées :

* Création du ThemeContext.
* Ajout du mode sombre.
* Création du composant ThemeToggle.
* Utilisation de useCallback.
* Utilisation de useMemo.
* Utilisation de React.memo.
* Sauvegarde du thème avec localStorage.

---

## Exercice 4 (En cours)

Fonctionnalités développées :

* Création du Hook useIntersectionObserver.
* Infinite Scroll.
* Chargement progressif des articles.
* Affichage des détails d'un article.
* Chargement d'un article par son identifiant.
* Affichage des tags.

---

# Difficultés rencontrées

Pendant le développement, quelques difficultés techniques ont été rencontrées.

Les points suivants restent à finaliser :

* fermeture complète du composant **PostDetails** avec le bouton **Fermer** ;
* filtrage complet des articles après la sélection d'un tag.

Ces fonctionnalités nécessitent encore quelques ajustements entre les composants **App.jsx** et **usePosts.jsx**.

---

# Structure du projet

```text
src/
│
├── components/
│   ├── LoadingSpinner.jsx
│   ├── PostDetails.jsx
│   ├── PostList.jsx
│   ├── PostSearch.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   ├── useDebounce.jsx
│   ├── useIntersectionObserver.jsx
│   ├── useLocalStorage.jsx
│   └── usePosts.jsx
│
├── App.jsx
└── App.css
```

---

# État actuel du projet

| Fonctionnalité           | État           |
| ------------------------ | -------------- |
| Affichage des articles   | ✅              |
| Recherche                | ✅              |
| Debounce                 | ✅              |
| LocalStorage             | ✅              |
| Theme sombre             | ✅              |
| Theme clair              | ✅              |
| Infinite Scroll          | ✅              |
| Détails d'un article     | ✅              |
| Chargement dynamique     | ✅              |
| Sélection des tags       | ✅ Partielle    |
| Fermeture de PostDetails | ⚠️ À finaliser |
| Filtrage complet par tag | ⚠️ À finaliser |

---

# Conclusion

Ce TP m'a permis de mieux comprendre l'utilisation des Hooks React, la création de Hooks personnalisés, le Context API ainsi que différentes techniques d'optimisation des composants React.

Même si quelques fonctionnalités restent à finaliser, les principaux objectifs pédagogiques du TP ont été atteints et l'application est globalement fonctionnelle.
