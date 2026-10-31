import React from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
const AppContext = createContext(null);
let nextToastId = 0;
export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState([]);
  const dismissToast = useCallback((id) => setNotifications((previous) => previous.filter((item) => item.id !== id)), []);
  const notify = useCallback((message, type = 'info') => {
    const id = ++nextToastId;
    setNotifications((previous) => [...previous, { id, message, type }]);
    return id;
  }, []);
  const toggleTheme = useCallback(() => setTheme((value) => value === 'dark' ? 'light' : 'dark'), []);
  const value = useMemo(() => ({ theme, toggleTheme, notifications, notify, dismissToast }), [theme, toggleTheme, notifications, notify, dismissToast]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('useApp deve ser utilizado dentro de AppProvider');
  return context;
}
