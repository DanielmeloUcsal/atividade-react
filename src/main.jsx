import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './styles/global.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Elemento #root não encontrado no index.html');
}

createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
