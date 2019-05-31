var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();//faz requisicoes assincronas cpm JS

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");// requesicoes da API

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        //feedback dos status das requisicoes
        if(xhr.status==200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

             pacientes.forEach(function(paciente){
                adicionaPacienteNatabela(paciente);
        });

        }else{
            erroAjax.classList.remove("invisivel")           
            
        }      
        
    })
    xhr.send();
});