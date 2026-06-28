import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Composant d'indicateur de chargement
 */
function LoadingSpinner() {
  /* Thème actuel */

const {

  theme

} = useTheme();
  
  return (
    <div className="d-flex justify-content-center my-4">
      <div 
          className={`spinner-border ${
            theme === 'dark'
              ? 'text-light'
              : 'text-primary'
      }`}
        role="status"
      >
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;