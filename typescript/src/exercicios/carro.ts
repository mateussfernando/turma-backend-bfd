/* Questão 1:
Crie uma classe chamada Carro, essa classe deve ter as seguintes propriedades:
Modelo, Marca, ano, cor, isEletrico e preço atual.
Crie o Consctrutor dessa classe com parâmetros para todas as propriedades.
Crie um Método que mostre uma ficha técnica deste carro. Depois transforme
essa classe em um objeto (instância) e chame o método criado. */

export class Carro {
  Modelo: string;
  Marca: string;
  Ano: number;
  isEletrico: boolean;
  precoAtual: number;

  constructor(
    Modelo: string,
    Marca: string,
    Ano: number,
    isEletrico: boolean,
    precoAtual: number
  ) {
     this.Modelo = Modelo;
     this.Marca = Marca;
     this.Ano = Ano;
     this.isEletrico = isEletrico;
     this.precoAtual = precoAtual;
  }
  
  public fichaTecnica(): string {
     return `Modelo: ${this.Modelo} \nMarca: ${this.Marca} \nAno: ${this.Ano} \nÉ elétrico? ${this.isEletrico} \nPreço atual: R$${this.precoAtual}`;
  }
}
