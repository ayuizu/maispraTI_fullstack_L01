//*-----------------Exercicio 01-----------------
// let prompt = require("prompt-sync")();
// console.log("Conversor de temperatura em Celsius para Farenheit");
// let temperaturaCelsius = prompt("Digite uma temperatura em graus celsius: ");
// if (temperaturaCelsius >= -273.15) {
//   let temperaturaFarenheit = (temperaturaCelsius * 9) / 5 + 32;
//   console.log(
//     "A temperatura acima equivale a " +
//       temperaturaFarenheit +
//       " graus Farenheit."
//   );
// } else {
//   console.log("A temperatura digitada é inválida.");
// }

//*-----------------Exercicio 02-----------------

// const prompt = require("prompt-sync")();
// console.log("Percentual de tipos de votos em um município");

// let eleitores = parseInt(prompt("Digite o numero de eleitores: "));
// let votosBrancos = parseInt(prompt("Digite o numero de votos brancos: "));
// let votosNulos = parseInt(prompt("Digite o numero de votos nulos: "));
// let votosValidos = parseInt(prompt("Digite o numero de votos válidos: "));
// if (votosBrancos + votosNulos + votosValidos == eleitores) {
//   let percentualVotosBrancos = (votosBrancos / eleitores) * 100;
//   let percentualVotosNulos = (votosNulos / eleitores) * 100;
//   let percentualVotosValidos = (votosValidos / eleitores) * 100;

//   console.log("\nVotos brancos: " + percentualVotosBrancos.toFixed(2) + "%");
//   console.log("Votos nulos: " + percentualVotosNulos.toFixed(2) + "%");
//   console.log("Votos válidos: " + percentualVotosValidos.toFixed(2) + "%");
// } else if (
//   isNaN(eleitores) ||
//   isNaN(votosBrancos) ||
//   isNaN(votosNulos) ||
//   isNaN(votosValidos)
// ) {
//   console.log("Foi digitado um número inválido.");
// } else {
//   console.log("O número total de votos diverege do número de eleitores.");
// }

//*-----------------Exercicio 03-----------------

// const prompt = require('prompt-sync')();
// console.log("Operações malucas");

// let num1 = parseInt(prompt("Digite o 1º numero inteiro: "));
// let num2 = parseInt(prompt("Digite o 2º numero inteiro: "));
// let num3 = parseInt(prompt("Digite o 3º numero inteiro: "));
// let num4 = parseInt(prompt("Digite o 4º numero inteiro: "));

// let novoNum1=num1+25;
// let novoNum2=num2*3;
// let novoNum3=num3*1.12;
// num4=num1+num2+num3;

// console.log("1º número + 25: " + novoNum1);
// console.log("2º número x 3: " + novoNum2);
// console.log("3º número + 12%: " + novoNum3.toFixed(4));
// console.log("4º número = soma dos 3 primeiros originais: " + num4);

//*-----------------Exercicio 04-----------------

// const prompt = require("prompt-sync")();
// console.log("Fui aprovado?");

// let nota1 = parseFloat(prompt("Digite a 1º nota: "));
// let nota2 = parseFloat(prompt("Digite a 2º nota: "));

// let media = (nota1 + nota2) / 2;

// if (media >= 6) {
//   console.log("Parabéns! Você foi aprovado.");
// }

//*-----------------Exercicio 05-----------------

// const prompt = require('prompt-sync')();
// console.log("Fui aprovado ou reprovado?");

// let nota1 = parseFloat(prompt("Digite a 1º nota: "));
// let nota2 = parseFloat(prompt("Digite a 2º nota: "));

// let media=(nota1+nota2)/2;

// if(media>=6){
//     console.log("Parabéns! Você foi aprovado.");
// } else{
//     console.log("Você foi reprovado! Estude mais.");
// }

//*-----------------Exercicio 06-----------------

// const prompt = require('prompt-sync')();
// console.log("Que tipo de triângulo é esse?");

// let A = parseFloat(prompt("Digite o tamanho do 1º lado: "));
// let B = parseFloat(prompt("Digite o tamanho do 2º lado: "));
// let C = parseFloat(prompt("Digite o tamanho do 2º lado: "));

// if(A<B+C && B<A+C && C<A+B){
//     if((A==B && A!=C) || (A==C && A!=B)|| (B==C && B!=A)){
//         console.log("Este é um triângulo isósceles!");
//     }else if(A!=B && B!=C && A!=C){
//         console.log("Este é um triângulo escaleno!");
//     }else if(A==B && B==C){
//         console.log("Este é um triângulo equilátero!");
//     }
// }else{
//     console.log("As medidas digitadas não formam um triângulo!");
// }

//*-----------------Exercicio 07-----------------

// const prompt = require('prompt-sync')();
// console.log("Calculadora de valor da compra de maçãs \nR$ 0,30/un ou R$0,25/un a partir da 12ª");

// let numMaca = parseInt(prompt("Digite o número de maçãs compradas: "));
// let valorCompra = 1.0;

// if(numMaca>0 && numMaca<12){
//     valorCompra = numMaca*0.3;
// }else if(numMaca>=12){
//     valorCompra = numMaca*0.25;
// }else{
//     console.log("Número digitado inválido.");
// }
// if(numMaca>0){
//     console.log(`O valor total da compra de ${numMaca} maçãs é de R$ ${valorCompra.toFixed(2)}.`);
// }

