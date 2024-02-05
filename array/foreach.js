// listar // recebe 3 parametros : elemento, 2 - indice (opcional), array (opcional)
array.forEach((elemento, indice) =>{
    console.log(`${indice} - ${elemento}`)
})
const listarDados = (elemento) => console.log(elemento)
array.forEach(listarDados)