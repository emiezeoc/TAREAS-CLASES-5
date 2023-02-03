const nodoLista = document.querySelectorAll("li")
let arrayDeNumeros = []
const $botonCalcularPromedio = document.querySelector("#boton-calcular-promedio");
const $botonObtenerElNumeroMenor = document.querySelector("#boton-obtener-numero-menor");
const $botonObtenerElNumeroMayor = document.querySelector("#boton-obtener-numero-mayor");
const $botonObtenerModa = document.querySelector("#boton-obtener-moda")



$botonCalcularPromedio.onclick = function() {
    for (let i = 0; i < nodoLista.length; i++) {
        arrayDeNumeros.push (Number(nodoLista[i].textContent))
    }
    calcularPromedio(arrayDeNumeros)
    
    return false; 
}

function calcularPromedio(arrayDeNumeros){

    let sumatoriaDelArray = 0
    for (let i = 0; i < arrayDeNumeros.length; i++) { 
        sumatoriaDelArray += arrayDeNumeros[i];
        promedioDelArray = sumatoriaDelArray/arrayDeNumeros.length
    }
    
    return console.log(promedioDelArray);
}
