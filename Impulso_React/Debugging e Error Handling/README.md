# Debugging e Error Handling

### Objetivos

1. Mostrar como lidar com erros e exceções
2. Ensinar como criar seu próprio erro personalizado

---

### Percurso

#### Aula 1 - Tipos de Erros

- Objetivos
  1. Apresentar o objeto Error do ECMAScript
     - Erros que ocorrem em tempo de execução
     - *Composto por:*
       - Mensagem
       - Nome
       - Linha
       - Call Stack
  2. Apresentar a DOMException
     - Erros relacionados ao Document Object Model (DOM)
     - Erro na estrutura linkados a página WEB

#### Aula 2 - Tratamento erros

- Objetivos

  1. Explicar a diferença entre "trhow" e "return"

     - Throw

       ```javascript
       function verificaPalindromo(string){
           if(!string) return "String inválida";
           
           return string === string.split('').reverse().join('');
       }
       
       verificaPalindromo('cal');
       ```

       ```javascript
       function verificaPalindromo(string){
           if(!string) throw "String inválida";
           
           return string === string.split('').reverse().join('');
       }
       
       verificaPalindromo('cal');
       ```

       

     - Return

  2. Apresentar a implementação da declaração try/catch

     ```javascript
     function verificaPalindromo(string){
         if(!string) throw "String inválida";
         
         return string === string.split('').reverse().join('');
     }
     
     function tryCatchExemplo(string){
         try {
             verificaPalindromo(string)
         }
         catch(e){
             console.log(e)
         }
     }
     
     tryCatchExemplo('');
     ```

     - Finally

       ```javascript
       function verificaPalindromo(string){
           if(!string) throw "String inválida";
           
           return string === string.split('').reverse().join('');
       }
       
       function tryCatchExemplo(string){
           try {
               verificaPalindromo(string)
           }
           catch(e){
               console.log(e)
           }
           finally{
               console.log('A string enviada foi: ' + string)
           }
       }
       
       tryCatchExemplo('');
       ```

       

#### Aula 3 - Criando erros

- Objetivos

  1. Explicar como manipular o objeto Error

     ```javascript
     new Error(message, fileName, lineNumber)
     
     // todos os parâmetros são opcionais
     
     const MeuErro = new Error('Mensagem Inválida');
     
     th
     ```

     