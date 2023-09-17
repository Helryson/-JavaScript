let a, b, c, d, e;

document.getElementById("addTarefa").onclick = function(){
    if(document.getElementById("tarefa1").innerHTML.trim() === ""){ 
        a = window.prompt("Adicionar tarefa 1:");
        document.getElementById("tarefa1").textContent = a;
    }
    else if(document.getElementById("tarefa2").innerHTML.trim() === ""){ 
        b = window.prompt("Adicionar tarefa 2:");
        document.getElementById("tarefa2").textContent = b;
    }
    else if(document.getElementById("tarefa3").innerHTML.trim() === ""){ 
        c = window.prompt("Adicionar tarefa 3:");
        document.getElementById("tarefa3").textContent = c;
    }
    else if(document.getElementById("tarefa4").innerHTML.trim() === ""){ 
        d = window.prompt("Adicionar tarefa 4:");
        document.getElementById("tarefa4").textContent = d;
    }
    else if(document.getElementById("tarefa5").innerHTML.trim() === ""){ 
        e = window.prompt("Adicionar tarefa 5:");
        document.getElementById("tarefa5").textContent = e;
    }
    else{
        window.alert("Limite de tarefas atingido.\n\nClique em OK para continuar.");
    }
}