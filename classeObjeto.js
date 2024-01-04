class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }
    calcularGasto(distancia, precoCombustivel) {
        return distancia * this.gastoMedioKm * precoCombustivel;
    } 
}

const carro1 = new Carro('Fiat', 'Vermelho', 1/12);
const carro2 = new Carro('Ford', 'Azul', 1/10);
const carro3 = new Carro('Chevrolet', 'Preto', 1/8);

console.log(carro1.calcularGasto(100, 5));