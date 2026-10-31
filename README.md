# PulseDesk — Atividade React.js

Aplicação web responsiva para acompanhamento de projetos, criada para a atividade **React.js — Engenharia de Software**.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Acesse o endereço informado pelo Vite (normalmente http://localhost:5173).

## Executar no GitHub Codespaces (ambiente solicitado no enunciado)

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta** para ele.
2. No repositório, clique em **Code > Codespaces > Create codespace on main**.
3. Aguarde a configuração do devcontainer. Ele executa `npm install` automaticamente.
4. No terminal, execute `npm run dev`.
5. Abra a porta 5173 pela aba **Ports**, ou utilize o preview automático.
6. Teste a aplicação em diferentes resoluções usando o modo responsivo do navegador.

## Funcionalidades solicitadas

| Requisito | Arquivo | Como testar |
|---|---|---|
| Acordeão | `src/components/Accordion.jsx` | Expanda e recolha perguntas frequentes. Apenas um item fica aberto. |
| Paginação | `src/components/Pagination.jsx` | Em **Projetos em destaque**, avance e volte entre páginas e selecione números diretamente. |
| Barra de progresso | `src/components/ProgressBar.jsx` | Veja os indicadores nos cartões e no resumo geral. |
| Abas | `src/components/Tabs.jsx` | Alterne entre Visão geral, Fluxo de trabalho e Insights. |
| Menu suspenso | `src/components/Dropdown.jsx` | Filtre os projetos por categoria. O menu fecha após seleção, clique fora ou Escape. |
| Toast | `src/components/Toast.jsx` | Clique em **Novo projeto**, no sino, em **Começar agora** ou selecione filtros. A notificação some após 4,5 segundos ou ao clicar em ×. |

### Desafio extra: Context API

O estado global está em `src/context/AppContext.jsx`. É compartilhado por componentes não diretamente relacionados, controlando **tema claro/escuro** e **fila de notificações** através do hook `useApp()`.

### Outros recursos

- React funcional com `useState`, `useMemo`, `useEffect`, `useContext` e `useCallback`.
- Props, callbacks e eventos React.
- Modal com dados do projeto selecionado.
- Layout adaptável para celular, tablet e desktop com media queries.
- HTML semântico, labels e atributos ARIA, suporte básico ao teclado e preferência por movimento reduzido.
- CSS próprio, sem dependências de biblioteca visual.
- Dados ilustrativos em `src/data/content.js`; não utiliza servidor ou persistência.

## Estrutura

```text
src/
├── App.jsx                  # Componente principal
├── main.jsx                 # Entrada do React
├── components/
│   ├── Accordion.jsx
│   ├── Dropdown.jsx
│   ├── Pagination.jsx
│   ├── ProgressBar.jsx
│   ├── ProjectCard.jsx
│   ├── Tabs.jsx
│   └── Toast.jsx
├── context/
│   └── AppContext.jsx       # Desafio extra: estado global
├── data/
│   └── content.js
└── styles/
    └── global.css
```

## Verificar a compilação

```bash
npm run build
npm run preview
```

## Entrega e autoria

O enunciado informa que a atividade é **individual** e exige **vídeo explicativo gravado pelo estudante** e utilização do **GitHub Codespaces**. O ZIP contém o código-base completo, mas o vídeo não está incluído: execute, compreenda, personalize e grave sua própria demonstração. Um roteiro está em `ROTEIRO_VIDEO.md`.

## Se aparecer uma tela branca

1. Verifique se abriu o endereço exibido pelo Vite (normalmente `http://localhost:5173/`).
2. No terminal, execute `npm install` e depois `npm run dev`.
3. No navegador, pressione **F12**, abra **Console** e confira os erros em vermelho.
4. Se houver erro de dependências, apague `node_modules` e execute `npm install` novamente.
5. Confirme que o terminal está aberto na pasta que contém o `package.json`.

Esta versão inclui um ErrorBoundary para exibir erros de renderização na página.


## Correção do JSX (React is not defined)

Todos os componentes JSX importam explicitamente `React` para compatibilidade com a transformação JSX clássica padrão do Vite sem plugin adicional.
