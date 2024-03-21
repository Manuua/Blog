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
<h2> Aplicação no heruko </h2>

https://meu-blog-d6031f413975.herokuapp.com/api-docs/#/default/get_autores

Pendências : banco na aplicação não conectado só funciona no localhost

conectar com o banco remoto usando dbever por exemplo: (obs: os dados são uma replica do que tenho no localhost) 

host : ec2-54-204-143-182.compute-1.amazonaws.com

database: dc0ufh192npodk

user: u9qcc4rbnelejf

senha : p0f2d2d03875eba0d1f56b4cb42ab9e66cf732b4a9a5c45d3b7ba25aaf3954179

<H2> Pendências </H2>

- Banco não conectado na aplicação provisionada utilizando Heruko, ao fazer requisições o  Swagger retornará erro.
- Teste unitários apenas no frontend, para rodar do teste é necessários entrar na pasta <code> cd frontend </code>
- As tabelas ficaram simples
- não instalei diversos pacotes como eslint


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
