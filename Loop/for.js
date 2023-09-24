// let i;

// for(i=1; i <=10; i+=2){
//     console.log(i);
// }
// console.log("valor final de i = " + i);

// let largura, altura, area;

// largura = window.prompt("Insira a largura");
// altura = window.prompt("Insira a altura");

// function area(width, height){
//     return width * height
// }

// console.log(area(largura, altura));

for(let i=1; i<=3; i++){
    console.log(i);
}
// console.log(i); //let definida dentro de um escopo nao leva o valor para fora; var ja leva porem nao consegue sair de uma funçao; sempre definir variaveis globais como let e nao como var.
let b = 2;

function checkI(c){
    return c >= 3 ? true : false;
}

console.log(checkI(b));

let nome = "harry";

console.log(`ola ${nome}`);