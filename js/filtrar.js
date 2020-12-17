let filtro = document.querySelector("#filtro");

filtro.addEventListener("input", function() {
	console.log(this.value);
	let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
		pacientes.forEach(paciente => {
			let tdnome = paciente.querySelector(".nome");
			let nome = tdnome.textContent;
			console.log(nome);
			if(nome != this.value) {
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