//*-----------------Exercicio 08-----------------

// const prompt = require('prompt-sync')();
// console.log("Dois números em ordem crescente");

// let num1 = parseFloat(prompt("Digite o 1º número: "));
// let num2 = num1;

// do{
//     num2=parseFloat(prompt("Digite o 2º número: "));
// }while(num2==num1);
// if(num1<num2){
//     console.log("Números em ordem crescente: ",num1,",",num2);
// }else{
//     console.log("Números em ordem crescente: ",num2,",",num1);
// }

//*-----------------Exercicio 09-----------------

// const prompt = require('prompt-sync')();
// console.log("Origem de um produto");

// let numOrigem = parseInt(prompt("Digite o código de origem do produto: "));

// if(numOrigem==1){
//     console.log("Região de origem: Sul");
// }else if(numOrigem==2){
//     console.log("Região de origem: Norte");
// }else if(numOrigem==3){
//     console.log("Região de origem: Leste");
// }else if(numOrigem==4){
//     console.log("Região de origem: Oeste");
// }else if(numOrigem==5 || numOrigem==6 || (numOrigem>=25 && numOrigem<=50)){
//     console.log("Região de origem: Nordeste");
// }else if(numOrigem>=7 && numOrigem<=9){
//     console.log("Região de origem: Sudeste");
// }else if(numOrigem>=10 && numOrigem<=20){
//     console.log("Região de origem: Centro-Oeste");
// }else{
//     console.log("Região de origem: Extrangeiro/Importado");
// }

//*-----------------Exercicio 10-----------------

// const prompt = require('prompt-sync')();
// console.log("Imprimir 10x o mesmo número");

// let num1 = parseInt(prompt("Digite um número inteiro: "));

// for(let i=0;i<10;i++){
//     console.log(num1);
// }

//*-----------------Exercicio 11-----------------

// const prompt = require('prompt-sync')();
// console.log("O número é par ou ímpar?");
// console.log("--Digite 0 ou um valor negativo para sair.\n");

// let num1=1;
// while(num1>0){
//     num1=parseInt(prompt("Digite um número inteiro: "));
//     if(num1<=0){
//         break;
//     }else if(num1%2==0){
//         console.log(num1, "é um número é par.\n");
//     }else{
//         console.log(num1, "é um número é ímpar.\n");
//     }
// }
// if(num1<=0){
//     console.log("Fim do programa");
// }

//*-----------------Exercicio 12-----------------

// const prompt = require("prompt-sync")();
// console.log("Múltiplos de 5 de 1000 a 1999");

// for (let i = 1000; i < 2000; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

//*-----------------Exercicio 13-----------------

// const prompt = require('prompt-sync')();
// console.log("Tabuadas de 1 a N");

// for(let i=0;i<5;i++){
//     let N1 = parseInt(prompt("Digite um número N: "));
//     for(let j=1;j<=N1;j++){
//         console.log(j,"x",N1,"=",j*N1);
//     }
// }

//*-----------------------Exercícios só com WHILE

//*-----------------Exercicio 14-----------------

// const prompt = require("prompt-sync")();
// console.log("Média de números decimais não nulos");
// console.log("--Digite 0 para mostrar a média--");

// let num = 1;
// let numeradorMedia = 0;
// let denominadorMedia = 0;
// let media = 0;
// while (num !== 0) {
//   num = parseFloat(prompt("Digite um número decimal: "));
//   if (num == 0) {
//     break;
//   } else if (isNaN(num)) {
//     console.log("Valor desconsiderado. Digite apenas números!");
//   } else {
//     numeradorMedia += num;
//     denominadorMedia += 1;
//   }
// }
// media = numeradorMedia / denominadorMedia;
// console.log("A média dos números decimais digitados é", media.toFixed(2));

//*-----------------Exercicio 15-----------------

// const prompt = require("prompt-sync")();
// console.log("Média ponderada de números decimais não nulos");
// console.log("--Digite 0 para mostrar a média--");

// let num1 = 1;
// let num2 = 1;
// let numeradorMedia = 0;
// let denominadorMedia = 0;
// let media = 0;
// while (num1 !== 0 && num2 !== 0) {
//   num1 = parseFloat(prompt("\nDigite um número decimal: "));
//   if (num1 == 0) {
//     break;
//   } else {
//     num2 = parseFloat(prompt("Digite o peso do número acima: "));
//     if (num2 == 0) {
//       break;
//     } else if (isNaN(num1) || isNaN(num2)) {
//       console.log("Valor desconsiderado. Digite apenas números!");
//     } else {
//       numeradorMedia += num1 * num2;
//       denominadorMedia += num2;
//     }
//   }
// }
// media = numeradorMedia / denominadorMedia;
// console.log(
//   "\nA média ponderada dos números decimais digitados é",
//   media.toFixed(2)
// );

//*-----------------Exercicio 16-----------------
// const prompt = require("prompt-sync")();
// console.log("50 primeiros números primos maior que 100");
// let num = 100;
// let cont = 0;
// let divisor = 2;
// let ePrimo = true;

// while (cont < 50) {
//   ePrimo = true;
//   divisor = 2;
//   while (ePrimo && divisor < num) {
//     if (num % divisor == 0) {
//       ePrimo = false;
//     } else {
//       divisor += 1;
//     }
//   }
//   if (ePrimo) {
//     console.log(num);
//     cont += 1;
//   }
//   num += 1;
// }
