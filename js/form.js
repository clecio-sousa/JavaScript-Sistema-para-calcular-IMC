
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // addEventListener - adiciona um evento ao clicar
	event.preventDefault(); //PREVINE O COMPORTAMENTO PADRÃO DO FORM AO ENVIAR OS DADOS
	

	// SELECIONANDO FORM
	var form = document.querySelector("#form-adiciona");

	var paciente = dadosFormulario(form);
	var pacienteTr = montaTr(paciente);

	//ADICIONANDO tr DENTRO DA tbody
	tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
	form.reset();

})

function dadosFormulario(form){
	//PEGANDO VALORES DO FORM
	var paciente = { //CRIANDO OBJETO PACIENTE
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");// createElement - cria um novo elemento no html
	pacienteTr.classList.add("paciente");

	//Cria as TD's e a adiciona dentro das TR
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	
	return pacienteTr;

}

function montaTd(dado, classe){

	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}