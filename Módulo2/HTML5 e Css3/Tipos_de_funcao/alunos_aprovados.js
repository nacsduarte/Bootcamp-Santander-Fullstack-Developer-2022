/* 
1- Crie uma função que recebe o array alunos que irá representar a media final.
2 - Percorra (com o for) o array e popule um novo array auxiliar apenas com  os alunos cujas notas são maiores ou iguais a média final
3 - Utilize a técnica "object destructing " para manipular as propriedades desejadas de cada aluno

 */

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Samyra',
        nota: 10,
        turma: '4B',
    },
    {
        nome: 'Natalia',
        nota: 10,
        turma: 'EB',
    },
    {
        nome: 'Miguel',
        nota: 2,
        turma: 'EB',
    },

];

function alunosAprovados(arr, media) {
let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados; 
}

console.log(alunosAprovados(alunos, 5));