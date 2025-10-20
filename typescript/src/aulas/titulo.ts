export class Titulo{
  private _nome: string;
  private _anoDeLancamento: number;
  private _genero: string;
  private _duracaoEmMinutos!: number;
  private _incluindoNoPlano!: boolean;
  private _somaDasAvaliacoes!: number;
  private _totalDeAvaliacoes!: number;

  constructor(nome: string, anoDeLancamento: number, genero: string) {
    this._nome = nome;
    this._anoDeLancamento = anoDeLancamento;
    this._genero = genero;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(nome: string) {
    this._nome = nome;
  }

  get genero(): string {
    return this._genero;
  }
  set genero(genero: string) {
    this._genero = genero;
  }

  get anoDeLancamento(): number {
    return this._anoDeLancamento;
  }
  set anoDeLancamento(anoDeLancamento: number) {
    this._anoDeLancamento = anoDeLancamento;
  }

  get duracaoEmMinutos(): number {
    return this._duracaoEmMinutos;
  }
  set duracaoEmMinutos(duracaoEmMinutos: number) {
    this._duracaoEmMinutos = duracaoEmMinutos;
  }

  get incluindoNoPlano(): boolean {
    return this._incluindoNoPlano;
  }
  set incluindoNoPlano(incluindoNoPlano: boolean) {
    this._incluindoNoPlano = incluindoNoPlano;
  }

  get somaDasAvaliacoes(): number {
    return this._somaDasAvaliacoes;
  }
  set somaDasAvaliacoes(somaDasAvaliacoes: number) {
    this._somaDasAvaliacoes = somaDasAvaliacoes;
  }

  get totalDeAvaliacoes(): number {
    return this._totalDeAvaliacoes;
  }
  set totalDeAvaliacoes(totalDeAvaliacoes: number) {
    this._totalDeAvaliacoes = totalDeAvaliacoes;
  }

  public mostrarFicha(): void {
    console.log(
      `Nome do Filme: ${this.nome} \nGênero: ${this.genero} \nAno de Lançamento: ${this.anoDeLancamento}\n`
    );
  }
}