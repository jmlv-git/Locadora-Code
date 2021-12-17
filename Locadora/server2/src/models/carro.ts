/*export class Carro {
    
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


}*/
export class Carro{
    
    chassi:string;
    modelo:string;
    disponivel:boolean;


    constructor(chassi:string, modelo:string, disponivel:boolean) {
        this.chassi = chassi;
        this.modelo = modelo;
        this.disponivel = disponivel;
        
    }
}