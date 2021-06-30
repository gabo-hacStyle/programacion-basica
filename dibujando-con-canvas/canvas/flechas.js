//Determinando los valores de las teclas w, s, d, a según su keyCode en el navegador
const teclas = {
    UP: 87,
    DOWN: 83,
    LEFT: 65,
    RIGHT: 68
};
//Llamando los elementos necesarios del HTML
//Canvas
const cuadrito = document.getElementById('flechas');
const papel = cuadrito.getContext('2d');
//Inputs de color
const verdeInput = document.getElementById('colorVerde');
const azulInput = document.getElementById('colorAzul'); 
//Inputs del tamaño de las lineas
const texto_movimiento = document.getElementById('texto_tamaño'); 

//Las posiciones de 'x' y 'y' iniciales
let x = 150;
let y = 150;

//Función que dibuja lineas
const dibujaLineas = (color, x_inicial, y_inicial, x_final, y_final, lienzo) => {//Parámetros para dinamicamente modificar
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color; //El color de la linea
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);//Desde
    lienzo.lineTo(x_final, y_final);//Hasta
    lienzo.stroke();//Cerramos la linea
    lienzo.closePath(); //Para levantar el lapiz
}
//Punto central del canvas (circulo), donde va a empezar el movimiento
dibujaLineas('red', 149, 149, 151, 151, papel);
//Determinando la variable del color, para poder accesar a ella desde diferentes funciones
let colorElegido = "";

// Determinando que color se va a usar
//Si se presiona verde, devolver el valor verde
verdeInput.addEventListener('click', (evento) => {
    if (evento.returnValue == true){
        colorElegido = '#AFA';
    }
    else {
        colorElegido = "";
    }
})
//Si se presiona azul, devolver el valor azul
azulInput.addEventListener('click', (evento) => {
    if(evento.returnValue == true){
        colorElegido = '#AAF';
    }
    else {
        colorElegido = "";
    }
})

//Función que va a dibujar y determinar las lineas
const tecladoOprimido = (evento) => {//Siempre este parametro se va a llenar de informacion de lo que está escuchando   
    //Extrayendo el valor de la caja de texto en entero. El tamaño de la linea
    const movimiento = parseInt(texto_movimiento.value);

    //De acuerdo a la tecla elegida va a moverse 
    switch(evento.keyCode){
        //Si es 'w' hacia arriba: Restamos al valor de 'y'
       case teclas.UP:
            dibujaLineas(colorElegido, x, y, x, y - movimiento, papel);
            //El valor final de donde se encuentra 'y' para saber donde empieza la siguente linea referente a la anterior
            //Similar con los valores abajo
            y = y - movimiento;
        break;
          //Si es 's' hacia abajo: Sumamos al valor de 'y'
        case teclas.DOWN:
            dibujaLineas(colorElegido, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        //Si es 'a' hacia la izquiera: Restamos al valor de 'x'
        case teclas.LEFT:
            dibujaLineas(colorElegido, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        //Si es 'd' hacia la derecha: Sumamos al valor de 'x'
        case teclas.RIGHT:
            dibujaLineas(colorElegido, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
    }
}

//Cada vez que se oprima el teclado se va a ejecutar la funcion
document.addEventListener('keydown', tecladoOprimido);