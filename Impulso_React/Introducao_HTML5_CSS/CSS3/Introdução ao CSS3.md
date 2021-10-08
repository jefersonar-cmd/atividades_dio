# Intro ao CSS3

Após a criação do HTML, foi visto a necessidade de customização das páginas para melhor visualização de seu conteúdo.
Em 1996 o CSS foi criado para suprir esse problema.
Basicamente ele cria regra de posicionamento e estilização de cada objeto dentro do html.

## Objetivos da Aula:

* O que são seletores
  *  São elementos html, onde são nomeados para melhor edição.
* Conceitos Básicos
* Principais seletores CSS3
  * ID: é precedido por um "#", o mesmo só pode ser usado uma vez na página em que foi inserido.
  *  Classe: é precedido por um "." 
* CSS contém um recurso chamado Box model que separa cada conteúdo do HTML em quatro áreas:
  - Magin
    - São espaçamentos entre elementos. 
  - Border
    - Circundam o padding e o conteúdo
    - Border como todas as outras propriedades, possui sub-propriedades para formatação/modificação específica.
      - A borda pode ser editada pela sua largura, cor e estilo
        - largura: pixel, centímetros, milímetros...
        - cor: nome da cor (em inglês), hexadecimal e RGB.
        - estilo: solid, dotted (pontilhado), dashad (tracejado)...
  - Padding
    - é o espaçamento entre a border e o content
    - padding: 10px 5px;
      - 10px = superior
      - 5px = inferior
    - padding: 15px 10px 5px 0;
      - 15px = topo
      - 10px = direita
      - 5px = inferior
      - 0 esquerda
    - Pode-se ser usado formatação de partes específicas do padding. Isso é mais usado quando temos um padding com 3 lados iguais e somente 1 diferente.
  - Content
    - é o texto, a imagem e etc.
* temos também a propriedade **background**, que pode ser usada com sub-propriedades específicas, como:
  - backgroud-
    - color
      - pode-se ser usado a sub color ou não
        - o programado poderá especificar a cor por Hexadecimal, RGB (Red, Green and Blue) ou pelo nome da cor.
    - image
    - position
* Para alteração de estilos de textos
  - font-family: altera a fonte do texto
  - font-size: altera o tamanho do texto
  - font-sytle: altera o estilo da fonte
  - font-weight: altera o peso do texto
  - text-transform:
    - uppercase: deixa o texto em caixa alta
    - lowercase: deixa o texto em caixa baixa
    - capitalize: Todas as primeiras letras em caixa alta
  - text-decoration:
    - uderline: deixa uma linha em baixo do texto
    - overline: deixa uma linha acima do texto
    - line-through: deixa uma linha sobre o texto
* Estilização de Listas
  - list-style-type
    - ul: alterando o marcador da lista não ordenada
      - square
    - ol: alterando o marcador da lista ordena:
      - upper-roman
    - ul: alterando o marcador da lista não ordenada
      - "\1F44D"
        - símbolo de um Joinha
  - Também é possível alterar o marcador para uma imagem, pelo comando:
    - list-style-image
      - usando a
        - url("nome_da_imagem.extensão");
* **Dimensão e Alinhamento**
  * propriedades básicas
    * Width
    * Height
    * Max-width
    * Max-height
    * Margin
    * Tex-align