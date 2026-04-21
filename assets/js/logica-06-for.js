function exemploForBasico(){
    for(let indice = 0; indice < 4; indice = indice + 1){
        alert(indice);
    }
}

function exemploforJogos(){

    let total = 0;

    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome do jogo");
        let preco = parseInt(prompt("Digite o valor do jogo"));

        total = total + preco
    }

    alert("Total: " + total);
}

function exemploForProdutos(){

    let quantidadePadaria = 0, quantidadeUtensilios = 0, quantidadeCarnes = 0;

    for(let indice = 0; indice < 3; indice = indice +1){

        let produto = prompt("Digite o nome do produto").trim();
        let categoria = prompt("Digite a categoria do produto [Carnes, Padaria, Utensilios]").trim();

        while(categoria.toLowerCase() !== "carnes" && categoria.toLowerCase() !== "padaria" && categoria.toLowerCase() !== "utensilios"){
            categoria = prompt("Categoria invalida, Digite a categoria do produto [Carnes, Padaria, Utensilios]").trim();
        }

        let preco = parseFloat(prompt("Digite o preço do produto"));

        if(categoria.toLowerCase() === "padaria"){
            quantidadePadaria = quantidadePadaria + 1;
        }
        else if(categoria.toLowerCase() === "utensilios"){
            quantidadeUtensilios = quantidadeUtensilios + 1;
        }
        else if(categoria.toLowerCase() === "carnes"){
            quantidadeCarnes = quantidadeCarnes + 1;
        }
    }
    alert("QUantidade padaria: " + quantidadePadaria + "\n" +
        "Quantidade utensilios: " + quantidadeUtensilios + "\n" +
        "Quantidade carnes: " + quantidadeCarnes
    );
}

function exemploForContagemRegressiva(){

    for(let indice = 10; indice > 0; indice = indice - 1){
        alert(indice);
    }
}

function exemploDescobrirQuantidadePar(){
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de numeros a validar"));
    let quantidadePares = 0;

    for(let index = 0; indice < quantidadeNumeros; index = index + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero % 2 === 0){
            quantidadePares = quantidadePares + 1;
        }
    }
    alert(quantidadePares);
}