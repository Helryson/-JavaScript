let a;
let b;
let c;

document.getElementById("Botao").onclick = function() {

    a = Number(document.getElementById("textoA").value);
    b = Number(document.getElementById("textoB").value);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Lado C: " + c;

}