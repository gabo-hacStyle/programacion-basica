//Variables estáticas globales
//Imagenes
const vaca = './vaca.png';
const cerdo = './cerdo.png';
const gallina = '.gallina.png';

//Canvas
const canvas = document.getElementById('villa-canvas');
const papel = canvas.getContext('2d');

const imagen  = new Image();
imagen.src = tile;

const dibujar = () =>{
    papel.drawImage(tile, 0, 0);
}

imagen.addEventListener('load', dibujar);


//Ecuación de aleatoriedad 
const aleatoriedad = (maximo, minimo) => {
    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return resultado;
}

let n;

for(let i = 0; i < 10; i++){
    n = aleatoriedad(12, 90);
}