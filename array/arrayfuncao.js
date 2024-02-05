const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
const array1 = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
// retorna undefined se não encontrar o elemento // ele encontra o primeiro elemento que 
//atende a condição e para.
const maiorQue30 = array.find((elemento)=>{
     return elemento > 30 
})
console.log(maiorQue30)
// filter encontra todos que atende a condição pedida.
const maiorQue31 = array.filter((elemento)=>{
    return elemento > 31
})
console.log(maiorQue31)