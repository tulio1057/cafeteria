☕ Cafeteria - Projeto Web

Visão Geral do Projeto

Este projeto é uma aplicação web moderna, desenvolvida com React, que simula o site de uma cafeteria. O objetivo principal é apresentar o cardápio, a história da cafeteria, informações de contato e a localização física, utilizando tecnologias atuais de desenvolvimento front-end.

O projeto foi inicializado com Create React App e utiliza uma arquitetura baseada em componentes, garantindo modularidade e fácil manutenção.

🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas principais:

Categoria
Tecnologia
Versão
Descrição
Framework
React
19.2.0
Biblioteca JavaScript para construção de interfaces de usuário.
Roteamento
React Router DOM
7.9.4
Gerenciamento de navegação e rotas da aplicação.
Estilização
Styled Components
6.1.19
Estilização de componentes com CSS-in-JS.
Mapas
React Leaflet / Leaflet
5.0.0 / 1.9.4
Exibição de mapas interativos para a localização da cafeteria.
Formulárioss
React Hook Form
7.65.0
Gerenciamento e validação de formulários de forma eficiente.
Notificações
React Toastify
11.0.5
Exibição de notificações (toasts) para feedback ao usuário.
Requisições HTTP
Axios
1.12.2
Cliente HTTP baseado em Promises para fazer requisições a APIs.


🚀 Funcionalidades

O site da cafeteria oferece as seguintes seções e funcionalidades:

Rota
Componente Principal
Descrição
/
Home.js
Página inicial com destaque para a cafeteria.
/menu
Menu.js
Apresentação do cardápio completo, carregado a partir de src/data/menuData.js.
/sobre
Sobre.js
História e informações sobre a cafeteria.
/contato
Contato.js
Formulário de contato para comunicação com a cafeteria.
/localizacao
Localizacao.js
Mapa interativo (utilizando Leaflet) mostrando a localização física.


⚙️ Instalação e Execução

Para configurar e rodar o projeto em seu ambiente local, siga os passos abaixo.

Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou Yarn) instalados em sua máquina.

1. Clonar o Repositório

Bash


git clone https://github.com/tulio1057/cafeteria.git
cd cafeteria


2. Instalar as Dependências

Instale todas as dependências do projeto listadas no package.json:

Bash


npm install
# ou
yarn install


3. Executar o Projeto

Inicie a aplicação em modo de desenvolvimento. Ela será executada em http://localhost:3000.

Bash


npm start
# ou
yarn start


O navegador abrirá automaticamente a página, e a aplicação será recarregada sempre que você fizer alterações nos arquivos fonte.

4. Construir para Produção

Para criar uma versão otimizada do projeto para deploy (produção):

Bash


npm run build
# ou
yarn build


Os arquivos de produção serão gerados na pasta build/.

🤝 Contribuição

Contribuições são bem-vindas! Se você deseja melhorar o projeto, siga estas etapas:

1.
Faça um fork do projeto.

2.
Crie uma branch para sua funcionalidade (git checkout -b feature/nova-funcionalidade).

3.
Faça o commit de suas alterações (git commit -m 'feat: Adiciona nova funcionalidade X').

4.
Faça o push para a branch (git push origin feature/nova-funcionalidade).

5.
Abra um Pull Request detalhado.

📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE (se existir) para mais detalhes.

📧 Contato

•
Autor: Tulio1057

•
Link do Repositório: https://github.com/tulio1057/cafeteria

