export class Usuario{
email!: String;
senha!: String;
credencial!: String;

constructor(email:String, senha:String, credencial:String){
    this.setDados(email, senha, credencial)
    
}


clone(): Usuario{
let usuario = new Usuario(this.email,this.senha,this.credencial);
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