export class Carro {
    //modelo
    //situação no lugado de alugado e disponivel
    id!:string;
    nome!:string;
    alugado!:number;     
    disponivel!:number;
    quantidadeTotal!:number;

    constructor(id:string, nome:string, alugado:number, disponivel:number, quantidadeTotal:number) {
        this.id = id;
        this.nome = nome;
        this.alugado = alugado;
        this.disponivel = disponivel;
        this.quantidadeTotal = quantidadeTotal;
    }


}