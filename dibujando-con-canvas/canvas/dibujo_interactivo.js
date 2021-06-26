//Llamando al texto y al boton
const texto = document.getElementById('texto_lineas');
const button = document.getElementById('botoncito');

//Llamando al elemento del canvas interactivo y creando el papel sobre el cúal dibujaremos
const dibujo = document.getElementById('interactivo');
const lienzo_interactivo = dibujo.getContext('2d'); 
//Determinando el ancho del canvas. Propiedad que se va a utilizar para realizar el cálculo más adelante
const ancho = dibujo.width;

//Llamando al contenedor del texto que indica recargar la la página
const recargar = document.getElementById('action_to_reload');

//Función *principal* de dibujar las lineas de acuerdo a lo que ponga el usuario
const createUserPreferredLines = () =>{
    //Guardar en memoria el valor introducido por el usuario de forma numerica
    const lineas = parseInt(texto.value);
    //La función que hace la acción de dibujar lineas
    const interactiveLineDrawer = (color, x_inicial, y_inicial, x_final, y_final) => {//Parámetros para dinamicamente modificar
        lienzo_interactivo.beginPath(); //Arrancar un trazo
        lienzo_interactivo.strokeStyle = color; //El color de la linea
        lienzo_interactivo.moveTo(x_inicial, y_inicial);//Desde
        lienzo_interactivo.lineTo(x_final, y_final);//Hasta
        lienzo_interactivo.stroke();//Cerramos la linea
        lienzo_interactivo.closePath(); //Para levantar el lapiz
    }
    
    //Creando las lineas que el usuario quiera ver usando un ciclo for
    const displayingInteractiveLines = () => {
        const azulito = '#AAF';
        const rojito = '#FAA';
        //Sí el usuario quiere una cantidad de lineas, el espacio entre las lineas a travez del canvas
        //debe cambiar. Esto se hace con el cálculo de el ancho del canvas (300) dividido entre las lineas que el usuario quiere ver
        //Ese valor se guarda en esta variable para que al momento de dibujar las lineas, se dibujen 
        // a travez de todo el canvas y con espacios diferentes.
        const espacioLineas = ancho/lineas;

        //El creador de las multiples lineas
        for(let i = 0; i < lineas; i++){//Cuando i sea menor a la cantidad que el usuario quiere ver.
            //Lineas azules de abajo
            interactiveLineDrawer( azulito, 0, i* espacioLineas, espacioLineas * (i + 1), ancho);
            //Lineas rojitas de arriba, se invierten los valores
            interactiveLineDrawer(rojito, ancho, espacioLineas * (i + 1), i*espacioLineas, 0);
        }
    }
    displayingInteractiveLines();

    //Avisarle al usuario que recargue la página
    const callToReloadPage = () => {
        recargar.append(`Sí quieres volver a ver el lienzo en blanco, debes recargar la página.`)
    }
    callToReloadPage();
};

//Cuando se accione el botón, llamará la función de arriba y dibujará las lineas
button.addEventListener('click', createUserPreferredLines);