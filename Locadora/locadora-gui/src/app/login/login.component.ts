import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../../../comum/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  senha!:string
  email!:string
  routerLinkHome:string = ""; //USUÁRIO QUANDO LOGADO!
  permissao:boolean = false
  
  constructor(private usuarioService: UsuarioService) { 


  }

  logarNoSistema(){
    this.usuarioService.logarNoSistema(this.senha, this.email).subscribe({
      next: (Sucesso) => {
        this.permissao = true;
        console.log(this.permissao)
        this.routerLinkHome = "/home"
        alert("Entrou")
      },
      error: (Falha) => {
        alert("Negado")
      }
    });

   
    
    /*Seta o input para vazio*/
    this.senha = "";
    this.email = "";
  }



  ngOnInit(): void {
   


  }

}
