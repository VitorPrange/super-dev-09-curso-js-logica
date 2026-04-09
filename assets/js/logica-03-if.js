function exemploBasico(){
    let numero = 1;

    if(numero === 1){
        alert("Um");
    }else{
        alert("Outro numero");
    }
}

function exemploBasico02(){
    let idade = parseInt(prompt("Informe a idade"));

    if(idade < 18){
        alert("Menor de idade");
    }else if(idade < 65){
        alert("Aulto");
    }else{
        alert("Idoso");
    }
}

function exemploBasico03(){
    let numero = parseInt(prompt("Informe o numero"));

    if(numero < 0){
        alert("Numero negativo");
    }else if(numero > 0){
        alert("Numero positivo");
    }else{
        alert("Numero neutro");
    }
}

function exemploProduto(){
    let produto = prompt("Digite o nome do produto");
    let quantidade = parseInt(prompt("Digite a quantidade"));

    let precoUnitario = 0;

    if(produto === "Maçã"){
        precoUnitario = 0.80;
    }else if(produto === "Pera"){
        precoUnitario = 1.20;
    }else if(produto === "Laranja"){
        precoUnitario = 2.50;
    }else if(produto === "Banana"){
        precoUnitario = 2.0;
    }else{
        alert("Produto não cadastrado")
        return;
    }

    let total = quantidade * precoUnitario;

    alert(
        "Produto: " + produto + "\n" + 
        "Quantidade: " + quantidade + "\n" +
        "Preço unitario: R$" + precoUnitario.toFixed(2) + "\n" +
        "Total: R$" + total.toFixed(2)
    )
}

let regular = 0;

let bom = 0;

let otimo = 0;

function avaliarRegular(){
    regular = regular + 1;
}

function avaliarBom(){
    bom = bom + 1;
}

function avaliarOtimo(){
    otimo = otimo + 1;
}

function finalizarAvaliacao(){
    alert(
        "Regular: " + regular + "\n" +
        "Bom: " + bom + "\n" +
        "Otimo: " + otimo
    );

    regular = 0;
    bom = 0;
    otimo = 0;
}

function exemploOperadorLogicoE(){
    let idade = parseInt(prompt("Digite a idade"));

    if((idade >= 0) && (idade <= 17)){
        alert("Criança ou Adolescente");
    } else if(idade >= 18){
        alert("Adulta");
    }else{
        alert("Idade inválida")
    }
}

/* 

Tabela verdade e operador E
V e V => V
V e F => F
F e V => F
F e F => F
*/

function exemploOperadorLogicoOu(){
    let transporte = prompt("Digite o meio de transporte para viajar");

    if((transporte === "moto") || (transporte === "carro")){
        alert("Viajar deboas");
    }else{
        alert("Viajar deruins");
    }
}

/* 

Tabela Verdade OU
V ou V => V
V ou F => V
F ou V => V
F ou F => F

*/

function exemploLoja(){
    let nome1 = prompt("Digite o nome do jogo 1");
    let categoria1 = prompt("Digite a categoria do jogo 1");
    let precoBase1 = 399.90;

    let precoComDesconto1 = 0;
    let percentualDesconto1 = 0;
    let precoDesconto1 = 0;

    if((categoria1 === "moba") || (categoria1 === "fps")){
        percentualDesconto1 = 0.10;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }else if((categoria1 === "aventura") || (categoria1 === "rpg")){
        percentualDesconto1 = 0.15;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }else if((categoria1 === "roguelike") || (categoria1 === "soulslike")){
        percentualDesconto1 = 0.20;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }


    let nome2 = prompt("Digite o nome do jogo 2");
    let categoria2 = prompt("Digite a categoria do jogo 2");
    let precoBase2 = 199.90;

    let precoComDesconto2 = 0;
    let percentualDesconto2 = 0;
    let precoDesconto2 = 0;

    if((categoria2 === "moba") || (categoria2 === "fps")){
        percentualDesconto2 = 0.10;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    }else if((categoria2 === "aventura") || (categoria2 === "rpg")){
        percentualDesconto2 = 0.15;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    }else if((categoria2 === "roguelike") || (categoria2 === "soulslike")){
        percentualDesconto2 = 0.20;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    }

    let totalPedido = precoComDesconto1 + precoComDesconto2;
    
    alert("Nome do jogo: " + nome1 + "\n" +
    "Categoria do jogo: " + categoria1 + "\n" +
    "Preço base: R$ " + precoBase1.toFixed(2) + "\n" + 
    "Valor do desconto: R$ " + precoDesconto1.toFixed + "\n" +
    "Percentual de desconto: " + percentualDesconto1 * 100 + "%" +"\n" +
    "Preço do jogo 1: R$ " + precoComDesconto1.toFixed(2) +

    "\n\n" +

    "Nome do jogo: " + nome2 + "\n" +
    "Categoria: " + categoria2 + "\n" +
    "Preço base: R$ " + precoBase2.toFixed(2) + "\n" +
    "Valor do desconto: R$ " + precoDesconto2.toFixed(2) + "\n" +
    "Percentual de desconto: " + percentualDesconto2 * 100 + "%" + "\n" +
    "Preço do jogo: R$ " + precoComDesconto2.toFixed(2) +

    "\n\n" + "Valor total: R$ " + totalPedido
    );

}