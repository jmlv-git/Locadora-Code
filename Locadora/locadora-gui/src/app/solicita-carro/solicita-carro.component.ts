import { Component, OnInit } from '@angular/core';
import { Data } from '../comum/data';
import { Requisicao } from '../comum/requisicao';
import { RequisicaoService } from '../services/requisicao.service';

@Component({
  selector: 'app-solicita-carro',
  templateUrl: './solicita-carro.component.html',
  styleUrls: ['./solicita-carro.component.css']
})
export class SolicitaCarroComponent implements OnInit {
requisicao:Requisicao = new Requisicao();

  constructor(private requisicaoService:RequisicaoService) { }



  validarDia(data:Data):boolean{
    var valid=false;
    var dia=data.dia;
    if (dia>0 && dia<32) {//fazer verificacao do mes
      valid=true;
      
    }
    return valid;
  }

  validarMes(data:Data):boolean{
    var valid=false;
    var mes=data.mes;
    if (mes>0 && mes<13) {
      valid=true;
      
    }
    return valid;
  }



  validar2Datas(dataRet:Data,dataDev:Data):boolean{
    var data1=new Date(dataRet.ano,dataRet.mes,dataRet.dia);
    var data2=new Date(dataDev.ano,dataDev.mes,dataDev.dia);
    if (data1>=data2) {// nao pode pegar e devolvero carro no msm dia
      return false;
      
    }
    return true;
  }


  validarData(data:Data):boolean{//problema com meses tamanhos diversos de meses 
    var valid=false;
    var ano=data.ano;
    var dataAux=new Date(data.ano,data.mes,data.dia);
    var dataAtual= new Date();
    
      
      if (this.validarMes(data)&& this.validarDia(data)&& dataAux>=dataAtual) {
        valid=true;
      }
    
    return valid;
  }

  requisitar(req:Requisicao){
    console.log(req);
    if (this.validarData(req.dataRetirada)&&this.validarData(req.dataDevolucao)&&
     this.validar2Datas(req.dataRetirada,req.dataDevolucao)) {

      this.requisicaoService.postRequisita(req).subscribe({
        next: (Sucesso) => {
          alert("Requisição bem sucedida.")
        },
        error: (Falha) => {
          alert("Requisição mal sucedida. Tente novamente!")
        }
      });
    }else{
      alert("Data inválida");
    }

    
  }

  ngOnInit(): void {
  }

}
