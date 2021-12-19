import { Carro } from "./carro";
import { Data } from "./data";
import { DataServer } from "./dataServer";


export class RequisicaoServer{
    dataRetirada:Data;
    dataDevolucao:Data;
    modeloCarro:Carro;
    id:number;
    status:String;
    emailCliente:string;

    constructor(diaRet:number,mesRet:number,anoRet:number,diaDev:number,mesDev:number,anoDev:number,modeloCarro:Carro,emailCliente:string) { 
        this.dataRetirada=new DataServer(diaRet,mesRet,anoRet);
        this.dataDevolucao=new DataServer(diaDev,mesDev,anoDev);
        this.modeloCarro=modeloCarro;
        this.id=0;
        this.status="pendente";
        this.emailCliente= emailCliente;
    }
}