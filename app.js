console.log("Curso de JS");

let inputNumero = document.getElementById("inputNumero");
let inputLimiteSuperior = document.getElementById("inputLimiteSuperior");

let calcularButton = document.getElementById("calcular-button");

calcularButton.addEventListener("click", () => {
    let numero = parseInt(inputNumero.value);
    let limiteSuperior = parseInt(inputLimiteSuperior.value);

    let tablaMultiplicar = [];

    for (let i = 1; i <= limiteSuperior; i++) {
        let resultado = numero * i;
        tablaMultiplicar.push(`${numero} * ${i} = ${resultado}`);
    }

    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = tablaMultiplicar.join("<br>");

    inputNumero.value = numero;
    inputLimiteSuperior.value = limiteSuperior;

    registrarCombinacion(numero, limiteSuperior);
});

let clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = '';
    inputNumero.value = '';
    inputLimiteSuperior.value = '';
});

let ultimasCombinaciones = [];

function registrarCombinacion(numero, limiteSuperior) {
    ultimasCombinaciones.unshift({ numero, limiteSuperior });
    llenarListaDesplegable();
}

function llenarListaDesplegable() {
    const select = document.getElementById("ultimas-combinaciones");
    select.innerHTML = '<option value="" disabled selected>Última Combinación</option>';
    for (const combinacion of ultimasCombinaciones) {
        const option = document.createElement("option");
        option.value = `${combinacion.numero} * ${combinacion.limiteSuperior}`;
        option.text = `${combinacion.numero} * ${combinacion.limiteSuperior}`;
        select.appendChild(option);
    }
}

