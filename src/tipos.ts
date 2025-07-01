let nome: String = 'Jardel';//tipo string
let numero : number = 10 //tipo number
let numeroDecimal : number = 100.50
let boleano : boolean = true

//arrays
let tipoArray : number[] = [1,2,3]
let arrayString : String[] = ["A", "B", "C"]

//tuplas - arrays com quantidade e tipos fixos no elemento
let tupla1:[String, number] = ["Diego", 40]

//enum - conjunto de valores nomeados
enum Status {
    Ativo,
    Inativo,
    Pendente
}

let s : Status = Status.Ativo

enum Pedido {
    Pendente = 1,
    Recebido = 2,
    Cancelado = 9
}

let valor : any = "string" //desativa a verificacao de tipo 
valor = 100

let outroValor : unknown = "mensagem" //tipo de seguranca que precisa aser calidade antes de usar
if(typeof outroValor === 'string'){
    console.log(outroValor.toUpperCase());
}

//tipo void para funcoes
function log() : void {
    console.log("Ola mundo");    
}

let arrowFunction = ():void => {

}

//funcao com tipos definidos
let soma = (v1 : number, v2 : number): number => {
    return v1 + v2  
}

soma(10, 10)

//objetos tipados
let pessoa : {nome : String; idade : number} = {
    nome : "Jardel",
    idade : 25
}

//intersection types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor : number | String){
    console.log(valor);
}

//intersection types - permite combinar tipos diferentes
type Individuo = {nome : String}
type Funcionario = {salario : number}

type Empregado = Individuo & Funcionario

let emp: Empregado = {
    nome: "Diego",
    salario : 40000
}

//generic types - permite criar funcoes, classes ou interfaces genericas que funcionam com
//diferentes tipos

function identidade<T>(valor: T ): T{
    return valor;
}

let chamandoString = identidade<String>("Teste de chamada")
let chamandoNumerico = identidade<number>(100)

//classes com tipagem
class Carro {
    modelo : String
    constructor(modelo : String){
        this.modelo = modelo
    }

    businar(): void{
        console.log("bi bi");
        
    }
}

//instanciando o objeto
let fusca = new Carro('fusca')
fusca.businar()