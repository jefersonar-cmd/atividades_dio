function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 ={
    nome: 'maria',
    idade: 80,
}

const pessoa2={
    nome:'carla',
    idade: 22,
}

const animal ={
    nome:'pipit',
    idade: 1,
    raca: 'calopsita',
}

console.log(calculaIdade.call(pessoa2, 30))