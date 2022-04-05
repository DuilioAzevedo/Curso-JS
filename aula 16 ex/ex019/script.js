let tab =[]

    function adiciona(){
    let num = document.getElementById("numtxt")
    let n = Number(num.value)
    let existe = tab.indexOf(n)
    if(num.value.length==0){
        alert("Digite um número")


    }else if (existe == -1){ 
        tab.push(n)
    }else{

        alert("Número já foi adicionado anteriormente")
    }
   
  
}

  function finaliza(){
/**let sel = document.getElementById("seltab")
    let qntd = document.createElement('option')
    sel.innerHTML = ''

    qntd.value = `${tab.length}`
    sel.appendChild(qntd) */
    
    console.log (`Foram cadastrados ${tab.length} numeros`)
    tab.sort()
    //console.log (`O maior valor informado é ${tab.slice(-1)[0]}`)
    console.log (`O maior valor informado é ${tab[tab.length -1]}`)
    console.log (`O menor valor informado é ${tab[0]}`)
    let soma = 0
    for (let pos =0; pos < tab.length; pos++){
        soma += tab[pos]
    }
    console.log(`À soma de todos os valores é ${soma}`)
    let media = (soma/tab.length)
    console.log(`A média dos valores informados é de: ${media}`)

}