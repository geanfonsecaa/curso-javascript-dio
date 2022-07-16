function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: "Gean",
    idade: 30,
}

const pessoa2 = {
    nome: "Carlos",
    idade: 28,
}

const animal = {
    nome: "Nino",
    idade: 5,
    raca: "Pug",
};

console.log(calculaIdade.call(animal, 10));
console.log(calculaIdade.apply(pessoa2, [50]));