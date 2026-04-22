function exercicio01MostrarNumeros(){
    for(let index = 1; index <= 5; index = index + 1){
        console.log(index);
    }
}

function exercicio02MostrarNomeVariasVezes(){
    let nome = prompt("Digite seu nome");

    for(let indice = 0; indice < 3; indice = indice + 1){
        console.log(nome);
    }
}

function exercicio03ContarAteDez(){
    for(let index = 1; index < 11; index = index + 1){
        console.log(index);
    }
}

function exercicio04ContarRegressivo(){
    for(let index = 5; index > 0; index = index - 1){
        console.log(index);
    }
}

function exercicio05SomarNumeros(){
    let soma = 0;
    for(let index = 1; index < 6; index = index + 1){
        soma = soma + index;
    }
    alert(soma);
}

function exercicio06MostrarNumerosPares(){
    for(let index = 0; index <= 10; index = index + 1){
        if(index % 2 === 0){
            console.log(index);
        }
    }
}

function exercicio07MostrarNumerosImpares(){
    for(let index = 1; index <= 9; index = index + 1){
        if(index % 2 !== 0){
            console.log(index);
        }
    }
}

function exercicio08SolicitarTresNomes(){
    for(let index = 0; index <= 2; index = index + 1){
        let nome = prompt("Digite o seu nome");
        console.log(nome);
    }
}

function exercicio09SomarTresIdades(){
    let somaIdades = 0;
    for(let index = 0; index <= 2; index = index + 1){
        let idade = parseInt(prompt("Digite a sua idade"));
        somaIdades = somaIdades + idade;
    }
    alert(somaIdades);
}

function exercicio10CalcularMediaSimples(){
    let somaNotas = 0;
    for(let index = 0; index < 4; index = index + 1){
        let nota = parseInt(prompt("Digite a sua nota"));
        somaNotas = somaNotas + nota;
    }
    let media = somaNotas / 4;
    alert(media );
}

function exercicio11ContarMaioresDeIdade(){

    let pessoasMaiorDe18 = 0;

    for(let index = 0; index < 5; index = index + 1){
        let idade = parseInt(prompt("Digite a sua idade"));

        if(idade >= 18){
            pessoasMaiorDe18 = pessoasMaiorDe18 + 1;
        }
    }
    alert(pessoasMaiorDe18);
}

function exercicio12MostrarTabuada(){
    let numero = parseInt(prompt("Digite o numero"));

    for(let index = 1; index < 11; index = index + 1){
        alert((numero * index));
    }
}

function exercicio13ContarLetrasNomes(){

    for(let index = 0; index < 4; index = index + 1){
        let nome = prompt("Digite o nome");
        alert("Quantidade de letras" + nome.trim().length);
    }
}

function exercicio14MaiorNumero(){
    let maiorNumero = -Infinity;
    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero > maiorNumero){
            maiorNumero = numero;
        }
    }
    alert(maiorNumero);
}

function exercicio15MenorNumero(){
    let menorNumero = 999999999999;
    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero < menorNumero){
            menorNumero = numero;
        }
    }
    alert(menorNumero);
}

function exercicio16ContarPositivos(){
    let numerosPositivos = 0;

    for(let indice = 0; indice < 6; indice = indice + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero > 0){
            numerosPositivos = numerosPositivos + 1;
        }
    }
    alert(numerosPositivos);
}

function exercicio17SomarPares(){
    let somaPares = 0;

    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero % 2 === 0){
            somaPares = somaPares + numero;
        }
    }
    alert("Soma pares: " + somaPares);
}

function exercicio18MostrarMultiplosDeTres(){

    for(let indice = 1; indice <= 30; indice = indice + 1){
        if(indice % 3 === 0){
            console.log(indice);
        }
    }
}

function exercicio19CadastrarProdutos(){
    for(let indice = 0; indice < 3; indice = indice + 1){
        let nomeProduto = prompt("Digite o nome do produto");
    }
    alert("Produtos cadastrados com sucesso");
}

function exercicio20RelatorioSimples(){
    let somaIdades = 0;
    let contador = 0;
    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a sua idade"));

        somaIdades = somaIdades + idade;
        contador = contador + 1;
    }
    let mediaIdades = somaIdades / contador;

    alert("Quantidade de pessoas cadastradas: " + contador + "\n" +
        "Soma das idades: " + somaIdades + "\n" +
        "Media idades: " + mediaIdades
    );
}

function exercicio21MostrarNumerosParesIntervalo(){
    let inicio = parseInt(prompt("Digite o inicio"));
    let fim = parseInt(prompt("Digite o fim"));

    for(let indice = inicio; indice <= fim; indice = indice + 1){
        if(indice % 2 === 0){
            console.log(indice);
        }
    }
}

