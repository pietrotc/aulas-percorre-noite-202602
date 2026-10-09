// Declaração de variáveis
let nome = "Pietro"
let soma = 5 + 5

// Exibição do valor armazenado das variáveis
console.log(nome);
console.log(soma);

// Estrtura de decisão
if (soma > 5){
    console.log("A soma é maior que 5");
}
else {
    console.log("A soma é manor que 5");
}

// Laço de repetição
for (let i = 0; i < 10; i++) {
    console.log("O valor de i é:");
}

// Função se refere a uma lógica que é repetida mais de uma vez, mas diferente de um laço de repetição a função é para ser invocada quando o programador escolher, independente de um contador.
function somador(a, b) {
    return a + b
}

// A função pode ser invocada para passar valor a uma variável, como no exemplo abaixo. Observe que a e b da criação da função foram substituídos pelos valores a ser somados , assim como variáveis da matemática.
let total = somador(5, 4)
console.log(Total);

let total2 = somador(6, 7)
console.log(total2);

// A função também pode ser invocada dentro de outras funções ou metódos, como o exemplo abaixo onde invocamos a função somador dentro do console.log()
console.log(somador(15, 25));