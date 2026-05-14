import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollTo() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return useCallback((id: string) => {
    if (!isHome) {
      navigate('/');
      // allow Home to render before scrolling
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isHome, navigate]);
}
