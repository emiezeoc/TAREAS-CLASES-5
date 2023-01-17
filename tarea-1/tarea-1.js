





document.querySelector("#calcular-salario-mensual").onclick = function() {

const $salarioAnual= Number (document.querySelector("#ingresar-salario-anual").value);
const salarioMensual= dividirPorDoce($salarioAnual)

document.querySelector("#salario-mensual").value = salarioMensual

return false;
}

function dividirPorDoce($salarioAnual){

return $salarioAnual/12;
}

