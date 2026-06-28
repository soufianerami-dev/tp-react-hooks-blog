import React, { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';


/**
 * Composant d'affichage détaillé d'un post
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.post - Le post à afficher
 * @param {Function} props.onClose - Fonction pour fermer les détails
 * @param {Function} props.onTagClick - Fonction appelée lors du clic sur un tag
 */
function PostDetails({ post, onClose, onTagClick }) {
  
    /* Thème actuel */

  const {

    theme

  } = useTheme();
  
  
    const themeClasses =
      useMemo(() => ({

        card:

          theme === 'dark'

            ? 'bg-dark text-light'

            : '',

        badge:

          theme === 'dark'

            ? 'bg-secondary'

            : 'bg-primary',

        button:

          theme === 'dark'

            ? 'btn-outline-light'

            : 'btn-outline-dark'

      }), [theme]);
        
  if (!post) return null;
  
  return (
    <div className={`card mb-4 ${themeClasses.card}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{post.title}</h5>
        <button 
          className={`btn btn-sm ${themeClasses.button}`}
          onClick={onClose}
          aria-label="Fermer"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      
      <div className="card-body">
        <p className="card-text">

          {post.body}

        </p>
        
        <div className="mb-3">

              <p>

                <strong>Likes :</strong> {post.reactions?.likes}

              </p>

              <p>

                <strong>Dislikes :</strong> {post.reactions?.dislikes}

              </p>

              <p>

                <strong>Utilisateur :</strong> {post.userId}

              </p>

          </div>

              <div className="mt-3">

        {post.tags?.map((tag) => (

          <button

            key={tag}

            className={`badge me-2 border-0 ${themeClasses.badge}`}

            onClick={() =>

              onTagClick(tag)

            }

          >

            {tag}

          </button>

        ))}

      </div>
      </div>
    </div>
  );
}

export default React.memo(PostDetails);