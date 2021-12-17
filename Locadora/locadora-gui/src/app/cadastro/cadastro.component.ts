import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../../../comum/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

   
  usuarioLogin:Usuario=new Usuario();
  usuarioRegCliente:Usuario=new Usuario();
  usuarioRegADM:Usuario=new Usuario();
  senhaConfCliente:String;
  senhaConfADM:String;


  constructor(private usuarioService: UsuarioService) { 
    this.senhaConfCliente="";
    this.senhaConfADM="";
  }

  
  cadastrar(user:Usuario){
    //adicionar verificação de , tamanho da senha, credencial 
    //(q precisa ser criado um repo de cred para q só alguns valores sejam validos)
    //var userAux=this.usuarioService.cadastrar(user.clone());

    if (user.senha != "" && user.email != "") {
      if (user == this.usuarioRegADM && user.credencial == "") {
        alert("Todos os campos devem ser preenchidos (credencial)")
        return;
      }
    }else {
      alert("Todos os campos devem ser preenchidos (email e senha)")
      return;
    }

    // Verifica se senha e senhaconf são iguais.
    if (user.credencial!="" && this.senhaConfADM!=user.senha) {
      alert("As senhas inseridas são diferentes")
      return;
    }else if (user.credencial == "" && this.senhaConfCliente != user.senha) {
      alert("As senhas inseridas são diferentes")
      return;
    }
     
    // Verifica se a senha é forte.
    if (user.senha.length < 8) {
      alert("Senha fraca")
      return;
    }

   

    this.usuarioService.postCadastro(user.clone()).subscribe({
      next: (Sucesso) => {
        alert("Cadastrado com sucesso")
      },
      error: (Falha) => {
        alert("Não foi possível cadastrar, email ou credencial inválidos")
      }
    });
    /*Limpa os inputs*/
    user.clean();
    this.cleanSenhas();
    
    
  }

  cleanSenhas(): void{
    this.senhaConfCliente="";
    this.senhaConfADM="";
  }

  ngOnInit(): void {
  }

}
