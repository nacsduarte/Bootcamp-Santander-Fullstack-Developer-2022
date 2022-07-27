let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verifica'
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor= 'vai sim';

let stringTest2: string = 'agora vai';

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}
