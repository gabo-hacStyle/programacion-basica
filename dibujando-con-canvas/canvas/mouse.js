//Trayendo lo necesario del DOM para interactuar 
const mouse = document.getElementById('mouse_canvas');
const plantilla = mouse.getContext('2d');
//Input que pregunta el tamaño de la linea
const largo = document.getElementById('texto_mouse');

//Variables de posiciones iniciales
let x_start = 150;
let y_start = 150;


//Dibuja Lineas
const lineDoer = (color, x_inicial, y_inicial, x_final, y_final, lienzo) => {//Parámetros para dinamicamente modificar
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color; //El color de la linea
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);//Desde
    lienzo.lineTo(x_final, y_final);//Hasta
    lienzo.stroke();//Cerramos la linea
    lienzo.closePath(); //Para levantar el lapiz
}
//El color con el que se van a dibujar las lineas
const rojito = '#F55';

//Punto medio de inicio
lineDoer(rojito, 149, 149, 151, 151, plantilla);

//Lineas de apoyo **Mirar como señalar cuales son las que hay que oprimir
//Primera linea de arriba a abajo
lineDoer('#EEE', 0, 100, 300, 100, plantilla);
//Primera linea de izquierda a derecha
lineDoer('#EEE', 100, 0, 100, 300, plantilla);
//Ultima linea de izquierda a derecha
lineDoer('#EEE', 200, 0, 200, 300, plantilla);
//Ultima linea de arriba a abajo
lineDoer('#EEE', 0, 200, 300, 200, plantilla);

//Función de ejecutar las lineas
const mouseOprimido = (evento) => {
    //El tamaño en valor de entero y no string
    let size = parseInt(largo.value);

    //Para simplficar codigo, evento.layer es la posicion del mouse en referente al canvas
    const x = evento.layerX;
    const y = evento.layerY;

    //Empezamos con if statements
    
    // Para moverse a la Izquierda
    //Restamos el valor de x 
    if(x <= 100 && y > 100 && y  < 200){
        lineDoer(rojito, x_start, y_start, x_start - size, y_start, plantilla);
        x_start = x_start - size;
    } //Para moverse a la Derecha 
    //Sumamos el valor de x
    else if(x >= 200 && y > 100 && y  < 200){
        lineDoer(rojito, x_start, y_start, x_start + size, y_start, plantilla);
        x_start = x_start + size;  
    }   // Para moverse hacia Arriba  
    //Le restamos valor a y
    else if(y <= 100 && x > 100 && x < 200){
        lineDoer(rojito, x_start, y_start, x_start, y_start - size, plantilla);
        y_start = y_start - size;
    }   //Para moverse hacia Abajo 
    //Le sumamos valor a y
    else if(y >= 200 && x > 100 && x < 200){
            lineDoer(rojito, x_start, y_start, x_start, y_start + size, plantilla);
            y_start = y_start + size;      
    }
}

//Cuando el mouse sea accionado, ejecutará la función de ejecutar las lineas
mouse.addEventListener('mouseup', mouseOprimido);
