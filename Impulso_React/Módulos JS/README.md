# Trabalhando com Módulos em JavaScript

### Objetivos do Curso

1. Explicar a necessidade do uso de módulos
2. Ensinar como utilizá-los

---

### Percurso

#### 	Utilização - Aula 1

- **Objetivos**

  1. Explicar o que são os módulos em Javascript

     - O que são Módulos:

       - São arquivos Javascript que tem a capacidade de *exportar* e *importar* informações de *outros arquivos* do memso tipo.

     - Vantagens do Uso:

       - Organização do código
       - Compartilhamento de variáveis em escopos diferentes
       - explicitar as dependências dos arquivos

     - Exportando Funções

       - Named exports

         ```javascript
         export function mostraIdade(pessoa){
             return `A idade de ${pessoa.nome} é ${pessoa.idade}`
         }
         
         export function mostraCidade(pessoa){
             return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
         }
         
         export function mostraHobby(pessoa){
             return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`
         }
         ```

         ```javascript
         function mostraIdade(pessoa){
             return `A idade de ${pessoa.nome} é ${pessoa.idade}`
         }
         
         function mostraCidade(pessoa){
             return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
         }
         
         function mostraHobby(pessoa){
             return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`
         }
         
         export {
         	mostraIdade,
             mostraCidade,
             mostraHobby
         }
         ```

       - Default exports

         ```javascript
         function mostraIdade(pessoa){
             return `A idade de ${pessoa.nome} é ${pessoa.idade}`
         }
         
         function mostraCidade(pessoa){
             return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
         }
         
         function mostraHobby(pessoa){
             return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`
         }
         
         export {
         	mostraIdade,
             mostraCidade,
             mostraHobby
         }
         
         export default mostraHobby();
         ```

         - Só pode haver um por arquivo
         - Será o retorno padrão do seu arquivo

     - Importando funções

       - Named exports:

         ```javascript
         import {funcao, variavel, classe} from './arquivo.js'
         ```

       - Default exports:

         ```javascript
         import valorDefault from './arquivo.js'
         ```

       - Trocando nomes de imports:

         ```javascript
         import {arquivo as Apelido} from './arquivo.js'
         
         Apelido.metodo();
         ```

       - Importando todos os dados de um arquivo:

         ```javascript
         import * as INFOS from './arquivos.js'
         
         INFOS.metodoA();
         console.log(INFOS.variavel);
         ```

     - Vinculando ao HTML

       ```html
       <script type="module" src"./main.js"></script>
       ```

       Para fazer testes localmente (de um arquivo no seu computador), será necessário estar rodando um servidor. Isso pode ser feito utilizando a extensão "Live Server", do VSCode.

     - Curiosidades

       - Módulos sempre estão em "strict mode"
       - Podem ser utilizadas as extensões .js e .mjs
       - Para testes locais, é necessário utilizar um servidor
       - Ao importar, sempre lembre da extensão (.js, .mjs)
       - Ao importar, sempre utilize "./" como ponto de partida.

  2. Ensinar a como utilizar esses módulos

  3. Alertar para algumas particularidades

#### 	Atividade Prática - Aula 2