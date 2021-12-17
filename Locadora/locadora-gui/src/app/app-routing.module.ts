import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovaRecComponent } from './aprova-rec/aprova-rec.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SolicitaCarroComponent } from './solicita-carro/solicita-carro.component';

const routes: Routes = [
  {
    component:PaginaInicialComponent, /*Rota para página inicial*/
    path: ''
  },
  {
    path: 'login', /*Rota para página de login*/
    component: LoginComponent
  },
  {
    path: 'cadastro', /*Rota para página de cadastro*/
    component: CadastroComponent
  },
  {
    path: 'home', /*Rota para página de cadastro*/ 
    component: ListagemComponent
  },
  {
    path: 'solicitacao',  /*Rota para página de cadastro*/
    component: SolicitaCarroComponent
  },
  {
    path: 'aprovacao',  /*Rota para página de cadastro*/
    component: AprovaRecComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
