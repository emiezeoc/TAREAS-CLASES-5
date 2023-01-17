const $botonSaludarUsuario = document.querySelector("#saludar-usuario");



$botonSaludarUsuario.onclick = function() {

    obtenerDatosUsuario()
    saludarUsuario(primerNombreUsuario, segundoNombreUsuario)
    mostrarDatosUsuario(primerNombreUsuario, segundoNombreUsuario, edadUsuario)


    return false;
}


function obtenerDatosUsuario(){

    primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value
    segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value
    edadUsuario= Number(document.querySelector("#edad-usuario").value)

return primerNombreUsuario, segundoNombreUsuario, edadUsuario;
}



function saludarUsuario(primerNombreUsuario, segundoNombreUsuario) {

const tituloBienvenida = document.querySelector("#titulo-principal");
tituloBienvenida.textContent = `Bienvenido  ${primerNombreUsuario}  ${segundoNombreUsuario}` 

return false;
}


function mostrarDatosUsuario(primerNombreUsuario,segundoNombreUsuario,edadUsuario){
    
    const mensajeBienvenida = document.querySelector("#mensaje-bienvenida");
    mensajeBienvenida.textContent = `Bienvenido a la pagina ${primerNombreUsuario} ${segundoNombreUsuario} de ${edadUsuario} años` 

return false;
}


