/*
let nome = Number(window.prompt("Qual o seu nome?")); Esse comando cria uma janela que pede para o usuario informar algum tipo de dado. sem a indicação do tipo de dado, o default seria uma string.

let idade = 19;
let estudante = true;
console.log(nome, typeof nome); 
*/

let nome;

document.getElementById("meuBotao").onclick = function(){

nome = document.getElementById("meuTexto").value; // Nome apenas será definido dentro da function, se pedir para printar fora dela, irá mostrar que a variável se encontra vazia.
console.log(nome);
document.getElementById("meuLabel").innerHTML = "Ola " + nome;
document.getElementById("p1").innerHTML = "Ola " + nome;

}

let x;
let y;
let z;

x = Number("314"); //"314" é String mas sera lido como número por conversão.
y = String(313); // 313 sem "" é lido como número, mas o tipo sera String por conversão.
z = Boolean(""); // Se boolean nao conter nada, será "false", pois a ausência é 0 e 0 é false, se conter algo sera true, ou 1.

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);