let buscar = document.querySelector("#botao-buscar");

buscar.addEventListener("click",function(){

    let xhr = new XMLHttpRequest();
    
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){

        if(xhr.status == 200){

            let pacientes = JSON.parse(xhr.responseText);
            
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente); 
                
            });
        }else{
           console.log(xhr.status);
           console.log(xhr.responseText);
        }
    });
    xhr.send();
});