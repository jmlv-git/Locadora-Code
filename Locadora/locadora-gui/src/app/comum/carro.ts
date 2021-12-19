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