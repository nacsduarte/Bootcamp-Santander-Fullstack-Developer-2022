/*Para que não ocorra algum erro no código e uma função retorne um tipo diferente do qual esperamos. Podemos nos proteger
definindo o valor de nossos parâmetros e o tipo de retorno que esperamos*/

function somarValoresNumericos(num1:number, num2:number):number{ /*:number ao final da função garante que ela irá retornar um número*/
return num1 + num2 ;
}

console.log(somarValoresNumericos(1,3));


function PrintaValoresNumericos (num1:number, num2:number): void{
    console.log(num1+num2) /*void não retorna nada ou seja função com ausencia de valores*/
}