# Manipulando a D.O.M. com JavaScript

### Objetivos

- [ ] Explicar o que é *DOM*
- [ ] Esclarecer as Diferenças entre o *DOM* e o *BOM*
- [ ] Principais métodos para manipular páginas da web

---

### Percurso

1. *Aula 1*: O que é DOM

   1. Explicar o que é o DOM

      - Significa: *Document Object Model*
      - O DOM HTML é um padrão de como **acessar e modificar os elementos HTML de uma página**

      1. Document
         1. Root Element 'html'
            1. Element 'head'
               1. Element 'title'
                  1. Text 'my title'
            2. Element 'body'
               1. Element 'a'
                  1. Atribute 'href'
                  2. Text 'my link'
               2. Element 'h1'
                  1. Text 'my header'

   2. Explicar a diferença entre DOM e BOM

      - BOM: Browser Object Model

        - Tudo que está dentro do objeto window.

        1. Window
           1. document (DOM)
           2. history
           3. location
           4. screen
           5. navigator

   ---

2. *Aula 2:* Selecionando elementos

   1. Apresentar a estrutura HTML

      1. Tag's: body, div, h1 e etc.

      2. Id's: pode ser nomeado somente uma vez por tag. cada Id é única.

      3. Classe: pode ser nomeado classes em várias tags

         1. Exemplo de estrutura

            ```html
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
            </head>
            <body>
                <h1 id="titulo">Minha página</h1>
            
                <section class="textos">
                    <h2>Sobre Mim</h2>
                    <p>Texto sobre a pessoa aqui.</p>
                </section>
            
                <section class="textos">
                    <h2>Meus Projetos</h2>
                    <ul>
                        <li>Projeto 1</li>
                        <li>Projeto 2</li>
                        <li>Projeto 3</li>
                    </ul>
                </section>
            </body>
            </html>
            ```

            ```html
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Exemplo querySelectorAll</title>
            </head>
            <body>
                <div class="primeira-classe segunda-classe">
                    <ul>
                        <li class="opcao">opcao 1</li>
                        <li class="opcao">opcao 2</li>
                        <li class="opcao">opcao 3</li>
                    </ul>
                </div>
            </body>
            </html>
            ```

            

   2. Apresentar métodos para interagir com os elementos de uma página.

      1. Exemplo de interações no JavaScript

         - Selecionando por:

           1. ID:

              ```javascript
              document.getElementById('titulo');
              /*
              <h1 id="titulo">Minha página</h1>
              */
              ```

              

           2. TagName:

              ```javascript
              document.getElementsByTagName('li');
              /*
              [
              <li>Projeto 1</li>
              <li>Projeto 2</li>
              <li>Projeto 3</li>
              ]
              */
              ```

              

           3. ClassName:

              ```javascript
              document.getElementsByClassName('textos');
              /*
              [
                  <section class="textos">
                      <h2>Sobre Mim</h2>
                      <p>Texto sobre a pessoa aqui.</p>
                  </section>
              
                  <section class="textos">
                      <h2>Meus Projetos</h2>
                      <ul>
                          <li>Projeto 1</li>
                          <li>Projeto 2</li>
                          <li>Projeto 3</li>
                      </ul>
                  </section>
              ]
              */
              ```

           4. querySelectorAll

              ```javascript
              document.querySelectorAll('.primeira-classe .segunda-classe');
              /*
              [
                  <div class="primeira-classe segunda-classe">
                      <ul>
                          <li class="opcao">opcao 1</li>
                          <li class="opcao">opcao 2</li>
                          <li class="opcao">opcao 3</li>
                      </ul>
                  </div>
              ]
              */
              
              document.querySelectorAll('li .opcao');
              /*
              [
                          <li class="opcao">opcao 1</li>
                          <li class="opcao">opcao 2</li>
                          <li class="opcao">opcao 3</li>
              ]
              */
              ```

         - *Adicionar e Deletar*

           |             Método              |         Descrição          |
           | :-----------------------------: | :------------------------: |
           | document.createElement(element) | Cria um novo elemento HTML |
           |  document.removeChild(element)  |     Remove um elemento     |
           |  document.appendChild(element)  |    Adiciona um elemento    |
           | document.replaceChild(new, old) |   Substitui um elemento    |

           

   ---

3. *Aula 3*: Trabalhando com estilos

   1. Ensinar como manipular estilos de elementos HTML

      1. *Classes*

         1. Element.classList

            ```html
            <div id="meu-elemento" class="classe">
                <!-- resto do código aqui -->
            </div>
            ```

            ```javascript
                const meuELemento = document.getElementById('meu-elemento');
            
                meuELemento.classList.add('novo-estilo');
                // Adiciona a classe 'meu-estilo'
            
                meuELemento.classList.remove('classe');
                // Remove a classe 'classe'
            
                meuELemento.classList.toggle("dark-mode");
                // Adiciona a classe 'dark-mode' caso ela não faça parte da
                // lista e remove ela caso faça.
            ```

         2. Acessando diretamente o CSS de um elemento

            ```javascript
            document.getElementsByTagName("p").style.color = "blue";
            ```

            

   ---

4. *Aula 4:* Eventos

   1. Explicar o que são eventos

      1. *Tipos*
         1. Eventos de mouse
            - mouseover
            - mouseout
         2. Eventos de clique
            - click
            - dbclick
         3. Eventos de atualização
            - change
            - load

   2. Apresenta eventos comumente utilizados

   3. Ensinar como acionar estes eventos

      1. *Event Listener*

         - Diretamente no Javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

           ```javascript
           const botao = document.getElementById("meuBotao");
           
           botao.addEventListener("click", outraFuncao);
           ```

      2. *Atributo HTML*

         - Especifica a função a ser chamada diretamente no elemento HTML.

           ```html
           <html>
               <body>
                   <h1 onclick="mudaTexto(this)">CLick aqui!</h1>
               </body>
           
               <script>
                   function mudaTexto(id){
                       id.innerHTML = "Mudei!";
                   }
               </script>
           </html>
           ```

           