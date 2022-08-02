"use strict";
var anysEstaDeVolta;
anysEstaDeVolta = 3;
anysEstaDeVolta = 'teste';
anysEstaDeVolta = 5;
var stringsTest = 'verifica';
stringsTest = anysEstaDeVolta;
var unknownsValor;
unknownsValor = 3;
unknownsValor = 'opa';
unknownsValor = true;
unknownsValor = 'vai sim';
var stringsTest2 = 'agora vai';
if (typeof unknownsValor === 'string') {
    stringsTest2 = unknownsValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
//# sourceMappingURL=never.js.map