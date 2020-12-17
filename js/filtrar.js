let filtro = document.querySelector("#filtro");

filtro.addEventListener("input", function() {
	let pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0) {
		pacientes.forEach(paciente => {
			let tdnome = paciente.querySelector(".nome");
			let nome = tdnome.textContent;
	        let expressao = new RegExp(this.value,"i");		
			if(!expressao.test(nome)) {
				paciente.classList.add("hidden");
			} else {
				paciente.classList.remove("hidden");
			}
        });
        
	} else {
		pacientes.forEach(paciente => {
			paciente.classList.remove("hidden");
		});
	}
});