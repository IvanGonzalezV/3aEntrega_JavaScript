console.log("Curso de JS");

let inputNumero = document.getElementById("inputNumero");
let inputLimiteSuperior = document.getElementById("inputLimiteSuperior");

let floatingInput = document.getElementById("floatingInput");
let floatingLimiteSuperior = document.getElementById("floatingLimiteSuperior");

let tablaMultiplicar = [];

let calcularButton = document.getElementById("calcular-button");

calcularButton.addEventListener("click", () => {
    let numero = parseInt(inputNumero.value);
    let limiteSuperior = parseInt(inputLimiteSuperior.value);

    tablaMultiplicar = [];

    for (let i = 1; i <= limiteSuperior; i++) {
        let resultado = numero * i;
        tablaMultiplicar.push(`${numero} * ${i} = ${resultado}`);
    }

    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = tablaMultiplicar.join("<br>");

    
    floatingInput.value = numero; 
    floatingLimiteSuperior.value = limiteSuperior; 

    
    registrarCombinacion(numero, limiteSuperior);
});



let clearButton = document.getElementById("clear-button");

function clearResults() {
    resultadosDiv.innerHTML = '';
    floatingInput.value = ''; 
    floatingLimiteSuperior.value = ''; 
}

clearButton.addEventListener("click", clearResults);

let ultimasCombinaciones = [];

function registrarCombinacion(numero, limiteSuperior) {
    ultimasCombinaciones.unshift({ numero, limiteSuperior });

    if (ultimasCombinaciones.length > 20) {
        ultimasCombinaciones.pop();
    }

    llenarListaDesplegable();
}

function llenarListaDesplegable() {
    const select = document.getElementById("ultimas-combinaciones");

    select.innerHTML = '<option value="" disabled selected>Última Combinacion</option>';

    for (const combinacion of ultimasCombinaciones) {
        const option = document.createElement("option");
        option.value = `${combinacion.numero} * ${combinacion.limiteSuperior}`;
        option.text = `${combinacion.numero} * ${combinacion.limiteSuperior}`;
        select.appendChild(option);
    }
}
