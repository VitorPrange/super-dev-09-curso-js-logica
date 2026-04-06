function exercicio03(){
    let nomeProduto = "Alvejante"
    let precoProduto = 21.63;
    let quantidadeProduto = 9;
    let valorTotal = precoProduto * quantidadeProduto;
    let desconto = valorTotal * 0.10;
    let valorDescontado = valorTotal - desconto;

    alert("Nome do produto: " + nomeProduto + "\n" +
        "Preço do produto: R$" + precoProduto + "\n" + 
        "Quantidade: " + quantidadeProduto + "\n" +
        "Valor total: R$" + valorTotal.toFixed(2) + "\n" +
        "Valor com desconto de 10%: R$" + valorDescontado.toFixed(2)
    )
}