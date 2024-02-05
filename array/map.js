// MAP - listar dados, porém, com eles vamos pegar esses dados e para listar no front se tiver o map, 
// pegar os dados e vamos criar um novo array, e modificar 
console.log(array)
array.map((elemento) => {
     console.log(elemento*3)
})
const litarmap = (elemento) => console.log(elemento)
array.map(litarmap)