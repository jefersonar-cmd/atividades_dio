# Coleções Chaveadas

## Objetivos do Curso

1. Apresentar o objeto Map

   1. Apresentar a coleção Map

      ```javascript
      const myMap = new Map()
      ```

      - Características:

        - Uma coleção de arrays no formato [chave, valor];
        - Pode iterado por um loop for...of

      - Métodos: Adicionar, Ler e Deletar

        ```javascript
        const myMap = new Map()
        
        myMap.set('apple', 'fruit');
        // Map(1) {'apple' => 'fruit'}
        
        myMap.get(apple);
        // 'fruit'
        
        myMap.delete('apple')
        // true
        
        myMap.get('apple')
        // undefined
        ```

        

   2. Explicar sua aplicação

   3. Explicar a diferença entre Map e Objeto

      1. Map
         - Maps podem ter chaves de qualquer tipo
         - Maps possuem a propriedade length
         - Maps são mais fáceis de iterar
         - Utilizado quando o valor das chaves é desconhecido
         - Os valores tem o mesmo tipo
      2. Objeto

2. Apresentar o objeto Set

   1. Apresentar a coleção Set

      1. Estrutura

         ```javascript
         const myArray = [1,1,7,7,3,4,5,6,7,8,2,1];
         
         const mySet = now Set(myArray);
         ```

         Sets são estruturas que armazenam apenas *valores únicos*

   2. Explicar sua aplicação

      1. *Métodos*

         - Adicionar, Consultar e Deletar

           ```javascript
           const mySet = new Set();
           
           mySet.add(1);
           mySet.add(5);
           
           mySet.has(1);
           // true
           
           mySet.has(3);
           //false
           
           mySet.delete(5);
           ```

           

   3. Explicar a diferença entre Set e Array

      1. Set
         - Possui valores únicos
         - Em vez de propriedade length, consulta-se o número de registros pela propriedade size
         - Não possui os métodos map, filter, reduce e etc.