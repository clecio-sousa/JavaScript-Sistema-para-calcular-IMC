var campoFiltro = document.querySelector("#filtrar-paciente");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++ ){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome"); //busca o Td dentro da Tr o nome do paciente
            var nome = tdNome.textContent; //busca o conteudo da td

            var expressao = new RegExp(this.value, "i"); //modificador i = busca por case-insensitive


            if(expressao.test(nome)){//funcao test - compara com o que foi digitado pelo usuario
                paciente.classList.remove("invisivel");
            }else{
                paciente.classList.add("invisivel");
            }
        } 
    }else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
       
});