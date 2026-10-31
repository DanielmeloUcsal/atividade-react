import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Erro ao renderizar o PulseDesk:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ padding: '3rem', fontFamily: 'system-ui', color: '#fff', background: '#101827', minHeight: '100vh' }}>
          <h1>Não foi possível carregar a aplicação</h1>
          <p>Abra o console do navegador (F12) para visualizar mais detalhes.</p>
          <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>{String(this.state.error)}</pre>
          <button onClick={() => window.location.reload()}>Recarregar</button>
        </main>
      );
    }

    return this.props.children;
  }
}
