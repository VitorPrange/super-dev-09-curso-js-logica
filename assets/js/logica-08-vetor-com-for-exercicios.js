function exercicio01(){
    let nomes = [];

    for(let i = 0; i < 3; i += 1){
        nomes.push(prompt("Digite o seu nome"));
    }
    
    let texto = "Nomes:\n";

    for(let i = 0; i < nomes.length; i += 1){
        texto = texto + nomes[i] + "\n";
    }
    alert(texto);
}

function exercicio02(){
    let idades = [];

    for(let i = 0; i < 4; i += 1){
        idades.push(parseInt(prompt("Digite sua idade")));
    }

    let texto = "Idades:\n";

    for(let i = 0; i < idades.length; i += 1){
        texto = texto + idades[i] + "\n";
    }
    alert(texto);
}

function exercicio03(){
    let cidades = [];

    for(let i = 0; i < 5; i += 1){
        cidades.push(prompt("Digite uma cidade"));
    }

    let texto = "Cidades:\n";

    for(let i = 0; i < cidades.length; i += 1){
        texto = texto + cidades[i] + "\n";
    }
    alert(texto);

    alert("Foram cadastradas " + cidades.length + " cidades")
}

function exercicio04(){
    let numeros = [];

    for(let i = 0; i < 5; i += 1){
        numeros.push(parseInt(prompt("Digite o numero")));
    }

    let soma = 0;

    for(let i = 0; i < numeros.length; i += 1){
        soma = soma + numeros[i]
    }

    alert("Soma dos numeros: " + soma);
}

function exercicio05(){
    let notas = [];

    for(let i = 0; i < 4; i += 1){
        notas.push(parseFloat(prompt("Digite a nota")));
    }

    let somaNotas = 0;

    for(let i = 0; i < notas.length; i += 1){
        somaNotas = somaNotas + notas[i];
    }

    let media = somaNotas / notas.length;

    alert("Media: " + media);
}

function exercicio06(){
    let produtos = [];

    for(let i = 0; i < 4; i += 1){
        produtos.push(prompt("Digite o nome do produto"));
    }

    for(let i = 0; i < produtos.length; i += 1){
        alert(produtos[i]);
    }

    produtos[2] = prompt("Digite um novo nome pro produto 3");

    for(let i = 0; i < produtos.length; i += 1){
        alert(produtos[i]);
    }
}

function exercicio07(){
    let temperaturas = [];

    for(let i = 0; i < 5; i += 1){
        temperaturas.push(parseInt(prompt("Digite a temperatura")));
    }

    let maiorTemperatura = 0;

    for(let i = 0; i < temperaturas.length; i += 1){
        if(temperaturas[i] > maiorTemperatura){
            maiorTemperatura = temperaturas[i];
        }
    }
    alert("Maior temperatura: " + maiorTemperatura);
}

function exercicio08(){
    let precos = [];

    for(let i = 0; i < 4; i += 1){
        precos.push(parseFloat(prompt("Digite o preço")));
    }

    let menorPreco = 99999999999999;

    for(let i = 0; i < precos.length; i += 1){
        if(precos[i] < menorPreco){
            menorPreco = precos[i];
        }
    }
    alert("Menor preço: " + menorPreco);
}

function exercicio09(){
    let numeros = [];

    for(let i = 0; i < 6; i += 1){
        numeros.push(parseInt(prompt("Digite o numero")));
    }

    let contadorPares = 0;

    for(let i = 0; i < numeros.length; i += 1){
        if(numeros[i] % 2 === 0){
            contadorPares += 1;
        }
    }
    alert("Quantidade de numeros pares: " + contadorPares);
}

function exercicio10(){
    let alunos = [];

    for(let i = 0; i < 5; i += 1){
        alunos.push(prompt("Digite o nome do aluno"));
    }

    let pesquisa = prompt("Digite um nome para pesquisa");
    let encontrado = false;

    for(let i = 0; i < alunos.length; i += 1){
        if(alunos[i] === pesquisa){
            encontrado = true;
        }
    }

    if(encontrado === true){
        alert("Aluno encontrado");
    }else{
        alert("Aluno não encontrado");
    }
}