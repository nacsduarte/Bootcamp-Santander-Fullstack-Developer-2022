let funcionario = {
codigo: 10,
nome:'João'

};

let funcionario2:(codigo:number, nome:string) => {
codigo: 10,
nome:'João'

};

interface Funcionario {
    codigo: number,
    nome: string
}


let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'João'
}
