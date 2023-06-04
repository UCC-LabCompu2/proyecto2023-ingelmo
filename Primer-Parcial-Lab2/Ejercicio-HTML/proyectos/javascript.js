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
 * Esta funcion sirve para resetear el canvas cuando uno aprete el botos de restablecer los valores
 * @method calcularOp
 */
let reset = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

/**
 * Esta funcion sirve para mostrar en un canvas el dibujo de un pendulo luego de apretar el boton enviar
 * @method dibujarPendulo
 */
let dibujarPendulo = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const margen = 8;

    //Dibujo del cuadrado 0 (Es para que cuando se muestran valores en el canvas se borren y se ingrese los nuevos correctamente )
    ctx.beginPath();
    ctx.fillStyle = "#ffffff"
    //Cuadrado: (x, y, largo, ancho)
    ctx.fillRect(45 + margen, alturaMax - 200 - margen, 400, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

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


    //Dibujo de la bala
    ctx.beginPath();
    ctx.fillStyle = "#2a3131"
    ctx.arc(90 + margen, alturaMax - 154, 3.5, 0, 2*Math.PI);
    ctx.fillRect(70 + margen, alturaMax - 158, 20, 8);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

/**
 * Calcula la altura final que va a tener el bloque colgado luego de recibir los datos ingresados
 * @method calcularOp, reset, dibujarPendulo
 */
let calcularOp = () => {
    let masa1, masa2, vel1, res1, res2, res3, res4, resultadofinal;

    masa1 = parseFloat(document.getElementById("mas-bala").value);
    vel1 = parseFloat(document.getElementById("vel-bala").value);
    masa2 = parseFloat(document.getElementById("mas-bloque").value);

    if (masa1 === 0 || vel1 === 0 || masa2 === 0) {
        alert("Error los valores ingresados no pueden ser iguales a cero ");
        reset();
    }else {
        res1 = (masa1 + masa2) * (masa1 + masa2); //Los calculos para encontrar la altura final del bloque
        res2 = (vel1 * vel1);
        res3 = (masa1 * masa1);
        res4 = res2 * res3;
        resultadofinal = res4 / (res1 * 2 * 9.8);
        resultadofinal = resultadofinal * 0.01;

        resultadofinal = Math.round(resultadofinal * 100) / 100; //Para redondear el resultado final, cuando se ingresen valores muy bajos va a dar 0 como resultado final
        document.getElementById("altura_final").textContent = resultadofinal;
        dibujarPendulo();

        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        //Mostrar palabras para el canvas:
        //Texto de la masa 1
        ctx.beginPath();
        ctx.font="11pt Verdana";
        ctx.fillStyle = "#050000";
        ctx.fillText( "m1:", 60, 285);
        ctx.fillText( masa1, 90, 285);
        ctx.fillText( "g", 123, 285);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        //Texto de la vel 1
        ctx.beginPath();
        ctx.font="11pt Verdana";
        ctx.fillStyle = "#050000";
        ctx.fillText( "v1:", 60, 320);
        ctx.fillText( vel1, 90, 320);
        ctx.fillText( "m/s", 123, 320);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        //Texto de la masa 2
        ctx.beginPath();
        ctx.font="11pt Verdana";
        ctx.fillStyle = "#050000";
        ctx.fillText( "m2:", 230, 300);
        ctx.fillText( masa2, 260, 300);
        ctx.fillText( "g", 293, 300);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}
