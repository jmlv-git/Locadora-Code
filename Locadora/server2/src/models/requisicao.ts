import { Carro } from "./carro";
import { Data } from "./data";



export class Requisicao{
    dataRetirada:Data;
    dataDevolucao:Data;
    modeloCarro:Carro;
    id:number;
    status:String;
    emailCliente:string;

    constructor(diaRet:number,mesRet:number,anoRet:number,diaDev:number,mesDev:number,anoDev:number,modeloCarro:Carro,emailCliente:string) { 
        this.dataRetirada=new Data(diaRet,mesRet,anoRet);
        this.dataDevolucao=new Data(diaDev,mesDev,anoDev);
        this.modeloCarro=modeloCarro;
        this.id=0;
        this.status="pendente";
        this.emailCliente= emailCliente;
    }
}