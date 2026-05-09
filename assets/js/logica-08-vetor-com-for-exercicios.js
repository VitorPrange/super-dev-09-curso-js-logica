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

function exercicio11(){
    let numeros = [];
    let numerosMaioresQue10 = [];

    for(let i = 0; i < 6; i += 1){
        numeros.push(parseInt(prompt("Digite o numero")));

        if(numeros[i] > 10){
            numerosMaioresQue10.push(numeros[i]);
        }
    }

    for(let i = 0; i < numeros.length; i += 1){
        alert(numeros[i]);
    }

    for(let i = 0; i < numerosMaioresQue10.length; i += 1){
        alert(numerosMaioresQue10[i]);
    }
}

function exercicio12(){
    let nomes = [];
    let contador5Letras = 0;

    for(let i = 0; i < 5; i += 1){
        nomes.push(prompt("Digite o seu nome"));
    }

    for(let i = 0; i < nomes.length; i += 1){
        if(nomes[i].length > 5){
            contador5Letras = contador5Letras + 1;
        }
    }

    alert("Numero de nomes com mais de 5 letras: " + contador5Letras);
}

function exercicio13(){
    let idades = [];
    let contadorMenor18 = 0;
    let contadorIgualMaior18 = 0;

    for(let i = 0; i < 7; i += 1){
        idades.push(parseInt(prompt("Digite a idade")));
    }

    for(let i = 0; i < idades.length; i += 1){

        if(idades[i] >= 18){
            contadorIgualMaior18 = contadorIgualMaior18 + 1;
        }else if(idades[i] < 18){
            contadorMenor18 = contadorMenor18 + 1;
        }
    }

    alert("Numero de idades maiores ou iguais a 18 anos: " + contadorIgualMaior18 + 
        "Numero de idades menores de 18: " + contadorMenor18
    );
}

function exercicio14(){
    let notas = [];

    for(let i = 0; i < 6; i += 1){
        notas.push(parseInt(prompt("Digite a nota")));
    }

    for(let i = 0; i < 6; i += 1){
        alert(notas[i]);
    }

    for(let i = 0; i < 6; i += 1){
        if(notas[i] > 7){

        }
    }
}

function exercicio41(){
    let nomes = [];
    let salarioMensal = [];
    let totalGastosMensais = [];
    let quantidadeDependentes = [];
    let saldoMensal = [];

    for(let i = 0; i < 8; i += 1){
        nomes.push(prompt("Digite seu nome"));
        salarioMensal.push(parseFloat(prompt("Digite o seu salario mensal")));
        totalGastosMensais.push(parseFloat(prompt("Digite total de gastos mensais")));
        quantidadeDependentes.push(parseInt(prompt("Digite a quantidade de dependentes")));
    }

    for(let i = 0; i < nomes.length; i += 1){
        alert(
            "Nome: " + nomes[i] + 
            "\nSalario mensal: " + salarioMensal[i] +
            "\nTotal de gastos mensais: " + totalGastosMensais[i] +
            "\nQuantidade de dependentes: " + quantidadeDependentes[i]
        );

        saldoMensal.push(salarioMensal[i] - totalGastosMensais[i]);
    }

    let nomeMaiorSalario = "";
    let maiorSalario = -999999;

    for(let i = 0; i < salarioMensal.length; i += 1){
        if(salarioMensal[i] > maiorSalario){
            maiorSalario = salarioMensal[i];
            nomeMaiorSalario = nomes[i];
        }
    }

    let nomeMenorSalario = "";
    let menorSalario = 999999;

    for(let i = 0; i < salarioMensal.length; i += 1){
        if(salarioMensal[i] < menorSalario){
            menorSalario = salarioMensal[i];
            nomeMenorSalario = nomes[i];
        }
    }

    let nomeMaiorGasto = "";
    let maiorGasto = -999999;

    for(let i = 0; i < totalGastosMensais.length; i += 1){
        if(totalGastosMensais[i] > maiorGasto){
            maiorGasto = totalGastosMensais[i];
            nomeMaiorGasto = nomes[i];
        }
    }

    let nomeMenorGasto = "";
    let menorGasto = 999999;

    for(let i = 0; i < totalGastosMensais.length; i += 1){
        if(totalGastosMensais[i] < menorGasto){
            menorGasto = totalGastosMensais[i];
            nomeMenorGasto = nomes[i];
        }
    }

    let maiorSaldo = -999999;

    for(let i = 0; i < saldoMensal.length; i += 1){
        if(saldoMensal[i] > maiorSaldo){
            maiorSaldo = saldoMensal[i];
        }
    }

    let menorSaldo = 999999;

    for(let i = 0; i < saldoMensal.length; i += 1){
        if(saldoMensal[i] < menorSaldo){
            menorSaldo = saldoMensal[i];
        }
    }

    let somaSalario = 0;
    let mediaSalarial = 0;

    for(let i = 0; i < salarioMensal.length; i += 1){
        somaSalario = somaSalario + salarioMensal[i];
    }

    mediaSalarial = somaSalario / salarioMensal.length;

    let somaGastos = 0;
    let mediaGastos = 0;

    for(let i = 0; i < totalGastosMensais.length; i += 1){
        somaGastos = somaGastos + totalGastosMensais[i];
    }

    mediaGastos = somaGastos / totalGastosMensais.length;

    let somaSaldos = 0;
    let mediaSaldos = 0;

    for(let i = 0; i < saldoMensal.length; i += 1){
        somaSaldos = somaSaldos + saldoMensal[i];
    }

    mediaSaldos = somaSaldos / saldoMensal.length;


}