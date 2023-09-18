document.getElementById("addTarefa").onclick = function(){
    if(document.getElementById("tarefa1").innerHTML.trim() === ""){ 
        document.getElementById("tarefa1").textContent = window.prompt("Adicionar tarefa 1:");
    }
    else if(document.getElementById("tarefa2").innerHTML.trim() === ""){ 
        document.getElementById("tarefa2").textContent = window.prompt("Adicionar tarefa 2:");
    }
    else if(document.getElementById("tarefa3").innerHTML.trim() === ""){ 
        document.getElementById("tarefa3").textContent = window.prompt("Adicionar tarefa 3:");
    }
    else if(document.getElementById("tarefa4").innerHTML.trim() === ""){ 
        document.getElementById("tarefa4").textContent = window.prompt("Adicionar tarefa 4:");
    }
    else if(document.getElementById("tarefa5").innerHTML.trim() === ""){ 
        document.getElementById("tarefa5").textContent = window.prompt("Adicionar tarefa 5:");
    }
    else{
        window.alert("Limite de tarefas atingido.\n\nClique em OK para continuar.");
    }
}
document.getElementById("rt1").onclick = function(){
    document.getElementById("tarefa1").textContent = "";
    document.getElementById("marc1").checked = false;
}
document.getElementById("rt2").onclick = function(){
    document.getElementById("tarefa2").textContent = "";
    document.getElementById("marc2").checked = false;
}
document.getElementById("rt3").onclick = function(){
    document.getElementById("tarefa3").textContent = "";
    document.getElementById("marc3").checked = false;
}
document.getElementById("rt4").onclick = function(){
    document.getElementById("tarefa4").textContent = "";
    document.getElementById("marc4").checked = false;
}
document.getElementById("rt5").onclick = function(){
    document.getElementById("tarefa5").textContent = "";
    document.getElementById("marc5").checked = false;
}