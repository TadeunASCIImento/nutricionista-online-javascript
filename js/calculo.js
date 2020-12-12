let pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente=>{  

    let peso = paciente.querySelector(".peso").textContent;
    let altura = paciente.querySelector(".altura").textContent;
    let indice = paciente.querySelector(".indice");
    
    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
     
    if(!pesoEhValido){
        pesoEhValido = false;
        indice.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
     
    }
    
    if(!alturaEhValida){
        alturaEhValida = false;
        indice.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        let imc = calculaImc(peso,altura);
        indice.textContent = imc;
    }
    
});

function validaPeso(peso){
    if(peso >= 0 && peso <= 600){
        return true;
    }else{
        return false;
    }
}


function validaAltura(altura){
    if(altura >=0   && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    let imc = 0;
    imc = peso/(Math.pow(altura,2));
    return imc.toFixed(2);
}

