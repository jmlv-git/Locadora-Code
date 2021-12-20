import { Router, Request, Response } from "express";
import { RequisicaoController } from "../controllers/requisicao.controller";
import { UsuarioController } from "../controllers/usuario.controller";
import { Carro } from "../models/carro";
import { Requisicao } from "../models/requisicao";
import { Usuario } from "../models/usuario";


const requisicaoRouter = Router();
const requisicaoController:RequisicaoController= new RequisicaoController();

requisicaoRouter.route("/")   //get para a rota inicial
    .get((req: Request, res: Response) => {
        let requisicoes= requisicaoController.getReqs();
        return res.json(requisicoes)
    })

    requisicaoRouter.route("/")   
    .post((req: Request, res: Response) => {
        var body= req.body;
        const diaRet=body.dataRetirada.dia;
        const mesRet=body.dataRetirada.mes;
        const anoRet=body.dataRetirada.ano;
        const diaDev=body.dataDevolucao.dia;
        const mesDev=body.dataDevolucao.mes;
        const anoDev=body.dataDevolucao.ano;
        const modeloCarroChassi=body.modeloCarro.chassi; 
        const modeloCarroModelo=body.modeloCarro.modelo; 
        const modeloCarroDisponivel=body.modeloCarro.disponivel; 
        const carro=new Carro(modeloCarroChassi,modeloCarroModelo,modeloCarroDisponivel);
        const emailCliente = body.usuario;
        const requisicao = new Requisicao(diaRet,mesRet,anoRet,diaDev,mesDev,anoDev,carro,emailCliente);
        let requisita = requisicaoController.registrarReq(requisicao); 
        
        if (requisita) {
            return res.json({Sucesso:"Requisição realizada com sucesso"})
        }else{
            return res.status(409).json({Falha:"Ops, algo deu errado"})
        }
        
    })


    requisicaoRouter.route("/aprovar")  //aprovando req 
    .post((req: Request, res: Response) => {
        var body:number= req.body.Id;
        
        let aprova = requisicaoController.aprovarReq(body); 
        
        if (aprova) {
            return res.json({Sucesso:"Requisição aprovada com sucesso"})
        }else{
            return res.status(409).json({Falha:"Ops, requisição não aprovada, requisição nao encontrada"})
        }
        
    })




export default requisicaoRouter;