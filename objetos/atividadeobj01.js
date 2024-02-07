//Crie um novo array de objetos que combine as propriedades de ambos, 
//resultando em objetos que contêm o nome, categoria e preço de cada produto.

let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

function combinar (protudos, precos){
   //map usando aqui para selecionar o produto.
   return produtos.map((produto) => {
      //find - para procurar a igualdade entre os arrays  
      let precoProdutos = precos.find((preco) => preco.name === produto.nome);
   
   return {
      nome : produto.nome,
      categoria : produto.categoria,
      precos: precoProdutos.preco
   };  
   });
}

const combinarP = combinar(produtos, precos)
console.log(combinarP)

// //atividade 02 

function filtrar (arrayP, categoria){
   return arrayP.filter((produto)=> produto.categoria === categoria);
}
const categoriaP = filtrar(combinarP, 'Roupas')
console.log(categoriaP)

//atividade 03 
let produtos1 = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

function precoTotal(produtos1, quantidades){
   return produtos1.map((produtos1, index)=> {
      let precoVendo = produtos1.preco * quantidades[index]

      return {
         nome : produtos1.nome,
         preco : produtos1.preco,
         valorTotal : precoVendo
      }
   })
}
const precoVendaProduto = precoTotal(produtos1, quantidades)
console.log(precoVendaProduto)

//atividade 04 
let mercadoria = [
   { nome: 'Camiseta', preco: 20 },
   { nome: 'Celular', preco: 500 },
   { nome: 'Caneca', preco: 10 }
 ];
function precoMinino(arrayProduto, valorMinino){
   return arrayProduto.filter((produto)=> produto.preco >= valorMinino)
}
const produtoAcimaDoMinimo = precoMinino(mercadoria, 50)
console.log(produtoAcimaDoMinimo)

