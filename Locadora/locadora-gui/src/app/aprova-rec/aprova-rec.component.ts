import { Component, OnInit } from '@angular/core';
import { Requisicao } from '../comum/requisicao';
import { RequisicaoServer } from '../comum/requisicaoServer';
import { RequisicaoService } from '../services/requisicao.service';

@Component({
  selector: 'app-aprova-rec',
  templateUrl: './aprova-rec.component.html',
  styleUrls: ['./aprova-rec.component.css']
})
export class AprovaRecComponent implements OnInit {
reqs:RequisicaoServer[]=[];

  constructor(private requisicaoService:RequisicaoService) { 

  }


  obterReqs(){
    
    

    this.requisicaoService.getALLReq().subscribe({
      next: (Requisicoes) => {
        
        this.reqs=Requisicoes;
        
      },
      error: (Falha) => {
        alert("Falha na obtenção da lista")
      }
    });


    
  }


  aprovaReq(id:number){
    
    

    this.requisicaoService.postRequisitaAprova(id).subscribe({
      next: (Sucesso) => {
        alert("Requisição aprovada");
        this.obterReqs();//verificar possivel erro
      },
      error: (Falha) => {
        alert("Falha na aprovação da requisição")
      }
    });
  

  
}

  ngOnInit(): void {
    this.obterReqs();
  }

}
