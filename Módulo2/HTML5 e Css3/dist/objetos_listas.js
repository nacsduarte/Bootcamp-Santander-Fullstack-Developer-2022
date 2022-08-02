"use strict";
var pessoa = {
    Nome: 'Samyra',
    Idade: 26,
    Profissão: 'desenvolvedora'
};
pessoa.Idade = 25;
var Hugo = {
    Nome: 'Andre',
    Idade: 25,
    Profissao: 'carteiro'
};
var Gilda = {
    Nome: 'André',
    Idade: 25,
    Profissao: 'desenvolvedora'
};
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(profissao || (profissao = {}));
var Vanessa = {
    Nome: 'Vanessa',
    Idade: 23,
    Profissao: profissao.Desenvolvedora
};
var Maria = {
    Nome: 'Maria',
    Idade: 73,
    Profissao: profissao.Desenvolvedora
};
var Jessica = {
    Nome: 'Jessica',
    Idade: 36,
    Profissao: profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação', 'Lógica']
};
var Monica = {
    Nome: 'Jessica',
    Idade: 36,
    Profissao: profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação', 'Lógica']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(Monica.materias);
//# sourceMappingURL=objetos_listas.js.map