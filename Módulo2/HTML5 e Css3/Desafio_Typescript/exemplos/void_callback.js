"use strict";
function PrintValoresNumericos(num1, num2) {
    console.log(num1 + num2); /*void não retorna nada ou seja função com ausencia de valores*/
}
function somaValoresNumericos(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividePorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericos(4, 3, aoQuadrado));
console.log(somaValoresNumericos(1, 3, dividePorEleMesmo));
