import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../comum/carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {
  carros:Carro[]=[];
  url:string="http://localhost:3000";

  constructor(private http:HttpClient) { }

  buscarCarrosCliente (veiculo:string): Observable<any> {
  
    if (veiculo == undefined || veiculo == "") {   
      /* Quando o usuário não especifica nada no campo de busca*/
      veiculo = "indefinido"
    }

    return this.http.post<any>(`${this.url}/home/cliente`, {nome:veiculo} );
  }

  getDadosLogin (): Observable<any>{

    return this.http.get<any>(`${this.url}/login&cadastro/usuarioLogado`)

  }




}
