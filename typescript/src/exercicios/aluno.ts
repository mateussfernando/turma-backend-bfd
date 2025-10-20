export class Aluno{
     private _nome: string;
     private _idade: number;
     private _turno: string;
     private _nota: number = 0;
                                        
     constructor(nome: string, idade: number, turno: string){
          this._nome = nome;
          this._idade = idade;
          this._turno = turno;
     }
     get nome(): string{
          return this._nome;
     }
     get idade(): number{
          return this._idade;
     }
     get turno(): string{
          return this._turno;
     }
     get nota(): number{
          return this._nota;
     }
     set nota(novaNota: number){
          if (novaNota < 0 || novaNota > 10) {
               console.log("Nota inválida. A nota deve ser entre 0 e 10.");
          } else {
               this._nota = this._nota + novaNota;
               this._nota++;
          }
     }
     public mediaNotas(): number{
          const media = this._nota / 3;
          return media;
     }
}