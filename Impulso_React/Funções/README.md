# Funções

## Objetivos do Curso

1. Mostrar como declarar funções
2. Como Manipular parâmetros
3. Apresentar loops e outras declarações
4. Apresentar o argumento "this"

---

### Percurso

1. *Aula 1* - Tipos de Funções

   - *Objetivos*

     - Apresentar a estrutura de uma função

       - **Estrutura**

         - Definição comum de uma função

           ```javascript
           function nome (parametro) {
           	//parametro
           	return;
           }
           ```

           

           - Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela
           - quando invocamos o "return", *a função para de ser executada*.

     - Alguns outros tipos de funções e como são utilizadas

       - *Função Anônima*

         - Funções que representam expressões

           ```javascript
           const soma = function (a, b){
               return a + b;
           }
           
           soma(1, 2)// 3
           soma(5, 4)// 9
           ```

           - Uma variável pode armazenar uma função.

       - *Função Autoinvocável*

         - IIFE (Immediately Invoked Function Expression)

         - Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

           ```javascript
           {
               function(){
                   let name = "Digital Innovation One"
                   return name;
               }
           }();
           
           // Digital Innovation One
           ```

         - Também pode ser utilizada com parâmetros ou armazenada em uma variável.

           ```javascript
           {
               function(a, b){
                   return a + b;
               }
           }(1, 2);
           
           // 3
           ```

           ```javascript
           const soma3 = {
               function(){
                   return a + b;
               }
           }(1, 2);
           
           console.log(soma3) // 3
           ```

       - *Callbacks*

         - Uma função passada como argumento para outra.

         - Utilizando callbacks, você tem o maior controle da ordem de chamadas.

           ```javascript
           const calc = function(operacao, num1, num2){
               return operacao(num1, num2);
           }
           
           const soma = function(num1, num2){
               return num1 + num2;
           }
           
           const sub = function(num1, num2){
               return num1 - num2;
           }
           
           const resultSoma = calc(soma, 1, 2);
           const resultSub = calc(sub, 1, 2);
           
           console.log(resultSub); // -1
           console.log(resultSoma); // 3
           ```

   ---

2. *Aula 2* - Parâmetros

   - *Objetivos*
     1. Ensinar como manipular parâmetros de uma função
     2. Técnicas para lidar com números indefinidos de parâmentros

   ---

   - **Valores Padrão**

     - *Pré-ES2015*

       ```javascript
       function exponencial(array, num){
           if(num === undefined){
               num = 1;
           }
           
           const result = [];
           
           for(let i = 0; i < array.length; i++){
               result.push(array[i] ** num);
           }
           
           return result;
       }
       
       exponencial([1,2,3,4])
       //[1,2,3,4]
       
       exponencial([1,2,3,4],4)
       //[1,8,27,64]
       ```

     - *Pós-ES2015*

       ```javascript
       function exponencial(array, num =1){
           const result = [];
           
           for(let i = 0; i < array.length; i++){
               result.push(array[i] ** num);
           }
           
           return result;
       }
       
       exponencial([1,2,3,4])
       //[1,2,3,4]
       
       exponencia([1,2,3,4],4)
       //[1,8,27,64]
       ```

   - **Objeto "argments"**

     - Um array com todos os parâmetros passados quando a função foi invocada.

       ```javascript
       function findMax() {
           let max = -Infinity;
           
           for(let i = 0; i < arguments.length; i ++){
               if(arguments[i] > max){
                   max = arguments[i];
               }
           }
           
           return max;
       }
       
       findMax(1,2,3,6,90,1)
       // 90
       ```

   ---

   - *Arrays e Objetos*

     - **Arrays**

       - **Spread:** uma forma de lidar separadamente os elementos.

         - O que era parte de um array, se torna um elemento independente.

           ```javascript
           function sum(x,y,z){
               return x + y + z;
           }
           
           const numbers = [1, 2, 3];
           
           console.log(sum(...numbers));
           ```

           

       - **Rest**: Combina os argumentos em um array

         - O que era um elemento independente, se torna parte de um array.

           ```javascript
           function confereTamanho(...args){
               console.log(args.length)
           }
           
           confereTamanho(); //0
           confereTamanho(1,2); //2
           confereTamanho(3,4,5); //3
           ```

     ---

     - **Objetos**

       - Object Destructuring

         - Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

           ```javascript
           const user = {
               id: 42,
               displayName: 'John',
               fullName: {
                   firstName: 'John',
                   lastName: 'Doe'
               }
           };
           
           function userId({id}){
               return id;
           }
           
           function getFullName({fullName: {firstName: first, lastName: last}}){
               return `${first} ${last}`;
           }
           
           userId(user);
           // 42
           
           getFullName(user);
           // John Doe
           ```

   ---

