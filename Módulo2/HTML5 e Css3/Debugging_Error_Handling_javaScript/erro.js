function validaArrays(arr, num){
    try {
        if(!arr && !num) throw ReferenceError("Insira os parâmetros");

if(typeof arr !=='object') throw new TypeError("Array precisa ser do tipo object");

if(typeof arr !=='number') throw new TypeError("Array precisa ser do tipo number");

if(arr.length !== num) throw new RangeError('Tamanho Inválido!');

return arr;
    } catch (e) {
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}
}

console.log(validaArrays([1, 2, 3], 3));

        


