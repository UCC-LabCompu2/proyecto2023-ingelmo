
/**
 * Muestra en pantalla el valor que se ingreso en la barra
 * @method mostrarValor
 * @param {string} id - Id del elemento input del HTML
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */
let mostrarValor = (id, valor) => {
    document.getElementById(id).textContent = valor;
}

/**
 * Calcula la altura final que va a tener el bloque colgado luego de recibir el impacto de la bala
 * @method calcularOp
 */
let calcularOp = () => {
    let masa1, masa2, vel1, vel2, res1, res2, res3, res4, res5, altura_final;

    masa1 = parseFloat(document.getElementById("mas-bala").value);
    vel1 = parseFloat(document.getElementById("vel-bala").value);
    masa2 = parseFloat(document.getElementById("mas-bloque").value);

    if (masa1 === 0 || vel1 === 0 || masa2 === 0 || vel2 === 0) {
        alert("Error los valores ingresados no pueden ser iguales a cero ");
    }
    res1= (masa1+masa2)*(masa1+masa2); //Los calculos para encontrar la altura final del bloque
    res2= (vel1*vel1);
    res3= (masa1*masa1);
    res4=res2*res3;
    res5=res4/(res1*2*9.8);

    Math.round(res5);

    document.getElementById("altura_final").textContent = res5;
}
