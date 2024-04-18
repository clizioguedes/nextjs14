# Projeto NEXT JS

Este repositório contém um código base para projetos NEXT JS, tanto para aplicações logadas quanto para aplicações com páginas.

## Estrutura de Pastas

- **.azuredevops**: Armazena o template dos Pull Requests, ajustado de acordo com o repositório do projeto (Azure, GitHub, GitLab, etc).
- **.vscode**: Configurações específicas para o TypeScript nos projetos abertos no Visual Studio Code.
- **.generators**: Pasta responsável por guardar as configurações do Plop gerador de componentes padrão a partir de scripts localizados no `package.json`.
- **src/app**: Contém as páginas da aplicação, seguindo o roteamento dinâmico do Next.js.
- **src/assets**: Armazena imagens, fontes e outros recursos estáticos utilizados no projeto.
- **src/components**: Componentes reutilizáveis em toda a aplicação.
- **src/constants**: Arquivos TypeScript que armazenam constantes utilizadas em diversos pontos do código.
- **src/containers**: Agrupa pequenas partes de uma página ou páginas inteiras que utilizam os componentes.
- **src/entities**: Interfaces e tipos de dados utilizados na aplicação.
- **src/hooks**: Hooks customizados reutilizáveis, facilitando a lógica compartilhada entre componentes.
- **src/lib**: Contém pequenas utilidades e configurações internas do projeto.
- **src/services**: Responsável pela comunicação com serviços externos à aplicação, como APIs, tratando requests e responses.
- **src/store**: Configuração do estado global da aplicação, como gerenciamento de estados utilizando Zustand ou Redux e etc.
- **src/styles**: Arquivos relacionados a estilos, como CSS, SCSS, ou styled-components, além de tokens e temas da aplicação.
- **src/types**: Define os tipos globais utilizados em todo o projeto.

## Como Iniciar o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. Certifique-se de ter o [Yarn](https://yarnpkg.com/) instalado.
2. Execute o comando `yarn install` para instalar as dependências do projeto.
3. Execute o comando `yarn dev` para iniciar o servidor de desenvolvimento.
4. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

---

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades! Se tiver alguma dúvida ou problema, abra uma issue e teremos prazer em ajudar.