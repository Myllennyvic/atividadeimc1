
function dobrarValor (x){
  const dobrarValor = x * 2 
  return dobrarValor
}
console.log(dobrarValor())

function triplicarValor (a){
    const triplicarValor = a * 3
    return triplicarValor
}
console.log(triplicarValor())

const resultado = function(param, fun1, fun2){
   const dobrarValor = fun1(param)
   const triplicarValor = fun2(param)
   console.log(`O NÚMERO ${param}, o dobro ${dobrarValor} e o triplo ${triplicarValor}`)
}
resultado(2, dobrarValor, triplicarValor)