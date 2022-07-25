/*crie uma função que recebe uma lista de preços e um número retornando
o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada*/

const lista = [
    {
name: 'sabão',
preco: 30
    },
{
    name: 'toalha',
    preco: 12

},
{
    name: 'cereal',
    preco: 30
}


];

const saldoDisponivel = 100;
function calculaSaldo(saldoDisponível, lista){
   return lista.reduce(function (prev, current, index) {
console.log('rodada', index +1);
console.log([prev]);
console.log({current});
return prev - current.preco;
    } , saldoDisponivel);
    
}

return console.log(calculaSaldo(saldoDisponivel, lista));