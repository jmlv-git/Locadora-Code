import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../services/listagem.service';
import {Carro} from '../comum/carro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  banco:Carro[] = [];
  listar:Carro[] = [];
  veiculo!:string;
  usuario!:string;
  
/*Banco deve ter todos os carros disponíveis para alugar.*/

  constructor(private listagemService: ListagemService) { 

    /*
    this.banco.push(new Carro ("123", "Fiat", 6, 3, 9));
    this.banco.push(new Carro ("321", "HB20", 6, 6 , 10))
  */
  }

  buscar(veiculo:string) {
    this.listagemService.buscarCarrosCliente(veiculo).subscribe({
      next: (sucesso) => {
        this.listar = sucesso.carros
        alert("Chegou")
      },
      error: (err) => {
       alert("Carro não encontrado")
      }
    })
  }

  

  ngOnInit(): void {
    /*Esse método inicializa o componente com o que tiver descrito no método.*/
    this.listagemService.getDadosLogin().subscribe({
      next: (sucesso) => {
       if (sucesso.usuarioLogado.credencial) {
        this.usuario = "ADM"
       }else {
        this.usuario = "Cliente"
       }
      },
      error: (err) => {
       alert("Nenhum usuário logado")
      }
    });

  }

}