3. *Aula 3* - Loops

   - *Objetivos*
     1. Ensinar como utilizar algumas das mais famosas declarações do JavaScript.

   ---

   - **IF/ELSE**

     ```javascript
     function numeroPositivo(num){
         let resultado;
         // if(Condição){faça}
         if(num < 0){
             //declaração 1 (dentro do if):
             //Ocorre caso a condição seja verdadeira
             resultado = false;
         } else {
             //declaração 2 (dentro do else):
             //Ocorre caso a condição seja falsa
             resultado = true
         }
         
         return resultado;
     }
     
     numeroPositivo(2)
     // true
     
     numeroPositivo(-9)
     // false
     ```

   - Mesmo código, porém curto e mais legível

     ```javascript
     function numeroPositivo(num) {
         let resultado;
         
         const ehNegativo = num < 0;
         
         if(ehNegativo){
             resultado = false;
         } else {
             resultado = true;
         }
         
         return resultado;
     }
     ```

   - Mesmíssimo código, porém mais curto e super legível

     ```javascript
     function numeroPositivo(num){
         const ehNegativo = num < 0;
         
         if(ehNegativo) {
             return false
         }
         
         return true;
     }
     ```

   - JavaScript *não possui elseif*, as palavras sempre estão espaçadas: *else if*

     ```javascript
     function numeroPositivo(num){
         const ehNegativo = num < 0;
         const maiorQueDez = num > 10;
         
         if(ehNegativo) {
             return "Este número é negativo!";
         } else if (!ehNegativo && maiorQueDez){
             return "Esse número é positivo e maior que 10!";
         }
         
         return "Esse número é positivo!";
     }
     ```

     ---

   - **Switch/case**

     - Equivale a uma comparação de tipo e valor (===)

     - Sempre precisa de um valor "default"

     - Ideal para quando se precisa comparar muitos valores

       ```javascript
       function getAnimal(id){
           switch(id){
               case 1:
                   return "cão";
               case 2:
                   return "gato";
               case 3:
                   return "pássaro";
               default:
                   return "peixe"
           }
       }
       
       getAnimal(1) // cão
       getAnimal(4) // peixe
       getAnimal("1") // peixe
       ```

   ---

   - **For**

     - Loop dentro de elementos iteráveis (array, strings).

       ```javascript
       function multiplicaPorDois(arr){
           let multiplicados = [];
           
           for(let i = 0; i < arr.length; i++){
               multiplicados.push(arr[i] * 2);
           }
           
           return multiplicados;
       }
       
       const meusNumeros = [2,33,456,356,40];
       
       multiplicaPorDois(meusNumeros);
       //[4,66,912,712,80]
       ```

     - *For ... In*

       - Loop entre propriedades enumeráveis de um objeto.

         ```javascript
         function forInExemplo(obj){
             for(prop in obj){
                 console.log(prop);
             }
         }
         
         const meuObjeto = {
             nome: "João",
             idade: "20",
             cidade: "Salvador"
         }
         
         forInExeplo(meuObjeto);
         // nome
         // idade
         // cidade
         ```

         ```javascript
         function forInExemplo(obj){
             for(prop in obj){
                 console.log(obj[prop]);
             }
         }
         
         const meuObjeto = {
             nome: "João",
             idade: "20",
             cidade: "Salvador"
         }
         
         forInExeplo(meuObjeto);
         // João
         // 20
         // Salvador
         ```

     - *For...Of*

       - Loop entre iteráveis (arrays, strings).

         ```javascript
         function logLetras(palavra){
             for(letra of palavra){
                 console.log(letra);
             }
         }
         
         const palavra = "abacaxi";
         
         logLetras(palavra);
         // a
         // b
         // a
         // c
         // a
         // x
         // i
         ```

         ```javascript
         function logNumeros(nums){
             for(num of nums){
                 console.log(num);
             }
         }
         
         const nums = [30,20,233,2];
         
         logNumeros(nums);
         // 30
         // 20
         // 233
         // 2
         ```

   ---

   - **While e Do...While**

     - *While*: Executa instruções até que a condição se torne falsa

       ```javascript
       function exemploWhile(){
           let num = 0;
           
           while(num <= 5){
               console.log(num);
               num++;
           }
       }
       
       exemploWhile()
       // 0
       // 1
       // 2
       // 3
       // 4
       // 5
       ```

     - *Do...While*: Executa instruções até que a condição se torne falsa.

       ```javascript
       function exemploDoWhile(){
           let num = 0;
           
           do {
               console.log(num);
               num++;
           } while(num <= 5)
       }
       
       exemploDoWhile()
       // 0
       // 1
       // 2
       // 3
       // 4
       // 5
       ```

       ```javascript
       function exemploDoWhile(){
           let num = 6;
           
           do {
               console.log(num);
               num++;
           } while(num <= 5)
       }
       
       exemploDoWhile()
       // 6
       ```

     - Porém *a primeira execução sempre ocorre.*

   ---

