//Ecuación de aleatoriedad 
const aleatoriedad = (maximo, minimo) => {
    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return resultado;
}

let n;

for(let i = 0; i < 10; i++){
    n = aleatoriedad(12, 90);
}