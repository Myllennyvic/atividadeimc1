const InNumero = document.querySelector('#InNumero');
const outTabuada = document.querySelector('#outTabuada');
const btnMostrar = document.querySelector('#btnMostrar')

btnMostrar.addEventListener('click', ()=>{
    let numero = Number(InNumero.value)
    
    if(numero === 0 || isNaN(numero)){
        alert('Digite um número válido')
        InNumero.focus();
        return
    }
    let resposta = ''
    for(let i = 1; i<= 10; i++){
        resposta = `${resposta+numero} x ${i} = ${numero*i}`
    }
    outTabuada.innerHTML = `${resposta} `
})