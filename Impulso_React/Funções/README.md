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
           
           console.log(soma3) // 
           ```

           

2. *Aula 2* - Parâmetros

3. *Aula 3* - Loops

4. *Aula 4* - A palavra "This"

5. *Aula 5* - Arrow functions

6. *Aula 6* - Atividade Prática
