## Chatbot BackEnd com Node.Js e Express

Este é um chatbot desenvolvido para o desafio da Lexart. No front foi utilizado React, e Node.js, Express no backend. Ele permite que os usuários iniciem uma conversa e obtenham informações sobre empréstimos. O chatbot também armazena o histórico das conversas em um banco de dados MongoDB.

##Pré-requisitos

Antes de começar, verifique se você possui o seguinte instalado em sua máquina:

- Node.js (https://nodejs.org/)

##Instalação

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1- Clone o repositório e instale as dependencias

```bash
git clone git@github.com:Gab-Agrela/lexart-chatbot-backend.git
cd lexart-chatbot-backend
npm install
```

2- Configure o banco de dados MongoDB

```bash
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nome-do-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

3- Configure as variaveis de ambiente e rode o BackEnd

```bash
npm start
```
