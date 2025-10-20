import { Aluno } from "./exercicios/aluno.js";

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

// const titulo = new TituloClasse("Vingadores", 2015, "Aventura");
// titulo.duracaoEmMinutos = 120
// console.log(titulo);

// const titulofilme = new TituloClasse("Madmax", 2005, "Ação")
// titulofilme.duracaoEmMinutos = 120
// console.log(titulofilme)

// export class Usuario {
//      nome: string;
//      idade: number = 15;
//      ativo: boolean;

//      constructor (nome: string, idade: number, ativo: boolean){
//           this.nome = nome;
//           this.ativo = ativo;
//      }

// }

// const usuario1 = new Usuario("Mateus", 18, true );
// console.log(usuario1)

//estrutura padrão de como instanciar uma classe

// const aluno = new Aluno("Mateus", 18, "Noturno");
// aluno.nota = 6;
// aluno.nota = 6;
// aluno.nota = 6;

// const media = aluno.mediaNotas();
// console.log(`A média do aluno ${aluno.nome} é ${media}`)


import { Filme } from "./aulas/filme.js";
import { Serie } from "./aulas/serie.js";

const filme = new Filme("Vingadores", 2015, "Aventura");
filme.diretor = "Joss Whedon";
filme.mostrarFicha();

const serie = new Serie("The Witcher", 2019, "Fantasia");
serie.temporadas = 12;
serie.ativa = true;
serie.mostrarFicha();