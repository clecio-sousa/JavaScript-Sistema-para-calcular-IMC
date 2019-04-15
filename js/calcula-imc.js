//1ª FORMA
console.log(document.querySelector(".titulo")); 
var pacientes = document.querySelectorAll(".paciente");//SELECIONA TODOS DA CLASSE PACIENTE
//querySelector PERMITE BUSCAR TAGS NO HTML

//2ª FORMA
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);//IMPRIME O CONTEUDO DA VARIAVEL TITULO
titulo.textContent = "Aparecida Nutricionista"; // ALTERA O CONTEUDO DA VAR TITULO


for(i = 0; i< pacientes.length; i++){

	var paciente = pacientes[i];	
	
	//SELECIONANDO PESO E ALTURA
	var tdPeso = paciente.querySelector(".info-peso"); //SELECIONANDO A TAG
	var peso = tdPeso.textContent;//pegando o conteudo 
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	//CALCULANDO IMC
	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	//	CONDICAO DO PESO
	if (peso < 0 || peso > 1000){
		tdImc.textContent = "Peso Invalido";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	//	CONDICAO DA ALTURA
	if(altura < 0 || altura >= 3.00){
		tdImc.textContent = "Altura invalida";
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}

	//	CONDICAO DO PESO E ALTURA
	if((altura <= 0 || altura >= 3.00) && (peso <= 0 || peso >= 1000)){
		tdImc.textContent = "Altura e peso invalido";
		alturaEhValida = false;
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
		
	}

	if (pesoEhValido && alturaEhValida){
		
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;

		//CONDICAO DO IMC DE ACORDO COM A TABELA
		/*if (imc >=18.5 && imc <=24.99){
			tdImc.textContent = imc + " -- Normal";
			paciente.classList.add("paciente-normal");// CRIANDO UMA NOVA CLASSE PRA SER USADA NO CSS

			}

		else if(imc >=25 && imc <=29.99){
				tdImc.textContent = imc + " -- Acima do peso";
				paciente.classList.add("paciente-acima-peso");
			}		

		else if(imc >=30 && imc <=34.99){
				tdImc.textContent = imc + " -- Obeso";
				paciente.classList.add("paciente-obeso");
			}	

		else if(imc >=35){
				tdImc.textContent = imc + " -- obesidade severa";
				paciente.classList.add("paciente-obesidade-severa");
			}*/
		}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso /(altura * altura);	

	return imc.toFixed(1);

}


