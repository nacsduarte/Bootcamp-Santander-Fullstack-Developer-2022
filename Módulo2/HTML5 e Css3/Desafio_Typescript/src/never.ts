let anysEstaDeVolta: any;
anysEstaDeVolta = 3;
anysEstaDeVolta = 'teste';
anysEstaDeVolta = 5;

let stringsTest: string = 'verifica'
stringsTest = anysEstaDeVolta;

let unknownsValor: unknown;
unknownsValor = 3;
unknownsValor = 'opa';
unknownsValor = true;
unknownsValor= 'vai sim';

let stringsTest2: string = 'agora vai';

if(typeof unknownsValor === 'string'){
    stringsTest2 = unknownsValor;
}

function jogaErro(erro: string, codigo: number):never{

    throw{ error: erro, code:codigo}
}

jogaErro('deu erro', 500)