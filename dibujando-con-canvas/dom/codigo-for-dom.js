//Guardando la URL del window en una variable 'ruta'
const ruta = window.location;
//Mandandola a escribir debajo de la explicación en el archivo.
document.write(`
<h1 style="text-align: center;"> Este es el resultado de window.location concatenado como string </h1>
<p style="text-align: center;">Estás en ${ruta} </p>`);