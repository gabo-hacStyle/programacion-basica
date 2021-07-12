//Variables estáticas globales
//Imagenes
const vaca = document.getElementById('vaquita');
const cerdo = document.getElementById('cerdito');
const gallina = document.getElementById('pollo');
const tile = document.getElementById('fondo');

//Canvas
const canvas = document.getElementById('villa-canvas');
const papel = canvas.getContext('2d');

let img = new Image();
img.src = './tile.png';

img.addEventListener('load', dibujar)

function dibujar (){
    papel.drawImage(tile, 0, 0);
}    
    
//Ecuación de aleatoriedad 
/*
const aleatoriedad = (maximo, minimo) => {
    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return resultado;
}*/

let n;

for(let i = 0; i < 10; i++){
    n = aleatoriedad(12, 90);
}