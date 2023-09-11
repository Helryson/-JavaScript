document.getElementById("btn").onclick = function(){

    let visaBtn = document.getElementById("visaBtn").checked;
    let mastercardBtn = document.getElementById("mastercardBtn").checked;
    let nubankBtn = document.getElementById("nubankBtn").checked;

    if(document.getElementById("sub").checked){
        console.log("Obg por se inscrever!")
    }
    else{
        console.log("Que pena, parece que você ainda não se inscreveu :(")
    }

    if(visaBtn || mastercardBtn || nubankBtn ){
        console.log("Obg, volte sempre!")
    }
    else{
        console.log("Por favor, selecione um método de pagamento.")
    }

}