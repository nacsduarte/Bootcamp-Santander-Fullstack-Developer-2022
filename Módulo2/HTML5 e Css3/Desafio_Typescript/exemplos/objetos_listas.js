"use strict";
const pessoa = {
    Nome: 'Samyra',
    Idade: 26,
    Profissão: 'desenvolvedora'
};
pessoa.Idade = 25;
const Hugo = {
    Nome: 'Andre',
    Idade: 25,
    Profissao: 'carteiro'
};
const Gilda = {
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
const Vanessa = {
    Nome: 'Vanessa',
    Idade: 23,
    Profissao: profissao.Desenvolvedora
};
const Maria = {
    Nome: 'Maria',
    Idade: 73,
    Profissao: profissao.Desenvolvedora
};
const Jessica = {
    Nome: 'Jessica',
    Idade: 36,
    Profissao: profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação', 'Lógica']
};
const Monica = {
    Nome: 'Jessica',
    Idade: 36,
    Profissao: profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação', 'Lógica']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Monica.materias);
