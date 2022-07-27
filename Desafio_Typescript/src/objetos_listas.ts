const pessoa = {
    Nome: 'Samyra',
    Idade: 26,
    Profissão: 'desenvolvedora'

};

pessoa.Idade = 25;

const Hugo : {Nome: string, Idade:number, Profissao: string} = {
Nome: 'Andre',
Idade: 25,
Profissao: 'carteiro'

}

const Gilda: {Nome: string, Idade:number, Profissao: string} = {
    Nome: 'André',
    Idade: 25,
    Profissao: 'desenvolvedora'

   }

   enum profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
   }

   interface Pessoa{
    Nome: string,
    Idade: number,
    Profissao?: profissao
   }

   interface Estudante extends Pessoa{
    materias: string[]
   }

const Vanessa: Pessoa = {
Nome: 'Vanessa',
Idade: 23,
Profissao: profissao.Desenvolvedora
   }
   const Maria: Pessoa = {
    Nome: 'Maria',
    Idade: 73,
    Profissao: profissao.Desenvolvedora
       }

    const Jessica: Estudante = {

        Nome: 'Jessica',
        Idade: 36,
        Profissao: profissao.Desenvolvedora,
        materias: ['Matemática discreta', 'Programação', 'Lógica']
    }

    const Monica: Estudante = {

        Nome: 'Jessica',
        Idade: 36,
        Profissao: profissao.Desenvolvedora,/*não se torna obrigatório, pois o ? em profisao não o torna obrigatório*/
        materias: ['Matemática discreta', 'Programação', 'Lógica']
    }

    function listar (lista:string[]){
        for(const item of lista) {
            console.log('- ', item);
        }
    }

    listar(Monica.materias);
