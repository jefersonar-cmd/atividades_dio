let nome = 'Jefferson';
let sobreNome = 'Souza';

console.log(nome);
console.log(typeof(nome));
console.log(nome.length);
console.log(sobreNome);
console.log(typeof(sobreNome));
console.log(sobreNome.length);

let concatenado = nome.concat(sobreNome);

console.log(concatenado);
console.log(typeof(concatenado));
console.log(concatenado.length);

concatenado = nome + " " + sobreNome;
console.log(concatenado);

concatenado = nome + "\n" + sobreNome;
console.log(concatenado);

concatenado = `${nome} ${sobreNome}`;
console.log(concatenado);