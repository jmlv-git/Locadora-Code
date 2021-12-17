import { Data } from "./data";


export class Requisicao{
    dataRetirada:Data;
    dataDevolucao:Data;
    modeloCarro:String;
    id:number;
    status:String;
    
    constructor(diaRet:number,mesRet:number,anoRet:number,diaDev:number,mesDev:number,anoDev:number,modeloCarro:String) { 
        this.dataRetirada=new Data(diaRet,mesRet,anoRet);
        this.dataDevolucao=new Data(diaDev,mesDev,anoDev);
        this.modeloCarro=modeloCarro;
        this.id=0;
        this.status="pendente";
    }

    /*clean(){
        this.dataRetirada= new Data();
        this.dataRetirada= new Data();
        this.modeloCarro="";
    }*/
}