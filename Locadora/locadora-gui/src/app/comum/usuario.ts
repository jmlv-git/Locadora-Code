export class Usuario{
email!: String;
senha!: String;
credencial!: String;

constructor(){
    this.clean();
}


clone(): Usuario{
let usuario = new Usuario();
usuario.email = this.email;
usuario.senha = this.senha;
usuario.credencial= this.credencial;
return usuario;
}

clean(){
    this.email="";
    this.senha="";
    this.credencial="";
}

setDados(email:String, senha:String, credencial:String){
    this.email=email;
    this.senha=senha;
    this.credencial=credencial;
}

}