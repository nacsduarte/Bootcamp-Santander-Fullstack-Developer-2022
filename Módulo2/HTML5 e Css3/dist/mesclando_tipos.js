"use strict";
/*function somarValores(input1:number | string, input2:number) {

if(typeof input1 === "string" || typeof input2 === 'string'){
    return input1.toString() + input2.toString();
} else {
    return input1 + input2;
}
}
*/
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else
        return input1 + input2;
}
console.log(somarValores(1, 15));
console.log(somarValores('Olá,', 'tudo bem?'));
console.log(somarValores('Hoje é dia ', 18));
//# sourceMappingURL=mesclando_tipos.js.map