function exemplo01(){
    // mostrar uma mensagem 4 vezes
    debugger

    let indice = 0;

    while(indice < 4){
        console.log("Oie");
        indice = indice + 1;
    }
}

function exemploSolicitarNumeros(){
    debugger
    
    let indice = 0;

    while(indice <= 2){
        let numero = parseInt(prompt("Digite o numero"));
        indice = indice + 1;
    }

    alert("Muito obrigado");
}

function solicitarDadosPaciente(){
    let indice = 0;

    while(indice <= 2){
        let nome = prompt("Digite seu nome").trim();
        let idade = parseInt(prompt("Digite sua idade"));

        anoNascimento = 2026 - idade;

        alert(nome + " nasceu em " + anoNascimento);

        indice = indice + 1;
    }
}

function contagemRegressiva(){
    let indice = 10;

    while(indice >= 0){
        alert(indice);
        indice = indice - 1;
    }
}

function calcularPrecoDosJogos(){
    let indice = 0;

    let total = 0;

    while(indice <= 2){
        let nome = prompt("Digite o nome do jogo");
        let preco = parseInt(prompt("Digite o valor do jogo"));

        total = total + preco;
        indice =  indice + 1;
    }
    alert("Total: " + total);
}

function descobrirQuantidade(){
    let indice = 0;

    let quantidadeMenoresIdade = 0;

    while(indice < 3){

        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if(idade <= 17){
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }
        

        indice = indice + 1;
    }
    alert("Quantidade de pessoas com menos de 18 anos: " + quantidadeMenoresIdade);
}

function descobrirMaiorAltura(){
    let indice = 0;

    let maiorAltura = 0;

    while(indice < 4){
        let altura = parseFloat(prompt("Digite a altura: "))

        if(altura > maiorAltura){
            maiorAltura = altura;
        }

        indice = indice + 1;
    }
    alert("Maior altura: " + maiorAltura.toFixed(2));
}

function descobrirMenorVitorias(){
    let indice = 0;

    let menorQuantidadeDeVitorias = 9999999;

    while(indice < 5){
        let personagem = prompt("Digite a quantidade de vitorias: ")
        let vitorias = parseFloat(prompt("Digite a quantidade de vitorias: "))

        if(vitorias < menorQuantidadeDeVitorias){
            menorQuantidadeDeVitorias = vitorias;
        }

        indice = indice + 1;
    }
    alert("Menor quantidade de vitorias: " + menorQuantidadeDeVitorias);
}

function descobrirColaboradorComMaiorBonificacaoSalario(){
    let index = 0;

    let maiorBonificacao = 0;

    let nomeMaiorBonificacao = "";

    while(indice < 3){
        let nome = prompt("Digite seu nome");
        let bonificacao = parseFloat(prompt("Digite o vzlor da bonificação: "))

        if(bonificacao > maiorBonificacao){
            maiorBonificacao = bonificacao;
            nomeMaiorBonificacao = nome;
        }

        indice = indice + 1;
    }
    alert(nome + " tem a amior bonificação: " + maiorBonificacao);
}