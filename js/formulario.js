let botaoEnviar = document.querySelector("#botao-enviar");
botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    let formulario = document.querySelector(".formulario-paciente");
    let paciente = obterDadosDoPaciente(formulario);
    let pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
        return; 
    }else{   
        let pacientes = document.querySelector(".pacientes");
        pacientes.appendChild(pacienteTr);
        formulario.reset();
    }

});

function validaPaciente(paciente){
    if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
       return true;
    }else{
        return false
    }

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
