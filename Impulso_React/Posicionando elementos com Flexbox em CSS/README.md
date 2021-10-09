# Objetivo do Curso

Apresentar os fundamentos e aplicações da propriedade **flexbox** na criação de layouts responsivos, sem a necessidade a definição de valores fixos.

## Percurso

- **Aula 1:** Introdução ao Flexbox

  - ### Objetivos da aula

  - Conhecer a estrutura básica

    - Foi projetado como modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.
      - Navegadores suportados
        - Chrome >= 29.0
        - Edge >= 11.0
        - Firefox >= 10
        - Opera >= 48

  - Entender a diferença entre Flex Container e Flex Item

    - **Flex Container**
      - É a tag que envolve os itens, será nela que iremos aplicar a propriedade "display: flex". Transformando todos os itens filhos em flex itens.
    - **Flex Item**
      - São os elementos filhos diretos do Flex Container. E também podem se tornar Flex Container.

  - Conhecer inicialmente alguma propriedade

    - propriedades relacionadas Flex Container:
      - display
      - flex-direction
      - flex-wrap
      - flex-flow
      - justify-content
      - align-items
      - align-content
    - Propriedades relacionadas Flex Item:
      - flex-grow
      - flex-basis
      - flex-shrink
      - flex
      - order
      - align-self

- **Aula 2:** Fundamentos do Flexbox

  - **Estrutura básica do display: flex**
    - **Objetivo da Aula**
      - Conhecer e aplicar a propriedade de inicialização do flex container
  - **Estrutura básica Flex Direction**
    - **Objetivo da Aula**
      - Entender o comportamento padrão de orientação horizontal de um flex container
      - Aprender a modificar esse padrão horizontal
    - Fex-direction: É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.
    - **Os eixos**
      - row (padrão): à direção do texto, esquerda para direita
      - row-reverse: sentido oposto à direção do texto
      - column: ordenação de cima para baixo, em uma coluna única
      - column-reverse: ordenação inversa, de baixo para cima
  - **Estrutura básica Flex Wrap**
    - **Objetivo da Aula**
    - É a propriedade que define se os itens devem ou não quebrar linha
    - Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.
    - nowrap: é o padrão, não permite a quebra de linha
    - wrap: permite a quebra de linha assim que um flex itens não puder mais ser compactado
    - wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder ser compactado, porém na direção oposta da linha;
  - **Estrutura básica Flex Flow**
    - É um atalho para as propriedades **flex-direction** e **flex-wrap**
    - Porém seu uso não é tão comum, visto que, quando mudamos o flex direction para column, mantemos o padrão do flex wrap que é nowrap
  - **Estrutura básica Justify Content**
    - Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.
      - obs.: caso o item esteja ocupando 100% do container, essa propriedade não se aplica.
    - **Variações**
      - flex-start: início do container
      - flex-end: final do container
      - center: ao centro do container
      - space-between: cria um espaço igual entre os elementos
        - ele vai pegar o primeiro item e deixa muito próximo ao início do container, e a próxima ao fim do container
      - space-around: os espaçamentos do meio são duas vezes maiores que o inicial e o final
  - **Estrutura básica Align Items**
    - Trata do alinhamento dos flex itens de acordo com o eixo do container
    - O alinhamento é diferente para quando os itens estão em colunas ou linhas
    - permite o alinhamento central no eixo vertical
    - **Tipos de Alinhamentos**
      - center: alinhamento dos itens ao centro
      - stretch: padrão, os flex itens cresçam igualmente
      - flex-start: alinhamento dos itens no início
      - flex-end: alinhamentos dos itens no final
      - baseline: alinhamento de acordo com a linha base da tipografia dos itens

- **Aula 3:** Projeto Integrador