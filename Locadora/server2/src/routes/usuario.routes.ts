import { Router, Request, Response } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { Usuario } from "../models/usuario";


const usuarioRouter = Router();
const usuarioController:UsuarioController= new UsuarioController();

usuarioRouter.route("/")   //get para a rota inicial
    .get((req: Request, res: Response) => {
        let usuarios= usuarioController.getUsuarios();
        return res.json({Usuarios:usuarios})
    })

    usuarioRouter.route("/login")   
    .post((req: Request, res: Response) => {
        var body= req.body;
        const email=body.email;
        const senha=body.senha;
        console.log(email, senha)
        let login = usuarioController.logar(email, senha); 
        if (login) {
            return res.json({Sucesso:"Login realizado com sucesso"})
        }else{
            return res.status(409).json({Falha:"Nome ou senha inválidos"})
        }
        
    })

   

    usuarioRouter.route("/cadastro")   
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

    usuarioRouter.route("/usuarioLogado")   
    .get((req: Request, res: Response) => {
        let usuarioLogado = usuarioController.getUsuarioLogado()
        if (usuarioLogado) {
            return res.json({usuarioLogado})
        }else {
            return res.status(404).json({Falha:"Nenhum usuário logado"})
        }

    })

    


export default usuarioRouter;