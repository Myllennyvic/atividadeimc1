const dobrarNumero = numero => numero * 2;

const triplicarNumero = numero => numero * 3;

const somaDobroETriplo = numero => {
    const resultado = [dobrarNumero(numero), triplicarNumero(numero)];
    return resultado.reduce((acc, curr) => acc + curr, 0);
};
const numero = 5 
console.log(somaDobroETriplo(numero));