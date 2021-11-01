# Javascript Assíncrono

## Objetivos

1. Explicar o conceito de assincronicidade
2. Apresentar Promises
3. Ensinar como fazer requisições de APIs

---

## Percurso

### Aula 1 - Assincronicidade

- **Definição**
  - *Assíncrono*
    - "Que não ocorre ou não se afeta ao executar funções ao mesmo tempo"
  - Javascript roda de maneira *síncrona*
    - *Syschronous*
      - O cliente requisita algo do servidor. A ação do cliente é parada, para executar a ação do servidor (requisitada pelo cliente). Após a finalização, a ação do cliente é continuada.
    - *Asynchronous*
      - O cliente requisita algo ao servidor. Servidor executa e o cliente durante a execução poderá continuar com suas ações. Após o término, o servidor entrega da requisição ao cliente, sem interrompe o cliente.

- #### Objetivos

  1. Explicar o que são Promises

     - Objeto de processamento assíncrono

     - *Exemplo*

       - ```javascript
         //Peding
         Promise{
             //Resolved
             .then()
             
             //Rejected
             .catch()
         }
         //cria um novo promise
         ```

     - Inicialmente, seu valor é desconhecido. Ele pode, então, será *resolvida* ou *rejeitada*

  2. Ensinar como manipulá-las

     - **Promises**

       - Uma promise pode ter 3 estados

         1. Pending
         2. Fulfilled
         3. Rejected

       - Estrutura

         - ```javascript
           const myPromise = new Promise((resolve, reject) => {
               window.setTimeout(() => {
                   resolve(console.log('Resolvida!'));
               }, 2000);
           });
           ```

       - Manipulação

         - ```javascript
           const myPromise = new Promise((resolve, reject) => {
               window.setTimeout(() => {
                   resolve(console.log('Resolvida!'));
               }, 2000);
           });
           
           await myPromise
           	.then((result) => result + ' passando pelo then')
           	.then((result) => result + ' e agora acabou!')
           	.catch((err) => console.log(err.message))
           
           // após 2 segundos retornará o valor
           // "Resolvida passando pelo then e agora acabou!"
           ```

           

  3. Apresentar as palavras-chave "async" e "await"

     - **Async/Await**

       - Funções assíncronas precisam dessas duas palavras chaves.

         - ```javascript
           async function resolvePromisse(){
               const myPromise = new Promise((resolve, reject) => {
               	window.setTimeout(() => {
                   	resolve(console.log('Resolvida!'));
               	}, 2000);
           	});
               
               const resolved = await myPromise
           		.then((result) => result + ' passando pelo then')
           		.then((result) => result + ' e agora acabou!')
           		.catch((err) => console.log(err.message))
               
               
               return resolved
           }
           ```

         - Também é possível utilizar o *Try...Catch*

           - ```javascript
             async function resolvePromisse(){
                 const myPromise = new Promise((resolve, reject) => {
                 	window.setTimeout(() => {
                     	resolve(console.log('Resolvida!'));
                 	}, 2000);
             	});
                 
                 let result
                 
                 try{
                     result = await myPromise
             			.then((result) => result + ' passando pelo then')
             			.then((result) => result + ' e agora acabou!')
                 }catch{
                     result = err.message
                 }
                 
                 
                 return result
             }
             ```

             

### Aula 2 - Consumindo APIs

- #### Objetivos

  1. Explicar o que são APIs

     - *Application Programming Interface*

     - Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end

       Você consegue acessá-la por meio de URLs.

       ![image](https://i.imgur.com/6d3ridG.png)

     - É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.

       - *JSON:* JavaScript Object Notation

       - ```json
         {
             "description": "schema POST bank",
             "type": "object",
             "proprieties": {
                 "id": {
                     "type": "number",
                     "minimum": 0
                 },
                 "code": {
                     "type": "string"
                 },
                 "name": {
                     "type": "string"
                 }
             }
         }
         ```

         

  2. Ensinar como lidar com requisições dessas APIs

  3. Como utilizar método Fetch()

     - Consumindo APIs

       - ```javascript
         fetch(url, options)
         	.then(response => response.json())
         	.then(json => console.log(json))
         
         //retorna uma Promise
         ```

     - Operações no banco (POST, GET,  PUT, DELETE, etc)

       - ```javascript
         fetch('https://endereco-api.com/', {
             method: 'GET',
             cache: 'no-cache',
         })
         	.then(response => response.json())
         	.then(json => console.log(json))
         
         //retorna uma Promise
         ```

       - ```javascript
         fetch('https://endereco-api.com/', {
             method: 'GET',
             cache: 'no-cache',
             body: JSON.stringify()
         })
         	.then(response => response.json())
         	.then(json => console.log(json))
         
         //retorna uma Promise
         ```

         

### Aula 3 - Atividade Prática