//Llamando al texto y al boton
const texto = document.getElementById('texto_lineas');
const button = document.getElementById('botoncito');

//Llamando al elemento del canvas interactivo y creando el papel sobre el cúal dibujaremos
const dibujo = document.getElementById('interactivo');
const lienzo_interactivo = dibujo.getContext('2d'); 

//Función de dibujar las lineas de acuerdo a lo que ponga el usuario
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
        for(let i = 0; i < lineas; i++){//Cuando i sea menor a la cantidad que el usuario quiere ver.
            //Lineas azules de abajo
            interactiveLineDrawer( azulito, 0, i* 10, 10 * (i + 1), 300);
            //Lineas rojitas de arriba, se invierten los valores
            interactiveLineDrawer(rojito, 300, 10 * (i + 1), i*10, 0);
        }
    }
    displayingInteractiveLines();
};

//Cuando se accione el botón, llamará la función de arriba y dibujará las lineas
button.addEventListener('click', createUserPreferredLines);