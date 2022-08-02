/* Dada a função calculeIdade, utilize os métodos call e apply para
modificar o valor de this - crie seus prórpios objetos
para esta atividade

function calculeIdade(anos) {
    return 'Daqui a $(anos, $(this,nome) terá $
{

    this.idade + anos
} anos de idade.';
}
*/

function calculeIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade:30,
};

const pessoa2 = {
    nome: 'JUlia',
    idade: 25,
};

const animal = {
    nome: 'Sofia',
    idade: 3,
    raca: 'Shih Tzu',
};

console.log(calculeIdade.call(pessoa1, 5));

console.log(calculeIdade.apply(animal, [5]));