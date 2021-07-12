//Variables estáticas globales
//DOM
//Cantidades. Será renderizado en el titulo <h2>
const cantidadVaca = document.getElementById('vaca');
const cantidadCerdo = document.getElementById('cerdo');
const cantidadPollo = document.getElementById('pollo');
//Descripcion sobre donde están ubicadas en el canvas en una lista <ul><li>
const descripcionVaca = document.getElementById('vacas');
const descripcionCerdo = document.getElementById('cerdos');
const descripcionPollo = document.getElementById('pollos');
//Canvas
const canvas = document.getElementById('villa-canvas');
const papel = canvas.getContext('2d');

//Guardamos dos valores de las imagenes: url's y estado de carga (esta inicia en falso) 
//Guardamos estos valores en objetos literales
const fondo = {//Para el fondo
    url: 'tile.png',
    cargaOK: false
}
const vaca = { //Para la vaca
    url: 'vaca.png',
    cargaOK: false
}
const cerdo = { //Para el cerdo
    url: 'cerdo.png',
    cargaOK: false
}
const pollo = { //Para el pollo
    url: 'gallina.png',
    cargaOK: false
}


//Función que va a hacer el trabajo de dibujar todo.
const dibujar = () => {
    if(fondo.cargaOK){ //Sí el estado de carga es verdadero, sí ya cargó
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){//Sí el estado de carga es verdadero, sí ya cargó
        //La cantidad de vacas que aparecen. UN numero random entre 2 y 15
        const cantidad = aleatoriedad(2, 15);
        //Ciclo para repetir el dibujo la cantidad de veces que la funcion de alietoridad lo determine.
        for(let v = 0; v < cantidad; v++){
            const x = aleatoriedad(0, 420);//Valor de x (aleatorio)
            const y = aleatoriedad(0, 420);//Valor de y (aleatorio)
            //Va a dibujar sobre el canvas la imagen en 'x' y 'y' aleatorios
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK){//Sí el estado de carga es verdadero, sí ya cargó
        //La cantidad de cerdos que aparecen. UN numero random entre 1 y 25
        const cantidad = aleatoriedad(1, 25);
        //Ciclo para repetir el dibujo la cantidad de veces que la funcion de alietoridad lo determine.
        for(let c = 0; c < cantidad; c++){
            const x = aleatoriedad(0, 420);//Valor de x (aleatorio)
            const y = aleatoriedad(0, 420);//Valor de y (aleatorio)
            //Va a dibujar sobre el canvas la imagen en 'x' y 'y' aleatorios
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK){//Sí el estado de carga es verdadero, sí ya cargo
        //La cantidad de pollos que aparecen. UN numero random entre 1 y 40
        const cantidad = aleatoriedad(1, 40);
        //Ciclo para repetir el dibujo la cantidad de veces que la funcion de alietoridad lo determine.
        for(let p = 0; p < cantidad; p++){
            const x = aleatoriedad(0, 420);//Valor de x (aleatorio)
            const y = aleatoriedad(0, 420);//Valor de y (aleatorio)
            //Va a dibujar sobre el canvas la imagen en 'x' y 'y' aleatorios
            papel.drawImage(pollo.imagen, x, y);
        }
    }    
};

//Creamos las imagenes
//Dentro del objeto literal al que cada uno pertenece, ponemos como nueva propiedad la imagen
//Y establecemos el atributo 'src' como la url del objeto

//Fondo (tile)
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;

//Creando la imagen de la vaca
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

//Creando la imagen del cerdo 
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

//Creando la imagen de el pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;


//Ahora establecemos las funciones de carga 
//Cambia el estado de carga a true y llama la funcion de dibujar
//Se ejecutarán estas funciones cuando carguen las imagenes

//Para el fondo 
const cargarFondo = () => {
    fondo.cargaOK = true;
    dibujar();
}

//Para las vacas
const cargarVacas = () => {
    vaca.cargaOK = true;
        dibujar()
}

//Para los cerdos
const cargarCerdos = () => {
    cerdo.cargaOK = true;
        dibujar();
}

//Para los pollos
const cargarPollos = () => {
    pollo.cargaOK = true;
        dibujar();
}

//Llamar las funciones cuando las imagenes carguen
//Fondo 
fondo.imagen.addEventListener('load', cargarFondo);
//Vacas
vaca.imagen.addEventListener('load', cargarVacas);
//Cerdos
cerdo.imagen.addEventListener('load', cargarCerdos);
//Llamar la pollos
pollo.imagen.addEventListener('load', cargarPollos);

//Ecuación de aleatoriedad 
//Declaracion de la función que define los numeros de manera aleatoria.
//Como parametros tenemos los numeros minimos y maximos
const aleatoriedad = (minimo, maximo) => {
    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return resultado;
};