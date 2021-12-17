import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requisicao } from '../comum/requisicao';
import { RequisicaoServer } from '../comum/requisicaoServer';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  url:string="http://localhost:3000";
  
  
  constructor(private http:HttpClient) {}

  postRequisita(req:Requisicao) : Observable<any> {
    return this.http.post<any>(`${this.url}/requisicoes`,req)
  }

  getALLReq() : Observable<RequisicaoServer[]> {
    return this.http.get<RequisicaoServer[]>(`${this.url}/requisicoes`)
  }

  postRequisitaAprova(id:number) : Observable<any> {
    return this.http.post<number>(`${this.url}/requisicoes/aprovar`,{Id:id})
  }

}
