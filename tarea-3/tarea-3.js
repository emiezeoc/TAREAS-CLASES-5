const $botonCrearFormulario = document.querySelector("#crear-formulario");
let $cantidadDeClases;

$botonCrearFormulario.onclick = function(){
    $cantidadDeClases = Number(document.querySelector("#cantidad-clases").value);

    crearFormularios($cantidadDeClases)
    crearBotonResultado()

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

    nodoPagina.appendChild($labelHoras)
    nodoPagina.appendChild($inputsHoras)

    nodoPagina.appendChild($labelMinutos)
    nodoPagina.appendChild($inputsMinutos)

    nodoPagina.appendChild($labelSegundos)
    nodoPagina.appendChild($inputsSegundos)
    }

    $inputsHoras = Number(document.querySelectorAll(".horas").value)
    $inputsMinutos = Number(document.querySelectorAll(".minutos").value)
    $inputsSegundos = Number(document.querySelectorAll(".segundos").value)

    return $inputsHoras, $inputsMinutos, $inputsSegundos;
}

function crearBotonResultado(){
    const $botonDeCalculo = document.createElement("button")
    $botonDeCalculo.type= "button"
    $botonDeCalculo.id = "resultado"
    $botonDeCalculo.textContent = "RESULTADO"

    const nodoForm= document.querySelector("form")

    nodoForm.appendChild($botonDeCalculo)

    return false
}

function calcularTiempo($inputsHoras,$inputsMinutos,$inputsSegundos){

    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for (let i = 0; i < $inputsSegundos; i++) {
        totalSegundos += Number($inputsSegundos[i].value)  
    }

    for (let i = 0; i < $inputsMinutos; i++) {
        totalMinutos += Number($inputsMinutos[i].value)  
    }

    for (let i = 0; i < $inputsHoras; i++) {
        totalHoras += Number($inputsHoras[i].value)  
    }
    console.log(totalHoras)
    console.log(totalMinutos)
    console.log(totalSegundos)


    return totalHoras, totalMinutos, totalSegundos;
}