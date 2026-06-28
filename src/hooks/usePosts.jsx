import { useState, useEffect, useCallback, useMemo } from 'react';
import useDebounce from './useDebounce';

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
  
        /* Post sélectionné */

      const [

        selectedPost,

        setSelectedPost

      ] = useState(null);
  
       /* Recherche avec délai */

    const debouncedSearchTerm =
    useDebounce(

      searchTerm,

      500

    );
  
  
      
        /* Construire l'URL de l'API */

        const buildApiUrl = useCallback( (skip = 0) => { 
        if (debouncedSearchTerm.trim() !== '') {

          return `https://dummyjson.com/posts/search?q=${encodeURIComponent(
            debouncedSearchTerm
          )}`;

        }

       return `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;

},

[

  debouncedSearchTerm,

  limit

]

);
  

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

      }, [debouncedSearchTerm]);

           /* Charger une nouvelle page */

      useEffect(() => {

        if (

          page > 0

        ) {

          fetchPosts();

        }

      }, [page]);

            /* Liste des tags uniques */

      const availableTags =
      useMemo(() => {

        const tags =
        posts.flatMap(

          (post) => post.tags || []

        );

        return [

          ...new Set(tags)

        ];

      }, [posts]);
  
        /* Charger la page suivante */

      const loadMore = () => {

        if (

          hasMore &&

          !loading

        ) {

          setPage(

            (prev) => prev + 1

          );

        }

      };
  
  
  /* Charger un post par son ID */

const loadPostById = async (id) => {

  try {

    setLoading(true);

    const response = await fetch(

      `https://dummyjson.com/posts/${id}`

    );

    if (!response.ok) {

      throw new Error(

        'Erreur lors du chargement du post'

      );

    }

    const data = await response.json();

    setSelectedPost(data);

  } catch (err) {

    setError(err.message);

  } finally {

    setLoading(false);

  }

};
  
  return {

  posts, loading, error, page, setPage, hasMore, loadMore, 
  availableTags, selectedPost, loadPostById,

} 
}

export default usePosts;