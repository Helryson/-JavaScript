let nome = "                       Harry Rodric         ";
let numero = "12-34567890";

//console.log(nome.length);        Imprime a quantidade de caracteres dentro da string nome, inclui os espaços.
//console.log(nome.charAt(0));         "H".
//console.log(nome.indexOf("o"));        Index da primeira aparição, index 2.
//console.log(nome.lastIndexOf("r"));       Index(9) Sensível a CapsLock.
nome = nome.trim();       //Remove espaçamento antes e depois
//nome = nome.toLowerCase();     Deixa todas as letras minúsculas.
//nome = nome.toUpperCase();       Deixa todas as letras maiúsculas.

numero = numero.replaceAll("-", "/");

console.log(nome);
console.log(numero);