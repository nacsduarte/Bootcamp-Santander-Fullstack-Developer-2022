//* filtre e retorne todos os  numeros pares do array*/

function filtraPares(arr){

    return arr.filter(callback);

}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 68, 55, 98, 64, 65, 31, 33];
console.log(filtraPares(meuArray));



/*Para retornar os valores impares podemos alterar
de não lógico ( return item % 2 !=== 0)*

Para retornar valores pares utilizamos o operador === ) */
