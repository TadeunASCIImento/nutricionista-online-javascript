let titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema de Nutrição Online Javascript";


let subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Pacientes";


let pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente=>{  

    let peso = paciente.querySelector(".peso").textContent;
    let altura = paciente.querySelector(".altura").textContent;
    let indice = paciente.querySelector(".indice");
    
    let pesoEhValido = true;
    let alturaEhValida = true;
     
    if(peso < 0 || peso > 500){
        pesoEhValido = false;
        indice.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
     
    }
    
    if( altura < 0 |! altura > 3){
        alturaEhValida = false;
        indice.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        let imc = peso/(Math.pow(altura,2));
        indice.textContent = imc.toFixed(2);
    }
    
});
    


