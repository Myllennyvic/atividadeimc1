//Crie duas funções, uma que dobre um número e outra que triplique um número. 
//Em seguida, crie uma terceira função que utilize essas duas funções para calcular 
//a soma do dobro e do triplo de um número.

const numeros = [1, 2, 3, 4, 5]

const dobrar = numeros.map((elemento1) => {
    console.log(elemento1*2)
})

const triplicar = numeros.map((elemento2) => {
    console.log(elemento2*3)
})

