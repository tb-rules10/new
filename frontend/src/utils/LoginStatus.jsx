import { useState, useEffect } from 'react';

export function useLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const localStorageKey = import.meta.env.VITE_APP_LOCALHOST_KEY;
      const storedValue = localStorage.getItem(localStorageKey);
      setIsLoggedIn(!!storedValue);
    };
    checkLoginStatus();
  }, []);

  return isLoggedIn;
}