4. *Aula 4* - A palavra "This"

   	#### Objetivos

   1. Apresentar a palavra "this" e seu uso

      1. **This: o que é?**

         - A palavra reservada *this* é uma referência de contexto.

           ```javascript
           const pessoa = {
               firstName: "André",
               lastName: "Soares",
               id: 1,
               fullName: function(){
                   return this.firstName + " " + this.lastName;
               }
               getId: function(){
                   return this.id;
               }
           };
           
           pessoa.fullName();
           // 'André Soares'
           
           pessoa.getId();
           // 1
           ```

           No exemplo, this refere-se ao objeto pessoa.

         - Seu valor pode mudar de acordo com o lugar no código onde foi chamado.

           |       Contexto        |               Referência               |
           | :-------------------: | :------------------------------------: |
           | Em um objeto (método) |     Próprio objeto dono do método      |
           |        Sozinha        | Objeto global (em navegadores, window) |
           |        Função         |             Objeto global              |
           |        Evento         |     Elemento que recebeu o evento      |

         - *Fora da função*

           ```javascript
           console.log(this);
           ```

         - *Dentro de uma uma função*

           ```javascript
           (function(){
               console.log(this);
           })();
           ```

           

   2. Como aplicar métodos para manipular seu valor

      1. *Call*

         ```javascript
         const pessoa = {
             nome: 'Miguel',
         };
         
         const animal = {
             nome: 'Murphy',
         }
         
         function getSomething(){
             console.log(this.nome);
         }
         
         getSomething.call(pessoa);
         // Miguel
         
         getSomething.call(animal);
         // Murphy
         ```

         É possível passar parâmetros para essa função separando-os por vírgulas.

         ```javascript
         const myObj = {
             num1: 2,
             num2: 4,
         };
         
         function soma(a,b){
             console.log(this.num1 + this.num2 + a + b);
         }
         
         soma.call(myObj, 1, 5);
         // 12
         ```

      2. *Apply*

         ```javascript
         const pessoa = {
             nome: 'Miguel',
         };
         
         const animal = {
             nome: 'Godi',
         }
         
         function getSomething(){
             console.log(this.nome);
         }
         
         getSomething.aplly(pessoa);
         // Miguel
         
         getSomething.aplly(animal);
         // Godi
         ```

         É possível passar parâmetros para essa função dentro de um array.

         ```javascript
         const myObj = {
             num1: 2,
             num2: 4,
         };
         
         function soma(a,b){
             console.log(this.num1 + this.num2 + a + b);
         }
         
         soma.apply(myObj, [1, 5]);
         // 12
         ```

      3. *Bind*

         Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

         ```javascript
         const retornaNomes = function(){
             return this.nome;
         };
         
         let bruno = retornaNomes.bind({nome: 'Bruno'});
         
         bruno();
         // Bruno
         ```

         

5. *Aula 5* - Arrow functions

   1.  Apresentar a sintaxe de arrow functions

      - *Sintaxe*

        ```javascript
        const helloWorld = function (){
            return "Hello World";
        }
        ```

        ```javascript
        const helloWorld = () => {
            return "Hello World";
        }
        ```

        ```javascript
        const helloWorld = () => "Hello World";
        ```

        - Caso exista apenas uma linha, pode dispensar as chaves e o return.

          ```javascript
          const soma = (a, b) => a + b;
          
          soma(4,6);
          // 10
          ```

          

        - Caso exista apena um parâmetro, pode dispensar os parênteses.

          ```javascript
          const soma = a => a;
          
          soma(4);
          // 4
          ```

      - Arrow function *NÃO* faz hoisting!

        - Correto:

          ```javascript
          soma(2,4);
          function soma(a,b){
              return a + b;
          }
          ```

        - Incorreto:

          ```javascript
          soma(2,4);
          const soma = (a,b) => a + b;
          ```

      - **Restrições**

        - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
        - Não existe o objeto "arguments";
        - O construtur (ex.: new MeuObjeto()) também não pode ser utilizado.

6. *Aula 6* - Atividade Prática
