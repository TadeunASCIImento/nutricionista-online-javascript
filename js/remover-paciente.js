let todosPacientes = document.querySelector(".pacientes");

todosPacientes.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
        
    },500);
});
     


