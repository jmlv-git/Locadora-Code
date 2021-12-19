import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../comum/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios:Usuario[]=[];
   url:string="http://localhost:3001";
  
  
  constructor(private http:HttpClient) {}
   
  
  logarNoSistema(senha:string, email:string):Observable<any>{
    return this.http.post<any>(`${this.url}/login&cadastro/login`, {senha:senha, email:email})
  }
  

  postCadastro(user:Usuario) : Observable<any> {
    return this.http.post<any>(`${this.url}/login&cadastro/cadastro`,user)
  }

  cadastrar(user:Usuario): Usuario{
    this.usuarios.push(user.clone());
    return user;
  }

}
