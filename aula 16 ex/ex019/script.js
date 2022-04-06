let tab =[]
let res = document.getElementById("res")

    function adiciona(){
    res.innerHTML =''
    let num = document.getElementById("numtxt")
    let n = Number(num.value)
    let existe = tab.indexOf(n)
    if(num.value.length==0){
        alert("Digite um número")
    }else if(n<1 ||n>100){
        alert("Valor fora do padrão")
    }else if (existe == -1){ 
        tab.push(n)
        let sel = document.getElementById("seltab")
        let item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado`
        sel.appendChild(item)
    }else{

        alert("Número já foi adicionado anteriormente")
    }
   
  num.value = ''
  num.focus()
}

  function finaliza(){
    tab.sort((a,b)=>a-b) //como ordenar numeros
    let soma = 0
    for (let pos =0; pos < tab.length; pos++){
        soma += tab[pos]
    }
    let media = (soma/tab.length)
    
    res.innerHTML = `Foram cadastrados ${tab.length} numeros <br>
    O maior valor informado é ${tab[tab.length -1]} <br>
    O menor valor informado é ${tab[0]}<br>
    À soma de todos os valores é ${soma}<br>
    A média dos valores informados é de: ${media}`
    

}