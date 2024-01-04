class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC () {
        return (this.peso / Math.pow(this.altura,2)).toFixed(0);
    }
    classificarIMC () {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'Sobrepeso';
        } else if (imc < 35) {
            return 'Obesidade grau 1';
        } else if (imc < 40) {
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    
    }
}

const pessoa1 = new Pessoa('José', 70, 1.75);
const pessoa2 = new Pessoa('Maria', 50, 1.60);
const pessoa3 = new Pessoa('João', 90, 1.90);

console.log(pessoa1.calcularIMC());
console.log(pessoa1.classificarIMC());