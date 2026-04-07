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
