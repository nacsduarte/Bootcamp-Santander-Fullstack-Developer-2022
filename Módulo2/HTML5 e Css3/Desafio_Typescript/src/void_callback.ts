function PrintValoresNumericos (num1:number, num2:number): void {
    console.log(num1+num2) /*void não retorna nada ou seja função com ausencia de valores*/

}

    function somaValoresNumericos(num1:number, num2:number, callback:(numero: number)=> number):number{ /*:number ao final da função garante que ela irá retornar um número*/
let resultado = num1 + num2;

    return callback(resultado) ;
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividePorEleMesmo(numero: number): number{
    return numero / numero;
}
console.log(somaValoresNumericos(4, 3, aoQuadrado))
console.log(somaValoresNumericos(1, 3, dividePorEleMesmo  ))



