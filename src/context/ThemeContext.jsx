import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Créer le contexte
const ThemeContext = createContext();

/**
 * Provider pour le contexte de thème
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Enfants du provider
 */
export function ThemeProvider({ children }) {
  
        /* Thème sauvegardé dans localStorage */

      const [theme, setTheme] =
      useLocalStorage(
        'theme',
        'light'
      );

      /* Changer le thème */

      const toggleTheme = () => {

        setTheme(

          theme === 'light'
            ? 'dark'
            : 'light'

        );

      };
  
  // Valeur fournie par le contexte
  const value = {

    theme, toggleTheme

  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook personnalisé pour utiliser le contexte de thème
 * @returns {Object} Contexte de thème
 */
export function useTheme() {

    return useContext(
    ThemeContext
  );
}

export default ThemeContext;