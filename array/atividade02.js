//Dado um array de palavras, crie uma função que receba esse array e 
//retorne um novo array contendo apenas as palavras que têm mais de três letras.

const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

const maiorque3Palavras = palavras.filter((palavras) =>{
    var n = palavras.length
    if(n > 3){
       return n
    }
})
console.log(maiorque3Palavras)