let valor_cidade = [] // variavel global do tipo array

function inserir(){
    let cidade = document.getElementById('cidade').value
   valor_cidade.push(cidade)
    console.log(valor_cidade)
}

function excluir(){
    let cidade = document.getElementById('cidade').value
   valor_cidade.pop(cidade)
    console.log(valor_cidade)
}