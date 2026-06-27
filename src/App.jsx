import React, { useState, useCallback } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import usePosts from './hooks/usePosts';
import useLocalStorage from './hooks/useLocalStorage';

function BlogApp() {
  // État local pour la recherche
  const [searchTerm, setSearchTerm] = useState('');
 
     /* Thème actuel */

  const { theme } = useTheme();
  
      /* Gestion des posts */

    const { posts, loading, error, hasMore, 
      fetchPosts
    } = usePosts( {searchTerm} );
  
         /* Mode de défilement */

      const [

        infiniteScroll,


      ] = useLocalStorage(

        'infiniteScroll',

        true

      );
  
  
  
          /* Gestionnaire de recherche */

    const handleSearchChange =
    useCallback(

      (term) => {

        setSearchTerm(term);

      },

      []

    );
  
  // TODO: Exercice 4 - Ajouter le gestionnaire pour la sélection de tag
  
  return (
    <div className={`container py-4 ${theme}`}>

      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-5 fw-bold">Blog</h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main>
        <PostSearch onSearch={handleSearchChange} />
        
              {error && (

        <div className="alert alert-danger">

          {error}

        </div>

      )}
        
        {/* TODO: Exercice 4 - Ajouter le composant PostDetails */}
        
        {/* TODO: Exercice 1 - Passer les props nécessaires à PostList */}
                        <PostList

            posts={posts}

            loading={loading}

            hasMore={hasMore}

            onLoadMore={fetchPosts}

            infiniteScroll={

              infiniteScroll

            }

          />
      </main>
      
      <footer className="pt-3 mt-4 text-center border-top">
        <p>
          TP React Hooks - Blog &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

    function App() {

      return (

        <ThemeProvider>

          <BlogApp />

        </ThemeProvider>

      );

    }

    export default App;