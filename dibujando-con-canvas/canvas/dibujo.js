( () => {

 
//Seleccionando el elmento
var d = document.getElementById('dibujito');

//Método del objeto canvas. Este va a ser nuestro papel donde dibujaremos.
var lienzo = d.getContext('2d'); 

//Las funciones pueden ser ubicadas en cualquier lugar del documento, al inicio o al final.
//Esto sucede porque JS guarda las funciones y las pone de primeras en memoria.

//Funcion para crear lineas
const lineDrawer = (color, x_inicial, y_inicial, x_final, y_final, lienzo) => {//Parámetros para dinamicamente modificar
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color; //El color de la linea
    lienzo.moveTo(x_inicial, y_inicial);//Desde
    lienzo.lineTo(x_final, y_final);//Hasta
    lienzo.stroke();//Cerramos la linea
    lienzo.closePath(); //Para levantar el lapiz
}

//Creando las lineas de abajo usando un ciclo for
const creadorLineas = () => {
    const azulito = '#AAF';
    const rojito = '#FAA';
    for(let i = 0; i < 30; i++){
        //Lineas azules de abajo
        lineDrawer( azulito, 0, i* 10, 10 * (i + 1), 300, lienzo);
        //Lineas rojitas de arriba, se invierten los valores
        lineDrawer(rojito, 300, 10 * (i + 1), i*10, 0, lienzo);
    }
}
creadorLineas();
})()
