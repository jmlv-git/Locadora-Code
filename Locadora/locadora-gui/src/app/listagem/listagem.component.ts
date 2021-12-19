import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../services/listagem.service';
import {Carro} from '../comum/carro';
import { Observable } from 'rxjs';
import { CarroCliente } from '../comum/carroCliente';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  //banco:Carro[] = [];
  banco:Carro[] = [];
  listar:CarroCliente[] = [];
  veiculo!:string;
  usuario!:string;
  telaReq:boolean=false;
  modeloEscolhido:Carro= new Carro("-666","Fusca", false);


  constructor(private listagemService: ListagemService) { 


  }

  ecolherModelo(i:number){
    var aux= this.listar[i];
    this.modeloEscolhido= this.findCarroEmBanco(this.listar[i].modelo);
    //console.log(this.listar[i].modelo)
    //console.log(this.modeloEscolhido)

  }

  buscar(veiculo:string) {
    if (this.usuario == "Cliente") {
      this.listagemService.buscarCarrosCliente(veiculo).subscribe({
        next: (Carros) => {
          this.banco = Carros //Contém todos os carros disponíveis.
          this.listar=[];      //Listar será chamada por Cliente
          this.gerarListagemCliente();
        
          
          
        },
        error: (err) => {
         alert("Carro não encontrado")
        }
      })
      
    }else {
      this.listagemService.buscarCarrosAdm(veiculo).subscribe({
        next: (Carros) => {
          this.banco = Carros //Contém todos os carros disponíveis.   
        },
        error: (err) => {
         alert("Carro não encontrado")
        }
      })
      

    }
    
  }

  gerarListagemCliente(){
    for (let i = 0; i < this.banco.length; i++) {
      if (!this.findCarroEmListar(this.banco[i].modelo)) {// se nao achr entao compute quantos desse tipo tem e guarde em listar
        var contAux=0;
        for (let k = 0; k < this.banco.length; k++) {
          if (this.banco[k].modelo==this.banco[i].modelo) {
            contAux++; //Quantidade do carro verificado
          }
        }
        var carClienteAux= new CarroCliente(this.banco[i].modelo,contAux);
        this.listar.push(carClienteAux);
      }
      
    }
  }


  findCarroEmListar(modelo:string):boolean {
    var achou=false;
    for (let i = 0; i < this.listar.length; i++) {
      if (this.listar[i].modelo==modelo) {
        achou=true;
        return achou;// se achar já retorna
      }
      
    }
    return achou;
  }

  findCarroEmBanco(modelo:string):Carro {
    var carroAux=new Carro("-1",modelo,false);//nao achou
    for (let i = 0; i < this.banco.length; i++) {
      if (this.banco[i].modelo==modelo) {
        
        return this.banco[i];// se achar já retorna
      }
      
    }
    return carroAux;
  }


  goSolicita(){
    this.telaReq=!this.telaReq;
  }

  ngOnInit(): void {
    //Esse método inicializa o componente com o que tiver descrito no método.
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