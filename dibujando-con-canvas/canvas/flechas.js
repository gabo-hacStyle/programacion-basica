const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}
const cuadrito = document.getElementById('flechas');
const papel = cuadrito.getContext('2d');
let x = 150;
let y = 150;

const dibujaLineas = (color, x_inicial, y_inicial, x_final, y_final, lienzo) => {//Parámetros para dinamicamente modificar
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color; //El color de la linea
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);//Desde
    lienzo.lineTo(x_final, y_final);//Hasta
    lienzo.stroke();//Cerramos la linea
    lienzo.closePath(); //Para levantar el lapiz
}

dibujaLineas('red', 149, 149, 151, 151, papel);


const tecladoOprimido = (evento) => {//Siempre este parametro se va a llenar de informacion de lo que está escuchando   
    const verde = '#BFB';
    const movimiento = 10;
    switch(evento.keyCode){
       case teclas.UP:
        dibujaLineas(verde, x, y, x, y - movimiento, papel);
        y = y - movimiento;
       break;
        case teclas.DOWN:
            dibujaLineas(verde, x, y, x, y - movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujaLineas(verde, x, y, x, y - movimiento, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujaLineas(verde, x, y, x, y - movimiento, papel);
            x = x + movimiento;
            break;
        default:
            console.log('Otra tecla')
   }
}
document.addEventListener('keyup', tecladoOprimido);