let x;
let y;
let z;

document.getElementById("botao").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("labelX").innerHTML = x;
    document.getElementById("labelY").innerHTML = y;
    document.getElementById("labelZ").innerHTML = z;

}