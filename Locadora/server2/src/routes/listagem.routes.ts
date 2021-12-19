//export default listagemRouter;

import { Router, Request, Response } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { Carro } from "../models/carro";
import {CarroController} from "../controllers/carro.controller";

const listagemRouter = Router();
const carroController = new CarroController();
let arrayParse = [];

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
        arrayParse = [];
        var nomeCarro = req.body.nome;
        const carros = carroController.getCarrosDisponiveis();

         if (nomeCarro == "indefinido") {
             return res.json(carros); 
        }else {
            for (let index = 0; index < carros.length; index++) {
                if (carros[index].modelo == nomeCarro) {
                    arrayParse.push(carros[index])       
                }
            }

            return res.json(arrayParse); //Passando todos carros disponíveis do modelo especificado
        }

        return res.status(404).json({falha:"Carro não encontrado"}) //Carro passado não existe

    })

    listagemRouter.route("/adm")
    .post((req: Request, res: Response) => {
        arrayParse = [];
        var nomeCarro = req.body.nome;
        const carros = carroController.getCarros();

         if (nomeCarro == "indefinido") {
             return res.json(carros); 
        }else {
            for (let index = 0; index < carros.length; index++) {
                if (carros[index].modelo == nomeCarro) {
                    arrayParse.push(carros[index])       
                }
            }

            return res.json(arrayParse); //Passando todos carros disponíveis do modelo especificado
        }

        return res.status(404).json({falha:"Carro não encontrado"}) //Carro passado não existe

    })




/*
    listagemRouter.route("/cliente")
    .post((req: Request, res: Response) => {
        
        var nomeCarro = req.body.nome;
        let carros = carroController.getCarrosDisponiveis();

        return res.json(carros);

       

    })
    */


export default listagemRouter;