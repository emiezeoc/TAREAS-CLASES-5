const nodoLista = document.querySelectorAll("li")

let arrayDeNumeros = []

for (let i = 0; i < nodoLista.length; i++) {
    
    arrayDeNumeros.push (Number(nodoLista[i].textContent))
}
