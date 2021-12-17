/*import { Router, Request, Response } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { Carro } from "../models/carro";

const listagemRouter = Router();
const CarroController = [];
let lista = []


CarroController.push(new Carro ("123", "Fiat", 6, 3, 9)) //CarroController tem que substituir
CarroController.push(new Carro ("321", "HB20", 3, 5, 8))

    listagemRouter.route("/cliente")   
    .post((req: Request, res: Response) => {
        lista = [];
        var nomeCarro = req.body.nome;
       
         if (nomeCarro == "indefinido") {
             lista = CarroController;
             return res.json({lista});
        }else {
            for (let index = 0; index < CarroController.length; index++) {
                if (CarroController[index].nome == nomeCarro) {
                lista.push(CarroController[index]);
                return res.json({lista});
                }      
            }
            
            return res.status(404).json({falha:"Carro não encontrado"}) //Carro passado não existe
        }
    })

   
/*
    listagemRouter.route("/adm")   
    .post((req: Request, res: Response) => {
        var body= req.body;
        const email=body.email;
        const senha=body.senha;
        const credencial=body.credencial;
        let cadastro = usuarioController.cadastrar(new Usuario(email,senha,credencial));
        if (cadastro) {
            return res.json({Sucesso:"Cadastro realizado com sucesso"})
        }else{
            return res.status(409).json({Falha:"Email/Credencial em uso"})
        }
    })
*/

//export default listagemRouter;

import { Router, Request, Response } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { Carro } from "../models/carro";
import {CarroController} from "../controllers/carro.controller";

const listagemRouter = Router();
const carroController = new CarroController();

    //criando estoque de carros
for (let index = 0; index < 6; index++) {
    carroController.registrarCarro(index.toString(), "Hyundai HB20", true)
}
carroController.registrarCarro("6", "Hyundai HB20", false)
carroController.registrarCarro("7", "Hyundai HB20", false)


for(let index = 8; index < 17; index++){
    carroController.registrarCarro(index.toString(), "Fiat UNO", true)
}
carroController.registrarCarro("17", "Fiat UNO", false)

for (let index = 18; index < 23; index++){
    carroController.registrarCarro(index.toString(), "Ferrari Roma", false)
}

carroController.registrarCarro("23", "Ferrari Roma", true)

for (let index = 24; index < 31; index++){
    carroController.registrarCarro(index.toString(), "Chevrolet Monza", true)
}


listagemRouter.route("/cliente")   
    .post((req: Request, res: Response) => {
        const carros = carroController.getCarrosDisponiveis();
       return res.json({Sucesso:carros});
        
    })

   
/*
    listagemRouter.route("/adm")   
    .post((req: Request, res: Response) => {
        var body= req.body;
        const email=body.email;
        const senha=body.senha;
        const credencial=body.credencial;
        let cadastro = usuarioController.cadastrar(new Usuario(email,senha,credencial));
        if (cadastro) {
            return res.json({Sucesso:"Cadastro realizado com sucesso"})
        }else{
            return res.status(409).json({Falha:"Email/Credencial em uso"})
        }
    })
*/

export default listagemRouter;