"use strict";
let anysEstaDeVolta;
anysEstaDeVolta = 3;
anysEstaDeVolta = 'teste';
anysEstaDeVolta = 5;
let stringsTest = 'verifica';
stringsTest = anysEstaDeVolta;
let unknownsValor;
unknownsValor = 3;
unknownsValor = 'opa';
unknownsValor = true;
unknownsValor = 'vai sim';
let stringsTest2 = 'agora vai';
if (typeof unknownsValor === 'string') {
    stringsTest2 = unknownsValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
