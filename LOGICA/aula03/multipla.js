// Avaliador de entregas

// Para estruturar decisões no código utilizamos a familia if else.
// if = se
// else = senão
// else is = senão se
// o if pede uma condição e se ela for atendida, executa o código que está entre{}.
//  já else serve pata atenderos casos que não contemplam as condições anteriores.
// Se tivermos mais de uma condição, como no exmplo abaixo, é necessário utilizar o else if, que nega o if anterior e propõe uma nova condição.
// Por exemplo, se não for nota 5, mas for nota 4, o programa escreve Melhoras! na tela.

let nota = 98

if (nota == 5){
     console.log("AURA!🕕🕢");
}
else if (nota == 4){
    console.log("Melhoras🐴");
}
else if (nota == 3){
    console.log("Estava bem embalado 🎁");
}
else if (nota == 2){
    console.log("Minha vó é melhor que você.💀💀");
}
else if (nota == 1){
    console.log("Vai trebalhar CLT pelo resto da eternidade...");
}
else {
   console.log("INSIRA UMA NOTA VALIDA DE 1 A 5!!!!!!!!!!!!"); 
} 