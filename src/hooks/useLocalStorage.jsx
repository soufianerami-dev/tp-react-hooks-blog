import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer le stockage local
 * @param {string} key - La clé de stockage local
 * @param {any} initialValue - La valeur initiale si rien n'est trouvé dans localStorage
 * @returns {[any, function]} Valeur stockée et fonction pour la mettre à jour
 */
      function useLocalStorage(
      key,
      initialValue
    ) {

      /* Valeur stockée */

      const [

        storedValue,

        setStoredValue

      ] = useState(() => {

        const item =
          localStorage.getItem(key);

        return item
          ? JSON.parse(item)
          : initialValue;

      });

      useEffect(() => {

        /* Sauvegarder dans localStorage */

        localStorage.setItem(

          key,

          JSON.stringify(storedValue)

        );

      }, [

        key,

        storedValue

      ]);

      return [

        storedValue, setStoredValue

      ];

    }

export default useLocalStorage;