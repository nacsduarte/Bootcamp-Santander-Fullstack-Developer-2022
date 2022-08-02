/*function somarValores(input1:number | string, input2:number) {

if(typeof input1 === "string" || typeof input2 === 'string'){
    return input1.toString() + input2.toString();
} else {
    return input1 + input2;
}
}
*/

// Pode-ser também criar tipos e fazendo sua combinação como no exemplo abaixo

type input = number|string;
function somarValores(input1:input | string, input2:input) {

    if(typeof input1 === "string" || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    } else 
        return input1 + input2;
}
console.log(somarValores(1,15))
console.log(somarValores('Olá,','tudo bem?'))
console.log(somarValores('Hoje é dia ', 18))