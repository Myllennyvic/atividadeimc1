
// function soma (a, b){
//     const soma = a + b 
//     if(soma > 5){
//         console.log(`valor não permitido ${soma}`)
//     }else{
//         return soma
//     }
// }
// console.log(soma(2, 2) + 4) // ok
// console.log(soma(2)) // NaN
// console.log(soma()) // NaN
// console.log(soma(2,2,2,3,4,5)) // resolve
// console.log(soma(2,5)) //

// EXEMPLO 02 

// function multiplicacao(){
//    let multi = 1 
//    for(i in arguments){
//        multi *= arguments [i]
//    }
//    return multi 
// }

// console.log(multiplicacao())
// console.log(multiplicacao(5))
// console.log(multiplicacao(5,5))

// function triplo(x){
//     return 3 * x 
// }

// let triplo = function(x){
//     return 3 * x 
// }

// // triplo = (x) => {
// //     return 3 * x  se colocar as chaves usa a return 
// // }

// console.log(triplo(Math.PI))

// // triplo = (x) => 3 * x; o return já esta incluido 
 
// console.log(triplo(3))

// oi = () => `oi`;
// console.log(oi());

// oi = _ => `oi!`
// console.log(oi())

const soma = function(x, y){
   return x + y 
}

const resultado = function(a, b , operacao = soma){
    console.log(operacao(a, b))
}
resultado(5, 5)
resultado(5, 5, soma)
resultado(5, 5, function(x, y){
     return x * y
})
resultado(3, 3, (x, y)=> x/y)