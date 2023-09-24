const resposta = Math.floor(Math.random() * 10 + 1);
let tentativa = 0;

document.getElementById("enviaResposta").onclick = function(){
    tentativa += 1;
    let a = document.getElementById("nmr").value;

    if(a == resposta){
        alert(`Parabéns, vc acertou em ${tentativa} tentativas!`)
    }
    else if(a > resposta){
        alert("Valor muito alto, tente um menor.");
    }
    else{
        alert("Valor muito baixo, tente um maior.");
    }
}