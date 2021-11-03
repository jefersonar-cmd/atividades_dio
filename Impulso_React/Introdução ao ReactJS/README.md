# Introdução ao ReactJS

## Percurso

### Aula 1

1. História e Conceitos
   - "Uma biblioteca JavaScript para criar interfaces de usuário" - ReactJS
   - Versão atual 17.0.2 (01/11/2021)
   - Criado em 2011 por Jordan Walke no Facebook
   - Baseado no XHP, um framework para criação de HTML no PHP
   - Utilizado no moral de notícias da ferramenta
   - 2012 - Utilizado no Instagram
   - 2013 - Anúncio para liberação OpenSource na JSconfUS
   - 2015 - React Native
   - 2015 - UWP (Universal Windows Plataform)
   - React é uma biblioteca e não um framework
   - A principal função é a criação da interface para o usuário
   - React é uma linguagem declarativa
   - Declarativa e Imperativa
   - O React está preocupado apenas com o que é exibido na interface do usuário
   - React é baseado em componentes
   - Pode ser utilizado em qualquer lugar
   
2. Configuração
   - React Create App
   - React Scripts
   - Task Runners e Bundler Sizers
   - React é uma Single Page Application
     - Ele irá baixar todo seu projeto e irá apresentar todas as suas rotas.
   
3. O que é JSX

   - Exemplo de JSX

     ```jsx
     const  element = <h1>Hello, world</h1>;
     ```

     - Nem é HTML e nem é uma String.

   - Rect não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes.

     Não é obrigatório a utilização do JSX.

     Sintax Suggar para React.createElement.

     O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

4. Renderização

   - Renderização de Elementos
   - React DOM
   - Nós Raiz
   - React "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com com tempo, o que faz ter ganho de performance e evitar uma série de erros.

5. Componentes e Props

   - Função e Classe
   - Props
   - Composição de Componentes
   - Extração de Componentes

6. Estado e Ciclo de Vida

   - Inicialização

   - Montagem

   - Atualização

   - Desmontagem

   - Nenhum componente pai ou filho devem saber se outro componente possui estado ou não

     O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props

7. Ecossistema

   - React Router
   - Redux
   - Material UI
   - Ant-Design
   - Storybook
   - Gatsbt
   - Jest
   - React i18n Next

---

### Aula 2

1. O que é Webpack

   - É um *module bundler* (um empacotador de módulos para aplicações JS)

     Gerar bundler que será utilizado no HTML, em ES5

     *Link oficial:* https://webpack.js.org/

   - Suporte

     - Fontes
     - CSS
     - Imagens
     - HTML
     - JS
     - Plugins

2. Configuração

   - Principais conceitos do Webpack:
     - Entry - utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências
     - Output - É para determinar quais são os bundlers que o Webpack irá emitir
     - Loaders - é para permitir que o Webpack gerencie arquivos que não são Javascript
     - Plugins - podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.
     - Mode - utilizados para abordagem de configuração zero. é possível configurar módulos como *production, development ou none.*
       - *Production* - trás otimizações internas
       - *Development* - é executado com três plugins: UglifyJsPlugin, ModuleConcatenationPlugin e NoEmitOnErrorsPlugin
     - Criação do arquivo webpack.config.js
       - npm -i -D webpack webpack-cli
       - "build": "webpack --mode production"
       - npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

3. Criando um Dev Server

4. EsLint

---

### Aula 3

1. Renderização Condicional
   - Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação.
   - Variáveis de Elementos
   - If inline com o Operador Lógico &&
   - If-Else inline com Operador Condicional
   - Evitando que um Componente seja Renderizado
2. Listas e Chaves
   - Renderizando Múltiplos Componentes
   - Componente de Lista Básica
   - Chaves
   - Extraindo Componentes com Chaves
   - Chaves devem ser Únicas apenas entre Elementos Irmãos
3. Manipulação de Eventos
   - Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos do DOM. Existem algumas diferenças sintáticas:
     - Eventos em React são nomeados usando camelCase ao invés de letras minúsculas.
     - Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.
4. Pensando no jeito React
   - Comece com um Mock
   - Separe a UI Em Uma Hierarquia de Componentes
   - Crie uma versão Estática em React
   - Identifique a Representação Mínima (mas completa) do State da UI
   - Identifique Onde o State Deve Ficar
   - Adicione o Fluxo de Dados Inverso
