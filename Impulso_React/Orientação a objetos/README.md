# Orientação a objetos

## Objetivos

1. Explicar o conceito de Orientação a Objetos
2. Apresentar seus principais pilares
3. Explicar como Javascript lida com esse paradigma

---

## Percurso

### Aula 1 - Introdução

#### 	Objetivos

1. Apresentar alguns paradigmas da programação

   - **Paradigms**
     - *Imperative*
       - Procedural
       - Object Oriented
       - Parallel Processing
     - *Declarative*
       - Logic
       - Functional
         - Dataflow
       - Database

2. Apresentar os pilares da Orientação a Objetos

   - **Paradigmas**

     - Os programas são "objetos" que possuem uma série de propriedades.

     - *Pilares*

       - Herança

         - "O objeto filho herda propriedades e métodos do objeto pai"
         - *Exemplo*
           - :family:
             - Father (Inheritance) | Mother (Parents Propriety)
               - Child

       - Polimorfismo

         - "Objetos podem herdar a mesma classe pai, mas se comportam de forma diferente quando invocamos seus métodos."
         - *Exemplo*
           - "Comunicação" - Pai
             - Animais
               - Gato: Meow
               - Pato: Quack
               - Cachorro: Woof
             - Humanos
               - Now Speak!

       - Encapsulamento

         - "Cada classe tem propriedades e métodos independentes do restante do código"

         - *Exemplo*

           - ```javascript
             class
             {
                 data members
                 	  +
                 methods(behavior)
             }
             ```

             

       - Abstração

         - "Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo"
         - *Exemplo*
           - Vehicle
             - :sailboat:
             - Wheeled Vehicle
               - :bike:
               - :car:
                 - type 1 :car:
                 - type 2 :car:

### Aula 2 - No Javascript (OOJS)

#### 	Objetivos

1. Apresentar o conceito de protótipos e cadeia de protótipos

   - **Protótipos**

     - Todos os objetos Javascript herdam propriedades e métodos de um prototype. ("Herdam os esqueleto base do prototype").

       O objeto Object.prototype está no topo da cadeia.

     - *Cadeia de Protótipos (prototype chain)*

       - *Exemplo*
         - Crow
           - Bird
             - Animal.constructor
               - Function
                 - Function.prototype.constructor
                   - Object () {}
                     - Object.prototype = null;

2. Apresentar a estrutura de classes em Javascript

   - **Classes**

     - *Syntatic sugar:* uma sintaxe feita para facilitar a escrita

       - OLD :x:

         - ```javascript
           var Meal = function(food){
               this.food = food
           }
           
           Meal.prototype.eat = function(){
               return ':smile:'
           }
           ```

           

       - NEW :ok:

         - ```javascript
           class Meal {
               constructor (food) {
                   this.food = food
               }
               
               eat() {
                   return ':smile:'
               }
           }
           ```

     - Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.

       - ```javascript
         class Animal{
             //constructor
             constructor(type = 'animal'){
                 this.type = type
             }
             //getter
             get type(){
                 return this._type
             }
             //setter
             set type(val){
                 this._type = val.toUpperCase()
             }
             
             makeSound(){
                 console.log('Making animal sound')
             }
         }
         
         let a = new Animal()
         console.log(a.type)//AN
         ```

         ```javascript
         class Cat extends Animal {
             constructor(){
                 //super
                 super('cat')
             }
             
             //Método
             makeSound(){
                 super.makeSound()
                 console.log('Meow!')
             }
         }
         
         let b = new Cat()
         console.log(b.type)//CAT
         ```

         

### Aula3 - Atividade Prática

