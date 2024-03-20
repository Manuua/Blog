# Blog
Crud com React e Node Js

Tecologias usadas, react com typescript no front e node express no backend

## Comandos NPM

### Iniciar em Modo de Desenvolvimento

Para iniciar o projeto em modo de desenvolvimento, utilize o seguinte comando:

<code>npm start </code>

Para rodar os testes entrar dentro da pasta por exemplo cd frontend

<code> npm test </code>

Para montar arquivos para deploy 

<code>npm run build </code>

<h2> Estrutura das pastas </h2> 


```bash

blog/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── ...
│   │   │
│   │   ├── components/
│   │   │   └── ...
│   │   │
│   │   ├── hooks/
│   │   │   └── ...
│   │   │
│   │   ├── pages/
│   │   │   └── ...
│   │   │
│   │   ├── types/
│   │   │   └── ...
│   │   │
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── ...
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   │   └── ...
│   │
│   ├── routes/
│   │   └── ...
│   │
│   ├── index.js
│   └── ...
│
├── package.json
├── tsconfig.json
└── README.md
