let titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema de Nutrição Online Javascript";

let subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Pacientes";

let paciente = document.querySelector(".paciente");

let peso = paciente.querySelector(".peso").textContent;
let altura = paciente.querySelector(".altura").textContent;

let imc = peso/(Math.pow(altura,2));

let indice = paciente.querySelector(".indice");
indice.textContent = imc.toFixed(2);