function exercicio22SomarNumerosIntervalo(){
    let inicio = parseInt(prompt("Digite o inicio"));
    let fim = parseInt(prompt("Digite o fim"));
    let somaIntervalo = 0;

    for(let indice = inicio; indice <= fim; indice = indice + 1){
        somaIntervalo = somaIntervalo + indice;
    }
    alert(somaIntervalo);
}

function exercicio23ContarNumerosNegativos(){
    let contadorNegativos = 0;
    for(let index = 0; index < 6; index = index + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero < 0){
            contadorNegativos = contadorNegativos + 1;
        }
    }
    alert(contadorNegativos);
}

function exercicio24CalcularMediaAlturas(){
    let somaAlturas = 0;
    let index = 0;

    for(index; index < 5; index = index + 1){
        let altura = parseFloat(prompt("Digite a altura"));

        somaAlturas = somaAlturas + altura;
        
    }
    let mediaAlturas = somaAlturas / index

    alert(mediaAlturas);
}

function exercicio25ContarNotasAcimaSete(){
    let contadorNotas = 0;
    for(let index = 0; index < 8; index = index + 1){
        let nota = parseFloat(prompt("Digite a nota"));

        if(nota >= 7){
            contadorNotas = contadorNotas + 1;
        }
    }
    alert(contadorNotas);
}

function exercicio26MaiorEMenorNumero(){
    let maiorNumero = -Infinity;
    let menorNumero = +Infinity;

    for(let index = 0; index < 7; index = index + 1){
        let numero = parseFloat(prompt("Digite o numero"));

        if(numero > maiorNumero){
            maiorNumero = numero;
        }
        if(numero < menorNumero){
            menorNumero = numero;
        }
    }
    alert(maiorNumero);
    alert(menorNumero);
}

function exercicio27SomarIdadesMaioresDeIdade(){
    let somaIdades = 0;
    for(let indice = 0; indice < 5; indice = indice + 1){
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a sua idade"));

        if(idade >= 18){
            somaIdades = somaIdades + idade;
        }
    }
    alert(somaIdades);
}

function exercicio28ContarHomensEMulheres(){
    let contagemM = 0;
    let contagemF = 0;
    for(let indice = 0; indice < 6; indice = indice + 1){
        let nome = prompt("Digite o nome");
        let sexo = prompt("Digite o sexo");

        if(sexo === "M"){
            contagemM = contagemM + 1;
        }
        else if(sexo === "F"){
            contagemF =  contagemF + 1;
        }
    }
    alert("Homens" + contagemM + "\n" + "Mulheres" + contagemF);
}

function exercicio29ValidarNota(){
    let somaNotas = 0;
    let index = 0;

    for(index; index < 5; index = index + 1){

        let nota = parseFloat(prompt("Digite a nota"));

        while(nota > 10 || nota < 0){
            nota = parseFloat(prompt("Nota invalida, digite a nota novamente"));
        }
        somaNotas = somaNotas + nota;
    }
    let mediaNotas = somaNotas / index;

    alert(mediaNotas);
}

function exercicio30TabuadasCompletas(){
 for(let index = 1; index <= 5; index = index + 1){
    for(let index2 = 1; index2 <= 10; index2 = index2 + 1){
        console.log(index + " " + index2 + " = " + index * index2);
    }
 }
}

function exercicio31ContarAprovadosReprovados(){
    let contaPassados = 0;
    let contaReprovados = 0;

    for(let index = 0; index < 6; index = index + 1){
        let nota = parseInt(prompt("Digite a nota"));

        if(nota >= 7){
            contaPassados = contaPassados + 1;
        }
        else if(nota < 7){
            contaReprovados = contaReprovados + 1;
        }
    }
    console.log("Passados " + contaPassados + "Reprovados " + contaReprovados);
}

function exercicio32SomarValoresPositivos(){
    let contagem = 0;
    for(let index = 0; index < 8; index = index + 1){
        let numero = parseInt(prompt("Digite o numero"));

        if(numero > 0){
            contagem = contagem + numero;
        }
       
    }
    console.log(contagem);
}

function exercicio33EncontrarNomeMaisLongo(){
    let nomeMaisLongo = "";
    for(let index = 0; index < 5; index = index + 1){
        let nome = prompt("Digite o numero");

        if(nome.length > nomeMaisLongo.length){
            nomeMaisLongo = nome;
        }
    }
    console.log(nomeMaisLongo);
}

function exercicio34CalcularFatorial(){
    let numero = parseInt(prompt("Digite o numero"));
    let resultado = 1;

    for(let index = 1; index <= numero; index = index + 1){
        resultado = resultado * index
    }
    console.log(resultado);
}

function exercicio35ContagemRegressivaPersonalizada(){
    let numero = parseInt(prompt("Digite o numero"));

    for(let index = numero; index >= 0; index = index - 1){
        console.log(index);
    }
    console.log("Fim da contagem");
}