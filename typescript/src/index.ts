import { Title } from "./title.js";
/* class ContaBancaria {
     private saldo: number; //propriedade

     constructor(saldoInicial: number) {
         this.saldo = saldoInicial;
     }

     public getSaldo(){
          return this.saldo
     }
}

const conta = new ContaBancaria(1000);
console.log(conta.getSaldo());
 */

// class cor {
//   cor: string;
//   ano: number;
//   estilo: string;

//   constructor(cor: string, ano: number, estilo: string) {
//     this.cor = cor;
//     this.ano = ano;
//     this.estilo = estilo;
//   }
// }
// const carro = new cor("vermelho", 2020, "sedan");
// const carro2 = new cor("preto", 2022, "hatch");
// console.log(carro);
// console.log(carro2);

const titulo = new ("Vingadores", 2015, "Aventura");
titulo.duracaoEmMinutos = 120
console.log(titulo);
