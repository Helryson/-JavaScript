let c = 0;

document.getElementById("contagem").innerHTML = c;

document.getElementById("dim").onclick = function(){
    c -= 1;
    document.getElementById("contagem").innerHTML = c;
}

document.getElementById("res").onclick = function(){
    c = 0;
    document.getElementById("contagem").innerHTML = c;
}

document.getElementById("aum").onclick = function(){
    c += 1;
    document.getElementById("contagem").innerHTML = c;
}