import React, { useState, useCallback } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import usePosts from './hooks/usePosts';
import useLocalStorage from './hooks/useLocalStorage';
import PostDetails from './components/PostDetails';

function BlogApp() {
  // État local pour la recherche
  const [searchTerm, setSearchTerm] = useState('');

  const [

  selectedTag,

  setSelectedTag

] = useState('');
 
     /* Thème actuel */

  const { theme } = useTheme();
  
      /* Gestion des posts */

  const {

          posts,
          loading,
          error,
          hasMore,
          loadMore,
          availableTags,
          selectedPost,
          loadPostById

         } = usePosts({ searchTerm });
  
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
  
      const handleTagSelect =
    useCallback(

      (tag) => {

        setSelectedTag(tag);

      },

      []

    );
  
  return (
    <div className={`container py-4 ${theme}`}>

      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-5 fw-bold">Blog</h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main>
        <PostSearch

          onSearch={handleSearchChange}

          onTagSelect={handleTagSelect}

          availableTags={availableTags}

          selectedTag={selectedTag}

        />
        
              {error && (

        <div className="alert alert-danger">

          {error}

        </div>

      )}
        
        <PostDetails

            post={selectedPost}

            onClose={() => {}}

            onTagClick={handleTagSelect}

          />
        
        {/* TODO: Exercice 1 - Passer les props nécessaires à PostList */}
          
          <PostList

              posts={posts}

              loading={loading}

              hasMore={hasMore}

              onLoadMore={loadMore}

              onPostClick={(post) =>

                loadPostById(post.id)

              }

              onTagClick={handleTagSelect}

              infiniteScroll={infiniteScroll}

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