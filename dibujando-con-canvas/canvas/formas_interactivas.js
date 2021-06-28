//Llamando los elementos necesarios del DOM

//Los 4 botones de las 4 formas
const normal = document.getElementById('normal_dibujo');
const volteado = document.getElementById('volteado_dibujo');
const xbox = document.getElementById('xbox_dibujo');
const parabola = document.getElementById('parabolica_dibujo');

//Input de lineas que quiere el usuario
const texto_input = document.getElementById('texto_lineas_formas');

//Estandarizando el canvas para dibujar
const formas = document.getElementById('formas_interactivas');
const tablero = formas.getContext('2d');
//Estableciendo el ancho y alto
const anchoCanvas = formas.width;
const altoCanvas = formas.height;

//De manera global vamos a necesitar: la funcion que hace el dibujo de las lineas; y los colores.
const haceLineas = (color, x_inicial, y_inicial, x_final, y_final) => {
    tablero.beginPath(); //Arrancar un trazo
    tablero.strokeStyle = color; //El color de la linea
    tablero.moveTo(x_inicial, y_inicial);//Desde
    tablero.lineTo(x_final, y_final);//Hasta
    tablero.stroke();//Cerramos la linea
    tablero.closePath(); //Para levantar el lapiz
}
const azul = '#AAF';
const rojo = '#FAA';
const verde = '#AFA';


//Funciones especificas. 
//Lo que cambia es el posicionamiento de las lineas al momento de hacer el for.
//Para ejemplificar los calculos, voy a tomar como valores iniciales: ancho = 300; lineas que quiere el usuario = 30;
//Lo que significa: lineas = 30 (execpto gráfica del final); espacio = 10;
const normalDibujador = () => {
    const lineas = parseInt(texto_input.value);
    const espacio = anchoCanvas/lineas;
    for(let i = 0; i < lineas; i++){
        //Lineas azules de abajo
        /** 0 | i * 10 | 10 * (i +1) | 300
         * x1  y1  x2  y2
         * 0 10 20 300
         * 0 20 30 300
         */
        haceLineas( azul, 0, i* espacio, espacio * (i + 1), altoCanvas);
        //Lineas rojitas de arriba, se invierten los valores
        /** 300 | 10 * (i+1)| i*10 | 0 
         * x1  y1  x2  y2
         */
        haceLineas(rojo, altoCanvas, espacio * (i + 1), i*espacio, 0);
    }
};
const volteadoDibujador = () => {
    const lineas = parseInt(texto_input.value);
    const espacio = anchoCanvas/lineas;
    for(let i = 0; i < lineas; i++){
        //Lineas azules de abajo lado derecho
        haceLineas( azul, anchoCanvas, i* espacio, espacio * (lineas - i) , altoCanvas);
        //Lineas rojitas de arriba lado izquierdo
        haceLineas(rojo, 0, espacio * (lineas - i), i*espacio, 0);
    }
};
const xboxDibujador = () => {
    const lineas = parseInt(texto_input.value);
    const espacio = anchoCanvas/lineas;
    for(let i = 0; i < lineas; i++){
        //Lineas rojitas de arriba lado derecho
        haceLineas(verde, altoCanvas, espacio * (i + 1), i*espacio, 0);
        //Lineas rojitas de arriba lado izquierdo
        haceLineas(verde, 0, espacio * (lineas - i), i*espacio, 0);
    }
};
const parabolaDibujador = () => {
    const usuarioLineas = parseInt(texto_input.value);
    const lineas = usuarioLineas/2;
    //Como estamos dividiendo el canvas en cuatro partes iguales, si el usuario quiere ver 30 lineas, vamos a mostrar en un cuarto de espacio, 15 lineas, es decir, la mitad
    //De la misma manera, el ancho y alto de cada cuarto es igual a la mitad del ancho establecido del canvas 
    const anchoCuadrado = anchoCanvas/2;
    const espacio = anchoCuadrado/lineas;
    //Linea base estática horizontal
    haceLineas(rojo, 0, anchoCuadrado, anchoCanvas, anchoCuadrado);
    //Linea base estática vertical
    haceLineas(azul, anchoCuadrado, 0, anchoCuadrado, altoCanvas);
    /**
     * Ejemplos con valores de: 
     * usuarioLineas = 30
     * Lo cual quiere decir que: 
     * lineas = 15 ; anchoCuadrado = 150 ; espacio = 10;
     */
    for(let i = 0; i < lineas; i++){
        //Parte superior izquierda
        /** 150 | i * 10 | 10 * (15 - i) | 150
         * x1  y1  x2  y2
         * 150 10 140 150
         * 150 20 130 150
         */
        haceLineas(rojo, anchoCuadrado, i * espacio, espacio * (lineas - i), anchoCuadrado);

        //Parte inferior izquierda 
        /** 150 | 150 + (10 * (15 - i)) | 10 * (15 - i) | 150
         * x1  y1  x2  y2
         * 150 290 140 150 
         * 150 280 130 150
         */
        haceLineas(rojo, anchoCuadrado, anchoCuadrado + (espacio * (lineas - i)), espacio * (lineas - i), anchoCuadrado);

        //Parte superior derecha
        /** 150 | i * 10 | 150 + (i * 10) | 150
         * x1  y1  x2  y2
         * 150 10 160 150
         * 150 20 170 150
         */
        haceLineas(azul, anchoCuadrado, i * espacio, anchoCuadrado + (i * espacio), anchoCuadrado);

        //Parte inferior derecha         
        /** 150 | 150 + (10 * i) | 150 + (i * 10) | 150
         * x1  y1  x2  y2 
         * 150 160 160 150
         * 150 170 170 150
         */
        haceLineas(azul, anchoCuadrado, anchoCuadrado + (espacio * (lineas - i)), anchoCuadrado + (i * espacio), anchoCuadrado);
    }   
};


//Cada vez que se haga el click, llamará cierta funcion especifica
normal.addEventListener('click', normalDibujador);
volteado.addEventListener('click', volteadoDibujador);
xbox.addEventListener('click', xboxDibujador);
parabola.addEventListener('click', parabolaDibujador);
