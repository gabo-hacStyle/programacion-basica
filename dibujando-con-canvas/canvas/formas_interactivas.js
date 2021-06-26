//Llamando los elementos necesarios del DOM

//Los 4 botones de las 4 formas
const normal = document.getElementById('normal_dibujo');
const volteado = document.getElementById('volteado_dibujo');
const xbox = document.getElementById('xbox_dibujo');
const oblicua = document.getElementById('x-oblicua_dibujo');

//Input de lineas que quiere el usuario
const texto_input = document.getElementById('texto_lineas_formas');

//Estandarizando el canvas para dibujar
const formas = document.getElementById('formas_interactivas');
const tablero = formas.getContext('2d');
//Estableciendo el ancho
const anchoCanvas = formas.width;

//De manera global vamos a necesitar: la funcion del dibujo de las lineas y el color.
const lineMaker = (color, x_inicial, y_inicial, x_final, y_final) => {
    tablero.beginPath(); //Arrancar un trazo
    tablero.strokeStyle = color; //El color de la linea
    tablero.moveTo(x_inicial, y_inicial);//Desde
    tablero.lineTo(x_final, y_final);//Hasta
    tablero.stroke();//Cerramos la linea
    tablero.closePath(); //Para levantar el lapiz
}
const azul = '#AAF';
const rojo = '#FAA';


//Funciones especificas. 
//Lo que cambia es el posicionamiento de las lineas al momento de hacer el for.
const normalLineDrawer = () => {
    const wantedLines = parseInt(texto_input.value);
    const spaceLines = anchoCanvas/wantedLines;
    for(let i = 0; i < wantedLines; i++){
        //Lineas azules de abajo
        lineMaker( azul, 0, i* spaceLines, spaceLines * (i + 1), anchoCanvas);
        //Lineas rojitas de arriba, se invierten los valores
        lineMaker(rojo, anchoCanvas, spaceLines * (i + 1), i*spaceLines, 0);
    }
};
const volteadoLineDrawer = () => {
    const wantedLines = parseInt(texto_input.value);
    const spaceLines = anchoCanvas/wantedLines;
    for(let i = 0; i < wantedLines; i++){
        //Lineas azules de abajo lado derecho
        lineMaker( azul, anchoCanvas, i* spaceLines, spaceLines * (wantedLines - i) , anchoCanvas);
        //Lineas rojitas de arriba
        lineMaker(rojo, 0, spaceLines * (wantedLines - i), i*spaceLines, 0);
    }
};
const xboxLineDrawer = () => {
    const wantedLines = parseInt(texto_input.value);
    const spaceLines = anchoCanvas/wantedLines;
    for(let i = 0; i < wantedLines; i++){
        //Lineas azules de abajo
        lineMaker( azul, 0, i* spaceLines, spaceLines * (i + 1), anchoCanvas);
        //Lineas rojitas de arriba, se invierten los valores
        lineMaker(rojo, anchoCanvas, spaceLines * (i + 1), i*spaceLines, 0);
    }
};
const oblicuaLineDrawer = () => {
    const wantedLines = parseInt(texto_input.value);
    const spaceLines = anchoCanvas/wantedLines;
    for(let i = 0; i < wantedLines; i++){
        //Lineas azules de abajo
        lineMaker( azul, 0, i* spaceLines, spaceLines * (i + 1), anchoCanvas);
        //Lineas rojitas de arriba, se invierten los valores
        lineMaker(rojo, anchoCanvas, spaceLines * (i + 1), i*spaceLines, 0);
    }
};


//Cada vez que se haga el click, llamará cierta funcion especifica
normal.addEventListener('click', normalLineDrawer);
volteado.addEventListener('click', volteadoLineDrawer);
xbox.addEventListener('click', xboxLineDrawer);
oblicua.addEventListener('click', oblicuaLineDrawer);
