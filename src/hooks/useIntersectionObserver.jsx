import { useState, useEffect, useRef } from 'react';

/**
 * Hook personnalisé pour détecter quand un élément devient visible dans le viewport
 * @param {Object} options - Options pour l'IntersectionObserver
 * @param {boolean} options.enabled - Est-ce que l'observer est actif
 * @param {number} options.threshold - Seuil de visibilité de l'élément (0 à 1)
 * @param {string} options.rootMargin - Marge autour de la racine
 * @returns {[React.RefObject, boolean]} Référence à attacher à l'élément et état d'intersection
 */
function useIntersectionObserver({
  enabled = true,
  threshold = 0.1,
  rootMargin = '0px'
} = {}) {
    /* État d'intersection */

  const [isIntersecting, setIsIntersecting] =
  useState(false);

  /* Référence de l'élément */

  const elementRef =
  useRef(null);

  /* Observer l'élément */

  useEffect(() => {

    if (

      !enabled ||

      !elementRef.current

    ) {

      return;

    }

    const observer =
    new IntersectionObserver(

      ([entry]) => {

        setIsIntersecting(
          entry.isIntersecting
        );

      },

      {

        threshold,

        rootMargin

      }

    );

    observer.observe(
      elementRef.current
    );

    return () => {

      observer.disconnect();

    };

  }, [

    enabled,

    threshold,

    rootMargin

  ]);
  return [

  elementRef,

  isIntersecting

];
}

export default useIntersectionObserver;