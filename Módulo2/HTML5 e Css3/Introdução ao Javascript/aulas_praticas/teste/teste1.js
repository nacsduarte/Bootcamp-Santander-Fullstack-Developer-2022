//console.log("Hello world, consegui pleura!!!"); para usar o console

/*COm o node instalada e terminal aberto podemos avaliar se nosso
código está ok, através do comando node nomedoarquivo.js.*/


//Funtion- ---

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {

            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} "não é par!`)
        }
    }
    console.log('os números pares são:', evenNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
returnEvenValues(array);
