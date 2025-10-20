import { Titulo } from "./titulo.js"

export class Filme extends Titulo {
     private _diretor?: string

     get diretor (): string| undefined{
          return this._diretor
     }
     
     set diretor(diretor: string){
          this._diretor = diretor
     }
}
