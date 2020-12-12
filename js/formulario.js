let botaoEnviar = document.querySelector("#botao-enviar");
botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    let formulario = document.querySelector(".formulario-paciente");
    let paciente = obterDadosDoPaciente(formulario);
    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
       exibeMensagensDeErro(erros);
        return; 
    }else{   
        let pacientes = document.querySelector(".pacientes");
        pacientes.appendChild(pacienteTr);
        formulario.reset();
        let mensagensErro = document.querySelector(".mensagens-erro");
        mensagensErro.innerHTML = "";
    }

});

function exibeMensagensDeErro(erros){
    let ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function validaPaciente(paciente){
    let erros = [];
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");  
   
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    
    if(paciente.nome.length == 0) erros.push("Campo nome é obrigatório!");
    
    if(paciente.sobrenome.length == 0) erros.push("Campo sobrenome é obrigatório!");
    
    if(paciente.peso.length ==0)erros.push("Campo peso é obrigatório!");
    
    if(paciente.altura.length ==0)erros.push("Campo altura é obrigatório!");
    
    return erros;
}

function obterDadosDoPaciente(formulario) {
    let paciente = {
        nome: formulario.nome.value,
        sobrenome: formulario.sobrenome.value,
        altura: formulario.altura.value,
        peso: formulario.peso.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}


function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("pacientes");
     
    pacienteTr.appendChild(montaTd(paciente.nome,"nome"));
    pacienteTr.appendChild(montaTd(paciente.sobrenome,"sobrenome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"altura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"indice"));

    return pacienteTr;

}

function montaTd(dado,classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
