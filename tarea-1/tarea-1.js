document.querySelector("#calcular-salario-mensual").onclick = function() {
    const $salarioAnual= Number (document.querySelector("#ingresar-salario-anual").value);
    const salarioMensual= dividirPorMeses($salarioAnual)
    
    dividirPorMeses($salarioAnual)
    mostrarResultado(salarioMensual)
    
    return false;
}

function dividirPorMeses($salarioAnual) {
    const mesesDelAnio= 12
    return $salarioAnual/mesesDelAnio;
}

function mostrarResultado(salarioMensual) {
    document.querySelector("#salario-mensual").value = salarioMensual
    
    return false; 
}
