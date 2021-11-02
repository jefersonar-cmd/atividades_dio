# Map, Filter e Reduce

## Objetivos

1. Demonstrar a utilização de três métodos importantes para Arrays.

---

## Percurso

### Aula 1 - Map

- Objetivos

  1. Conhecer a implementação do método map

     - O que é MAP

       - ![](https://i.imgur.com/SwZlov7.png)
       - Cria um novo Array
       - Não modifica o array original
       - realiza as operações em ordem

     - Sintaxe

       - ```javascript
         array.map(callback, thisArg)
         ```

       - ```javascript
         callback(item, index, array)
         ```

         - *Callback:* função a ser executada em cada elemento
         - *thisArg (opcional):* valor de 'this' dentro da função de callback

     - Map vs forEach

       - Método Map

         - ```javascript
           const array = [1,2,3,4,5]
           array.map((item) => item * 2)
           //retorno: [2,4,6,8,10]
           ```

           

       - Método forEach

         - ```javascript
           const array = [1,2,3,4,5]
           array.forEach((item) => item * 2)
           //retorno: undefined
           ```

       - Diferença

         - Valor a ser retornado
         - Considere se o array auxiliar será necessário

### Aula 2 - Filter

- Objetivos

  1. Conhecer a aplicação do método filter

     - O que é FILTER

       ![](https://i.imgur.com/KGf5CJY.png)

       - Cria um novo array, listando apenas com os itens que passaram no filtro
       - Não modifica o array original

     - Sintaxe

       - ```javascript
         array.filter(callback, thisArg)
         ```

         - *Callback:* função a ser executada em cada elemento.
         - *thisArg (opcional):* valor de 'this' dentro da função de callback

       - Exemplo:

         - ```javascript
           const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']
           
           frutas.filter((fruta) => fruta.includes('maça'))
           
           //retorno: ['maçã fuji', 'maçã verde']
           ```

           

### Aula 3 - Reduce

- Objetivos

  1. Conhecer a aplicação do método reduce

     - O que é REDUCE

       - Executa uma função em todos os elementos do array, retornando um único valor

     - Sintaxe

       - ```javascript
         array.reduce(callbackFn, initialValue)
         ```

         - *Callback:* função a ser executada a partir do acumulador
         - *initialValue:* valor sobre o qual o retorno final irá atuar

       - Exemplo:

         - ```javascript
           const callbackFn = function(accumulator, correntValue, index, array){
               // do something
           }
           
           array.reduce(callbackFn, initialValue)
           ```

           - *Accumulator/prevValue:* acumulador de todas as chamadas de callbackFn
           - *initialValue:* elemento atual sendo acessado pela função

### Aula 4 - Atividade Prática