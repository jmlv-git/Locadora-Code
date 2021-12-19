import { Input } from "@angular/core";
import { Carro } from "./carro";
import { Data } from "./data";


export class Requisicao{// importante ter email do usuario que fez a req, porem isso só pode ser feito na hora da integracao
    dataRetirada:Data=new Data();
    dataDevolucao:Data=new Data();
    modeloCarro!:Carro;
    usuario!:string;
    constructor() { }

    clean(){
        this.dataRetirada= new Data();
        this.dataRetirada= new Data();
        //this.modeloCarro="";
    }
}