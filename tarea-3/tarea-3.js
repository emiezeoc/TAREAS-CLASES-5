const $botonCrearFormulario = document.querySelector("#crear-formulario");
const $botonMostrarResultado = document.querySelector("#boton-mostrar-resultado")

const $formularioDeVideos = document.querySelector("#formulario-creado")
const $resultado = document.querySelector("#resultado")

$botonCrearFormulario.onclick = function(){
    mostrarBotonResultado()
    const $cantidadDeClases = Number(document.querySelector("#cantidad-clases").value);
    crearFormularios($cantidadDeClases)
    ocultarBotonCrearFormulario()
    
    return $cantidadDeClases;
}

function mostrarBotonResultado(){
    $botonMostrarResultado.className= ""
    return false
}

function crearFormularios($cantidadDeClases){

    for (let i = 0; i < $cantidadDeClases; i++) {

    let $labelHoras = document.createElement("label")
    $labelHoras.for= `horas-${i+1}`
    $labelHoras.textContent= `horas de clase-${i+1}`
        
    let $inputsHoras = document.createElement("input")
    $inputsHoras.id = `horas-${i+1}`
    $inputsHoras.className= "horas"
    $inputsHoras.placeholder= "hs"
    $inputsHoras.type= "number"

    let $labelMinutos = document.createElement("label")
    $labelMinutos.for= `minutos-${i+1}`
    $labelMinutos.textContent= `minutos de clase-${i+1}`

    let $inputsMinutos = document.createElement("input")
    $inputsMinutos.id = `minutos-${i+1}`
    $inputsMinutos.className= "minutos"
    $inputsMinutos.placeholder= "mins"
    $inputsMinutos.type= "number"

    let $labelSegundos = document.createElement("label")
    $labelSegundos.for = `segundos-${i+1}`
    $labelSegundos.textContent = `segundos de clase- ${i+1}`
    
    let $inputsSegundos = document.createElement("input")
    $inputsSegundos.id = `segundos-${i+1}`
    $inputsSegundos.className = "segundos"
    $inputsSegundos.placeholder = "seg"
    $inputsSegundos.type ="number"

    $formularioDeVideos.appendChild($labelHoras)
    $formularioDeVideos.appendChild($inputsHoras)

    $formularioDeVideos.appendChild($labelMinutos)
    $formularioDeVideos.appendChild($inputsMinutos)

    $formularioDeVideos.appendChild($labelSegundos)
    $formularioDeVideos.appendChild($inputsSegundos)
    }

    return false;
}

function ocultarBotonCrearFormulario(){
    $botonCrearFormulario.className = "oculto"
} 

$botonMostrarResultado.onclick = function(){
    const horas = document.querySelectorAll(".horas");
    const minutos = document.querySelectorAll(".minutos");
    const segundos = document.querySelectorAll(".segundos");

    calcularTiempo(horas,minutos, segundos)

    return false;
}

function calcularTiempo(horas, minutos, segundos){
    
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for (let i = 0; i < segundos.length; i++) {
        totalSegundos += Number(segundos[i].value)
        if (totalSegundos > 59) { 
            totalSegundos = totalSegundos - 60
            totalMinutos++
        }
    }

    for (let i = 0; i < minutos.length; i++) {
        totalMinutos += Number(minutos[i].value)
        if(totalMinutos > 59){
           totalMinutos = totalMinutos -60
           totalHoras++  
        }
    }

    for (let i = 0; i < horas.length; i++) {
        totalHoras += Number(horas[i].value)  
    }

    mostrarResultado(totalHoras, totalMinutos, totalSegundos)

    return totalHoras, totalMinutos, totalSegundos;
}

function mostrarResultado(totalHoras, totalMinutos, totalSegundos) {
    const $outputResultado = document.querySelector("#output-mostrar-resultado")
    $outputResultado.className = ""
    $outputResultado.value= `Has visto ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} de videos hasta ahora`

    return false;
}
