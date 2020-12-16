let todosPacientes = document.querySelector(".pacientes");

todosPacientes.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});
     


