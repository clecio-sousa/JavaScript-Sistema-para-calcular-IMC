
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // addEventListener - adiciona um evento ao clicar
	event.preventDefault(); //PREVINE O COMPORTAMENTO PADRÃO DO FORM AO ENVIAR OS DADOS
	console.log("botao clicado");

	// SELECIONANDO FORM

	var form = document.querySelector("#form-adiciona");

	var paciente = dadosFormulario(form);
	console.log(paciente);

	
	var pacienteTr = document.createElement("tr");// createElement - cria um novo elemento no html

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	//ALTERANDO VALORES CAPTURADOS DO FORM
	nomeTd.textContent = nome;
	pesoTd.textContent = peso
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso, altura);


	//ADICIONANDO td DENTRO DA tr usando appendChild
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	//ADICIONANDO tr DENTRO DA tbody
	tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

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