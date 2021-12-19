/*import { Carro } from "../models/carro";

export class CarroController {
    
    carros:Carro[];
    
    constructor() {
        this.carros = [];
    }

    getCarros():Carro[] {
        return this.carros;
    }

    registrarCarro(carros: Carro):boolean {
       return true;

    }

    
}*/
import {Carro} from "../models/carro";

export class CarroController {
    
    carrosNoSistema:Carro[] = [];
    carrosAlugados:Carro[]=[];
    carrosDisponiveis:Carro[]=[];
    
    constructor() {}

    getCarros(): Carro[] {
        return this.carrosNoSistema;
    }


    getCarrosDisponiveis():Carro[] {

        return this.carrosDisponiveis;
    }

    getCarrosAlugados():Carro[]{
        return this.carrosAlugados;
    }

    registrarCarro(chassi: string, modelo: string, disponivel: boolean ):boolean {
        /*if(this.carrosAlugados.find(carro => carro.chassi == chassi)
        || this.carrosDisponiveis.find(carro => carro.chassi == chassi)){
            return false;
        }*/

        let novoCarro:Carro = new Carro(chassi, modelo, disponivel);
        this.carrosNoSistema.push(novoCarro);
        if (disponivel) {
            this.carrosDisponiveis.push(novoCarro);
        }else{
            this.carrosAlugados.push(novoCarro);
        }
        
        return true;

    }

    

    
}