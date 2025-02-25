# 📌 Portfólio Interativo - Designer

## 🌟 Sobre o Projeto
Este projeto consiste em um **site portfólio interativo** para um designer, desenvolvido com **React, Node.js e MongoDB**. Ele apresenta uma interface **minimalista com um toque retrô**, garantindo uma experiência fluida e responsiva. Os projetos são carregados dinamicamente a partir do banco de dados e exibidos em uma galeria interativa.

## 🚀 Tecnologias Utilizadas
- **Frontend:** React, Axios, Styled Components
- **Backend:** Node.js, Express, MongoDB
- **Banco de Dados:** MongoDB (Mongo Compass para gestão)
- **Hospedagem de imagens:** Imgur (armazenamento de links para otimizar a aplicação)

## 🔥 Principais Funcionalidades
- 📂 **Renderização dinâmica** dos projetos a partir do MongoDB
- 🎨 **Estética minimalista retrô**, com design responsivo para diferentes dispositivos
- 🖱️ **Interação com hover**: ao passar o mouse sobre um projeto, um card exibe título e tags
- 🔍 **Detalhamento ao clique**: uma janela modal exibe informações completas sobre cada projeto
- 🚀 **Performance otimizada**, carregando apenas links das imagens para evitar sobrecarga

## 🛠️ Como Rodar o Projeto
### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

### 2️⃣ Configurar o Backend
```bash
cd backend
npm install
```
- Criar um arquivo **.env** e definir:
  ```env
  MONGO_URI=sua_string_de_conexao
  IMGUR_CLIENT_ID=sua_chave_do_imgur
  PORT=5000
  ```
- Rodar o servidor:
```bash
npm start
```

### 3️⃣ Configurar o Frontend
```bash
cd frontend
npm install
npm start
```
O site estará disponível em `http://localhost:3000`.



