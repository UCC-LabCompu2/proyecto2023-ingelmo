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
 * Esta funcion sirve para resetear el canvas cuando uno aprete el boton de "restablecer los valores"
 * @method reset
 */
let reset = () => {
    //Resetea el dibujo del canvas
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

/**
 * Esta funcion sirve para mostrar en un canvas el dibujo de un pendulo, luego de apretar el boton enviar
 * @method dibujarPendulo, dibujarPendulo2
 */
var balax=0;
var bloquex=180;
var bloquey =0;
var vbalah=0;
var vbloqueh=0;
var cont1=0;
var cont2=0;
var hfinal;

let dibujarPendulo = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const margen = 8;
    bloquey= alturaMax;

    canvas.width = canvas.width;

    //Dibujo del cuadrado 0 (Es para que cuando se muestran valores en el canvas se borren y se ingrese los nuevos correctamente)
    ctx.beginPath();
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(45 + margen, alturaMax - 200 - margen, 400, 120);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujo del cuadrado 1
    ctx.beginPath();
    ctx.fillStyle = "#36b2c2"
    ctx.fillRect(bloquex + margen, bloquey - 165 - margen - vbalah, 150, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujo del cuadrado 2
    ctx.beginPath();
    ctx.fillStyle = "#0d3b42"
    ctx.fillRect(margen, 0-margen, anchoMax-175, 90);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujo del cuadrado 3 lineas
    ctx.beginPath();
    ctx.fillStyle = "#061d21"
    ctx.fillRect(220 + margen, 90 - margen - vbalah, 1, alturaMax - 255);
    ctx.fillRect(290 + margen, 90 - margen - vbalah, 1, alturaMax - 255);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujo de la bala
    balax+=1;
    ctx.beginPath();
    ctx.fillStyle = "#2a3131"
    ctx.arc(balax + margen, alturaMax - 114, 3.5, 0, 2*Math.PI); //Antes estaba en x:90+margen
    ctx.fillRect(balax - 20 + margen, alturaMax - 118 - vbalah, 20, 8); //Antes estaba en x:70+margen
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    balax+=1;

    if(balax < 198 + margen) {
        requestAnimationFrame(dibujarPendulo);
    } else if(balax >= 198 + margen && vbalah < hfinal){
        calcularOp();
        requestAnimationFrame(dibujarPendulo);
        hfinal-=1;
    }


}

/**
 * Calcula la altura final que va a tener el bloque colgado luego de recibir los datos ingresados. Aparte en el canvas va a mostrar los distintos datos ingresados en sus respectivos dibujos
 * @method calcularOp
 */
var contador1=60; //Contador de posicion de m1 y v1
var contador2=230; //Contador de posicion m2
var contador3
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
        hfinal = -resultadofinal;

        dibujarPendulo();
        //Mostrar palabras en el canvas:


        function mostrarPalabras() {
            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");

            //Texto de la masa 1
            ctx.beginPath();
            ctx.font = "11pt Verdana";
            ctx.fillStyle = "#050000";
            ctx.fillText("m1:", contador1, 225);
            ctx.fillText(masa1, 90, 225);
            ctx.fillText("g", 123, 225);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            //Texto de la vel 1
            ctx.beginPath();
            ctx.font = "11pt Verdana";
            ctx.fillStyle = "#050000";
            ctx.fillText("v1:", contador1, 260);
            ctx.fillText(vel1, 90, 260);
            ctx.fillText("m/s", 123, 260);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            //Texto de la masa 2
            ctx.beginPath();
            ctx.font = "11pt Verdana";
            ctx.fillStyle = "#050000";
            ctx.fillText("m2:", 230, 240);
            ctx.fillText(masa2, 260, 240);
            ctx.fillText("g", 293, 240);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
}

