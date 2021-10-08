# Intro ao CSS3

Após a criação do HTML, foi visto a necessidade de customização das páginas para melhor visualização de seu conteúdo.
Em 1996 o CSS foi criado para suprir esse problema.
Basicamente ele cria regra de posicionamento e estilização de cada objeto dentro do html.

- CSS contém um recurso chamado Box model que separa cada conteúdo do HTML em quatro áreas:
  - Magin
    - São espaçamentos entre elementos. 
  - Border
    - Circundam o padding e o conteúdo
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
- temos também a propriedade **background**, que pode ser usada com sub-propriedades específicas, como:
  - backgroud-
    - color
    - image
    - position

## Objetivos da Aula:

* O que são seletores
  *  São elementos html, onde são nomeados para melhor edição.
* Conceitos Básicos
* Principais seletores CSS3
  * ID: é precedido por um "#", o mesmo só pode ser usado uma vez na página em que foi inserido.
  *  Classe: é precedido por um "." 