import React from 'react';
// TODO: Exercice 3 - Importer useTheme
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
  // TODO: Exercice 3 - Utiliser le hook useTheme
  
  // TODO: Exercice 4 - Utiliser useIntersectionObserver pour le défilement infini
  
  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  const handlePostClick = (post) => {
    if (onPostClick) {
      onPostClick(post);
    }
  };
  
  const handleTagClick = (e, tag) => {
    e.stopPropagation(); // Éviter de déclencher le clic sur le post
    if (onTagClick) {
      onTagClick(tag);
    }
  };
  
      /* Aucun post trouvé */

  if (!loading && posts.length === 0) {

    return (

      <p>

        Aucun article disponible.

      </p>

    );

  }
  
  return (
    <div className="post-list">
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

// TODO: Exercice 3 - Utiliser React.memo pour optimiser les rendus
export default PostList;