# Variáveis e Tipos

## Objetivo do Curso

- Explicar as principais estruturas de dados do JavaScript, como utilizá-las e suas possibilidades.

---

### Percurso

- **Aula 1** - Atribuindo valores

  - *Objetivos*

    - *Explicar o que são variáveis*

      - Variáveis são blocos de informação reservado na memória do computador para realizar operações.
      - Ao se declarar uma variável, você simplesmente está "falando" para o seu computador reservar um bloco da memória RAM (**Random Access Memory**) e armarzenar aquela informação (podendo ser uma string, número, boleano e assim por diante) desejada temporáriamente.

    - *Explicar o que são constantes*

      - São declaradas em SNAKE_UPPER_CASE
      - Possui Escopo de Bloco
      - Não fazem Hoisting
      - Não pode ser Redeclarada ou Reatribuida
      - Como nome diz, esse bloco de informação armazenada na memória é constante, não podendo ser alterada. Irá se manter o mesmo valor até o fim de vida do seu código.

    - *Explicar a diferença entre var, const e let*

      - *Var e Let*

        - *Var:* declara um valor global ao um item
        - *Let:* declara um valor sobre a mesma várial global, porém valendo para dentro de uma função ou condição, fora dela passa a não valer mais e o mesmo retorna ao valor original.

      - *Hoisting:* Você pode atribuir um valor a variável, antes mesmo de declarar ela.

        - Por conta desse tipo de prática, alguns programadores chamam o JS de "terra sem lei."

      - *Redeclaração:*

        - Utilizando o let dentro de uma função ou condição (if).

      - *Reatribuição:*

        - simplimente pegar a variável já declarada e dar a ela um novo valor.
          - Exemplo:
            - var n1 = 1
            - reatribuindo valor a mesma variável
            - n1 = 5

      - *camelCase*

        | Case Type                   | Exemple          |
        | --------------------------- | ---------------- |
        | Original Variable as String | some awesome var |
        | Camel Case                  | someAwesomeVar   |
        | Snake Case                  | some_awesome_var |
        | Kebab Case                  | some-awesome-var |
        | Pascal Case                 | SomeAwesomeVar   |
        | Upper Case Snake Case       | SOME_AWESOME_VAR |

      - *Var, Let e Const*

        |              |       VAR       |  LET  | CONST |
        | :----------: | :-------------: | :---: | :---: |
        |   *escopo*   | global ou local | bloco | bloco |
        | *redeclarar* |       SIM       |  NÃO  |  NÃO  |
        | *reatribuir* |       SIM       |  SIM  |  NÃO  |
        |  *hoisting*  |       SIM       |  NÃO  |  NÃO  |

        

- **Aula 2** - Tipos

  - *Objetivos*

    - Apresentar as principais estruturas de dados do JavaScript e seus principais métodos.

    - **Estruturas de Dados**

      - JavaScript é uma linguagem de *Tipagem Dinâmica*.

        Ou seja, antes de declarar um valor, não é necessário especificar o *tipo* dele.

      - ![image](https://i.imgur.com/ooVmz1E.png)

      - *String*

        - Comumente utilizado para textos
        - Valores declarados entre aspa
        - *Métodos importantes:*
          - Concatenação
          - Propriedade *length*
          - Iterabilidade
          - Formatação
          - Index das Letras
        
      - *Numbers*
      
        - Números inteiros ou Decimais
        - Operações aritiméticas
      
      - *Booleans*
      
        - Te retorna
      
          - *True*
      
            ou
      
          - *False*
      
      - *Array*
      
        - Listas Iteráveis de elementos
      
      - *Objetos*
      
        - ![image](https://i.imgur.com/nhk2ERV.png)
      
      - *Empty, Null e Undefined*
      
        - *Empty*
          - declarou a variável como (vazio)
            - 0
            - " "
            - []
            - {}
        - *Null*
          - quando propositalmente quer que o valor não exita.
        - *Undefined*
          - Não existe variável e valor, propositalmente.

- **Aula 3** - Atividade Prática

  - *Objetivos*

    - Exercitar os conceitos aprendidos nas aulas anteriores.

    - **Atividades**

      1. *Palíndromo*

         - Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

           *Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*

      2. *Substituir números pares*

         - Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

           - Exemplo: 

             Input -> [1, 3, 4, 6, 80, 33, 23, 90]

             Output -> [1, 3, 0, 0, 0, 33, 23, 0]

             Input -> []

             Output -> -1

