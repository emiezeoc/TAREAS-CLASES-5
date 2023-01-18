

const $botonCrearFormulario = document.querySelector("#crear-formulario");
let $cantidadDeClases;

$botonCrearFormulario.onclick = function(){
    $cantidadDeClases = Number(document.querySelector("#cantidad-clases").value);

crearFormularios($cantidadDeClases)


return $cantidadDeClases;
}




function crearFormularios($cantidadDeClases){

const nodoPagina = document.querySelector("div")

    for (let i = 0; i < $cantidadDeClases; i++) {


let $labelHoras = document.createElement("label")
$labelHoras.for= `horas-${i+1}`
$labelHoras.textContent= `horas de clase-${i+1}`
    
    
    
let $inputsHoras = document.createElement("input")
    $inputsHoras.id = `horas-${i+1}`
    $inputsHoras.className= "horas"
    $inputsHoras.placeholder= "hs"

 


let $labelMinutos = document.createElement("label")
    $labelMinutos.for= `minutos-${i+1}`
    $labelMinutos.textContent= `minutos de clase-${i+1}`



let $inputsMinutos = document.createElement("input")
    $inputsMinutos.id = `minutos-${i+1}`
    $inputsMinutos.className= "minutos"
    $inputsMinutos.placeholder= "mins"


let $labelSegundos = document.createElement("label")
    $labelSegundos.for = `segundos-${i+1}`
    $labelSegundos.textContent = `segundos de clase- ${i+1}`
    
let $inputsSegundos = document.createElement("input")
    $inputsSegundos.id = `segundos-${i+1}`
    $inputsSegundos.className = "segundos"
    $inputsSegundos.placeholder = "seg"

nodoPagina.appendChild($labelHoras)
nodoPagina.appendChild($inputsHoras)

nodoPagina.appendChild($labelMinutos)
nodoPagina.appendChild($inputsMinutos)

nodoPagina.appendChild($labelSegundos)
nodoPagina.appendChild($inputsSegundos)
    }

return false;
}