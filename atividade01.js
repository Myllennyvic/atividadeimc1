
function verificarPouN (){
    verificar = Number(prompt(`insira um número para saber se é positivo ou negativo`));
    if(verificar > 0){
      alert(`1`)
    }else if(verificar < 0){
        alert(`0`)
    }
    
  return verificarPouN 
}

console.log(verificarPouN())