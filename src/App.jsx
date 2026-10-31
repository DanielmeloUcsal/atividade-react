import React from 'react';
import { useMemo, useState } from 'react';
import { useApp } from './context/AppContext.jsx';
import { faqItems, projects, tabItems } from './data/content.js';
import Accordion from './components/Accordion.jsx';
import Dropdown from './components/Dropdown.jsx';
import Pagination from './components/Pagination.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Tabs from './components/Tabs.jsx';
import Toast from './components/Toast.jsx';
const PAGE_SIZE = 6;
const categoryOptions = [{ value: 'Todas', label: 'Todas as categorias' }, { value: 'Design', label: 'Design' }, { value: 'Desenvolvimento', label: 'Desenvolvimento' }, { value: 'Marketing', label: 'Marketing' }];
export default function App() {
  const { theme, toggleTheme, notify } = useApp();
  const [category, setCategory] = useState('Todas');
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = useMemo(() => projects.filter((p) => category === 'Todas' || p.category === category), [category]);
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const visibleProjects = filteredProjects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const completed = projects.filter((p) => p.progress === 100).length;
  const average = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length);
  const changeCategory = (value) => { setCategory(value); setPage(1); notify(value === 'Todas' ? 'Exibindo todos os projetos.' : `Filtro aplicado: ${value}.`, 'info'); };
  
  return <div className={`app-shell theme-${theme}`}>
    <div className="layout">
      <aside className="sidebar" aria-label="Menu lateral">
        <a href="#inicio" className="logo"><span className="logo-icon">◈</span><span>pulse<span className="logo-accent">desk</span><small>WORKSPACE</small></span></a>
        <p className="sidebar-caption">MENU PRINCIPAL</p>
        <nav aria-label="Navegação principal"><a className="nav-link active" href="#inicio"><span>▦</span> Visão geral</a><a className="nav-link" href="#projetos"><span>▤</span> Projetos</a><a className="nav-link" href="#explorar"><span>◫</span> Explorar</a><a className="nav-link" href="#ajuda"><span>ⓘ</span> Central de ajuda</a></nav>
        <div className="sidebar-bottom"><div className="sidebar-help"><span>✧</span><strong>Organize melhor seus projetos</strong><p>Concentre tudo em um único lugar.</p><button onClick={() => notify('Bem-vindo ao PulseDesk! Explore os componentes da página.', 'success')}>Começar agora ↗</button></div><div className="sidebar-user"><span className="avatar">PD</span><div><strong>Workspace Demo</strong><small>Plano de demonstração</small></div></div></div>
      </aside>
      <div className="main-column"><header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>Visão geral</strong></div><div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'} title="Alternar tema">{theme === 'dark' ? '☼' : '☾'}</button><button className="icon-button notification-button" onClick={() => notify('Você está em dia com as atualizações.', 'info')} aria-label="Ver notificações">♧<span className="notification-dot" /></button><span className="avatar avatar-small">PD</span></div></header>
        <main id="inicio" className="content"><div className="page-heading"><div><div className="eyebrow"><span className="sparkle">✦</span> SEU ESPAÇO DE PRODUTIVIDADE</div><h1>Seu trabalho, <span>mais claro.</span></h1><p>Uma visão inteligente de tudo o que está acontecendo nos seus projetos.</p></div><button className="primary-button" onClick={() => notify('Projeto de demonstração criado com sucesso!', 'success')}><span>＋</span> Novo projeto</button></div>
          <section className="stats-grid" aria-label="Indicadores gerais"><div className="stat-card"><div className="stat-icon violet">▤</div><span>Total de projetos</span><strong>{projects.length.toString().padStart(2, '0')}</strong><small><b>↗ +2</b> neste mês</small></div><div className="stat-card"><div className="stat-icon blue">◷</div><span>Em andamento</span><strong>{(projects.length - completed).toString().padStart(2, '0')}</strong><small>Projetos ativos</small></div><div className="stat-card"><div className="stat-icon green">✓</div><span>Concluídos</span><strong>{completed.toString().padStart(2, '0')}</strong><small><b>Ótimo trabalho!</b></small></div><div className="stat-card"><div className="stat-icon orange">↗</div><span>Progresso médio</span><strong>{average}%</strong><ProgressBar value={average} label="Progresso médio geral" /></div></section>
          <section id="projetos" className="section-block"><div className="section-header"><div><div className="eyebrow">ACOMPANHAMENTO</div><h2>Projetos em destaque <span className="count-tag">{filteredProjects.length}</span></h2><p>Acompanhe as entregas e o progresso de cada equipe.</p></div><Dropdown options={categoryOptions} value={category} onChange={changeCategory} /></div><div className="projects-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</div><div className="list-footer"><span>Exibindo {filteredProjects.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filteredProjects.length)} de {filteredProjects.length} projetos</span><Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} /></div></section>
          <div className="bottom-grid"><section id="explorar" className="section-block info-block"><div className="eyebrow">CONHEÇA MAIS</div><h2>Explore o PulseDesk</h2><p>Uma plataforma feita para simplificar sua rotina.</p><Tabs items={tabItems} /></section><section id="ajuda" className="section-block info-block"><div className="eyebrow">PRECISA DE AJUDA?</div><h2>Perguntas frequentes</h2><p>Encontre respostas para as dúvidas mais comuns.</p><Accordion items={faqItems} /></section></div>
          <footer className="footer">© 2026 PulseDesk · Atividade React.js <span>Feito com React e CSS responsivo</span></footer>
        </main>
      </div>
    </div>
    {selectedProject && <div className="modal-backdrop" onMouseDown={(e) => {
      if (e.target === e.currentTarget)
        setSelectedProject(null);
    }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fechar detalhes">×</button><div className="eyebrow">DETALHES DO PROJETO</div><h2 id="modal-title">{selectedProject.name}</h2><p>{selectedProject.description}</p><dl><div><dt>Categoria</dt><dd>{selectedProject.category}</dd></div><div><dt>Equipe</dt><dd>{selectedProject.team}</dd></div><div><dt>Prazo</dt><dd>{selectedProject.deadline}</dd></div></dl><ProgressBar value={selectedProject.progress} /><button className="primary-button modal-action" onClick={() => { notify(`Detalhes de “${selectedProject.name}” visualizados.`, 'success'); setSelectedProject(null); }}>Entendi</button></section></div>}
    <Toast />
  </div>;
}
