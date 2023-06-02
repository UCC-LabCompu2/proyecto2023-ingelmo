/**
 * Muestra en pantalla el valor que se ingreso en la barra
 * @method mostrarValor
 * @param {string} id - Id del elemento input del HTML
 * @param {string} valor - Contiene el valor del input que ingreso el usuario
 */
let mostrarValor = (id, valor) => {
    document.getElementById(id).textContent = valor;
}

/**
 * Calcula la altura final que va a tener el bloque colgado luego de recibir el impacto de la bala
 * @method calcularOp
 */
let calcularOp = () => {
    let masa1, masa2, vel1, vel2, res1, res2, res3, res4, resultadofinal;

    masa1 = parseFloat(document.getElementById("mas-bala").value);
    vel1 = parseFloat(document.getElementById("vel-bala").value);
    masa2 = parseFloat(document.getElementById("mas-bloque").value);

    if (masa1 === 0 || vel1 === 0 || masa2 === 0 || vel2 === 0) {
        alert("Error los valores ingresados no pueden ser iguales a cero ");
        reset();//Como hacer ara resetear todo??
    }
    res1= (masa1+masa2)*(masa1+masa2); //Los calculos para encontrar la altura final del bloque
    res2= (vel1*vel1);
    res3= (masa1*masa1);
    res4= res2*res3;
    resultadofinal= res4/(res1*2*9.8);
    resultadofinal=resultadofinal*0.01;

    resultadofinal= Math.round(resultadofinal*100)/100; //Para redondear el resultado final, cuando se ingresen valores muy bajos va a dar 0 como resultado final
    document.getElementById("altura_final").textContent = resultadofinal;
}

/**
 * Esta funcion sirve para mostrar un canvas cuando se apreta el boton enviar y los valores ingresados son correctos
 * @method dibujarPendulo
 */
let dibujarPendulo = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const margen = 8;

    //Dibujo del cuadrado 1
    ctx.beginPath();
    ctx.fillStyle = "#36b2c2"
    //Cuadrado: (x, y, largo, ancho)
    ctx.fillRect(180 + margen, alturaMax - 200 - margen, 150, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujo del cuadrado 2
    ctx.beginPath();
    ctx.fillStyle = "#0d3b42"
    //Cuadrado: (x, y, largo, ancho)
    ctx.fillRect(margen, 0-margen, anchoMax-175, 90);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujo del cuadrado 3
    ctx.beginPath();
    ctx.fillStyle = "#061d21"
    //Cuadrado: (x, y, largo, ancho)
    ctx.fillRect(220 + margen, 90 - margen, 1, alturaMax - 290);
    ctx.fillRect(290 + margen, 90 - margen, 1, alturaMax - 290);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();


}

/**
 * Esta funcion sirve para resetear el canvas cuando uno aprete el botos de restablecer los valores
 * @method calcularOp
 */
let reset = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}
