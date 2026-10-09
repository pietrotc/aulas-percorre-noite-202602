function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

let peso = 68
let altura = 1.72
let imc = calcularIMC(peso, altura)

// Abaixo do peso <= 18.4
//  Peso normal de 18.5 a 24.9
// sobrepeso >=25

if (imc <= 18.4){
    console.log("Você está abaixo do peso");
}
else if (imc <= 24.9){
    console.log("Você está no peso ideal");
}
else {
    console.log("Você está acima do peso");
}