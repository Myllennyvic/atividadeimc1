let pessoa = {
    nome: `myllenny`,
    idade: 17,
    altura : 1.51,
    enderecos : [
        {
            type : `Residencial`,
            Street : `Rua A`,
            City : `Maceio`
        },
        {
            type : `Residencial`,
            Street : `Rua B`,
            City : `Salvador`
        }
    ],
    saudacao(){
        return `olá mundo`
    }
}
console.log(pessoa.nome)
console.log(pessoa.saudacao()) // pega o nome da variável, e quiser uma chave especifica faz isso "pessoa.nome"
console.log(pessoa.enderecos[0].Street)

//listar todos os enderecos desse objetos 

pessoa.enderecos.forEach((elemento, indice)=>{
      console.log(`${indice + 1} - ${elemento.Street}`)
})
