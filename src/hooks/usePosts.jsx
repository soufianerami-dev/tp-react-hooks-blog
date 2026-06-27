import { useState, useEffect } from 'react';
// TODO: Exercice 2 - Importer useDebounce

/**
 * Hook personnalisé pour gérer les posts du blog
 * @param {Object} options - Options de configuration
 * @param {string} options.searchTerm - Terme de recherche
 * @param {string} options.tag - Tag à filtrer
 * @param {number} options.limit - Nombre d'éléments par page
 * @param {boolean} options.infinite - Mode de chargement infini vs pagination
 * @returns {Object} État et fonctions pour gérer les posts
 */
function usePosts({ searchTerm = '', tag = '', limit = 10, infinite = true } = {}) {
  // État local pour les posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  /* États de pagination */

  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  // TODO: Exercice 4 - Ajouter l'état pour le post sélectionné
  
  // TODO: Exercice 2 - Utiliser useDebounce pour le terme de recherche
  
  // TODO: Exercice 3 - Utiliser useCallback pour construire l'URL de l'API
      
        /* Construire l'URL de l'API */

      const buildApiUrl = (skip = 0) => {

        if (searchTerm.trim() !== '') {

          return `https://dummyjson.com/posts/search?q=${encodeURIComponent(
            searchTerm
          )}`;

        }

        return `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;

      };
  
  // TODO: Exercice 1 - Implémenter la fonction pour charger les posts
      /* Charger les posts depuis l'API */

  const fetchPosts = async (reset = false) => {

    try {

      setLoading(true);
      setError(null);

      const skip = reset ? 0 : page * limit;

        const response =  await fetch(
         buildApiUrl(skip)
                  );

      if (!response.ok) {

        throw new Error(
          'Erreur lors du chargement des posts'
        );

      }

      const data =
        await response.json();

      if (reset) {

        setPosts(data.posts);

      } else {

        setPosts((prev) => [

          ...prev,

          ...data.posts

        ]);

      }

      setHasMore(

        skip + limit < data.total

      );

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };
  
    /* Recharger les posts lorsque la recherche change */

      useEffect(() => {

        setPage(0);

        fetchPosts(true);

      }, [searchTerm]);
  
  // TODO: Exercice 4 - Implémenter la fonction pour charger plus de posts
  
  // TODO: Exercice 3 - Utiliser useMemo pour calculer les tags uniques
  
  // TODO: Exercice 4 - Implémenter la fonction pour charger un post par son ID
  
  return {

  posts, loading, error, page,

  setPage, hasMore, fetchPosts

} 
}

export default usePosts;