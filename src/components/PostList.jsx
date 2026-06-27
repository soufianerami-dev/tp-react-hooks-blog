import React, {useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
// TODO: Exercice 4 - Importer useIntersectionObserver
import LoadingSpinner from './LoadingSpinner';

/**
 * Composant d'affichage de la liste des posts
 * @param {Object} props - Propriétés du composant
 * @param {Array} props.posts - Liste des posts à afficher
 * @param {boolean} props.loading - Indicateur de chargement
 * @param {boolean} props.hasMore - Indique s'il y a plus de posts à charger
 * @param {Function} props.onLoadMore - Fonction pour charger plus de posts
 * @param {Function} props.onPostClick - Fonction appelée au clic sur un post
 * @param {Function} props.onTagClick - Fonction appelée au clic sur un tag
 * @param {boolean} props.infiniteScroll - Mode de défilement infini activé ou non
 */
function PostList({
  posts = [],
  loading = false,
  hasMore = false,
  onLoadMore,
  onPostClick,
  onTagClick,
  infiniteScroll = true
}) {
  /* Thème actuel */

  const {

    theme

  } = useTheme();
  
  // TODO: Exercice 4 - Utiliser useIntersectionObserver pour le défilement infini
  
    const handlePostClick =
    useCallback(

      (post) => {

        if (onPostClick) {

          onPostClick(post);

        }

      },

      [onPostClick]

    );
  
        const handleTagClick =
    useCallback(

      (e, tag) => {

        e.stopPropagation();

        if (onTagClick) {

          onTagClick(tag);

        }

      },

      [onTagClick]

    );
      
      /* Aucun post trouvé */

  if (!loading && posts.length === 0) {

    return (

      <p>

        Aucun article disponible.

      </p>

    );

  }
  
  return (
    <div
  className={`post-list ${theme}`}>
          {posts.map((post) => (

      <div

        key={post.id}

        className="post-card"

      >

        <h2>

          {post.title}

        </h2>

        <p>

          {post.body}

        </p>

            <p> <strong>  Likes :   </strong>

              {post.reactions.likes}

            </p>

          <p>

            <strong>

              Dislikes :

            </strong>

            {post.reactions.dislikes}

          </p>

      </div>

    ))}
      
      {/* Afficher le spinner de chargement */}
      {loading && <LoadingSpinner />}
      
      {/* TODO: Exercice 4 - Ajouter la référence pour le défilement infini */}
      
              {!infiniteScroll &&

      hasMore && (

        <button

          onClick={onLoadMore}

        >

          Charger plus

        </button>

    )}
    </div>
  );
}

export default React.memo(PostList);