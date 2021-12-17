import { Requisicao } from "../models/requisicao";

export class RequisicaoController {
    contId:number;
    reqs:Requisicao[];
    
    constructor() {
        this.reqs=[];
        this.contId=0;
    }

    getReqs():Requisicao[] {
        return this.reqs;
    }

    registrarReq(req: Requisicao):boolean {
            req.id=this.contId;
            this.contId++;
            this.reqs.push(req);
            return true;
          
    }

    aprovarReq(id: number):boolean {
        
        for (let index = 0; index < this.reqs.length; index++) {
            const element = this.reqs[index];
            if (this.reqs[index].id==id) {
                this.reqs[index].status="aprovado";
                return true;
            }
        }
       
        
        return false;
      
}


}