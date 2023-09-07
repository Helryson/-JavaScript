let nome = "                       Harry Rodric         ";
let numero = "12-34567890";

//console.log(nome.length);        Imprime a quantidade de caracteres dentro da string nome, inclui os espaços.
//console.log(nome.charAt(0));         "H".
//console.log(nome.indexOf("o"));        Index da primeira aparição, index 2.
//console.log(nome.lastIndexOf("r"));       Index(9) Sensível a CapsLock.
nome = nome.trim();       //Remove espaçamento antes e depois
//nome = nome.toLowerCase();     Deixa todas as letras minúsculas.
//nome = nome.toUpperCase();       Deixa todas as letras maiúsculas.
//numero = numero.replaceAll("-", "/");

let primeiroNome;
let sobrenome;

//primerioNome = nome.slice(0, 5); //Pega desde o index zero ate 1 index antes do 5;
//sobrenome = nome.slice(6); //Pega do index 6 em diante;

primeiroNome = nome.slice(0, nome.indexOf(" "));
sobrenome = nome.slice(nome.indexOf(" ") + 1);

console.log(primeiroNome);
console.log(sobrenome);
//console.log(nome);
//console.log(numero);


let nick = "     pianta";
let letra = nick.charAt(0).toUpperCase().trim(); //Modo de chamar um metodo depois do outro.