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
    let maiorNumero = 0;
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
    let maiorNumero = 0;
    let menorNumero = 9999999999999;

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
        let nome = prompt("Digite o nome");

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

function exercicio36ContarNotasEmFaixas(){
    let notas04 = 0;
    let notas56 = 0;
    let notas78 = 0;
    let notas910 = 0;

    for(let index = 0; index < 8; index = index + 1){
        let nota = parseInt(prompt("Digite a nota"));

        if(nota >= 0 && nota <= 4){
            notas04 = notas04 + 1;
        }
        else if(nota >= 5 && nota <= 6){
            notas56 = notas56 + 1;
        }
        else if(nota >= 7 && nota <= 8){
            notas78 = notas78 + 1;
        }
        else if(nota >= 9 && nota <= 10){
            notas910 = notas910 + 1;
        }
    }
}

function exercicio37SomarMultiplosDeDoisETres(){
    let numero = parseInt(prompt("Digite o numero"));
    let soma = 0;

    for(let index = 1; index <= numero; index = index + 1){
        if(index % 2 === 0 || index % 3 === 0){
            soma = soma + index;
        }
    }
}

function exercicio38CalcularMediaComValidacao(){


    for(let index = 0; index < 6; index = index + 1){

        let nota = parseInt(prompt("Digite a nota"));

        if(nota < 0 && nota > 10){
            notas04 = notas04 + 1;
        }
        else if(nota >= 5 && nota <= 6){
            notas56 = notas56 + 1;
        }
        else if(nota >= 7 && nota <= 8){
            notas78 = notas78 + 1;
        }
        else if(nota >= 9 && nota <= 10){
            notas910 = notas910 + 1;
        }
    }
}

function exercicio39ContarParesEImparesDigitados(){


    for(let index = 0; index < 10; index = index + 1){
        let contadorPares = 0;
        let contadorImpares = 0;
        let somaTodosNumeros = 0;

        let numero = parseInt(prompt("Digite o numero"));

        if(numero % 2 === 0){
            contadorPares = contadorPares + 1;
        }else{
            contadorImpares = contadorImpares + 1;
        }

        somaTodosNumeros = somaTodosNumeros + numero;
    }
    console.log("Pares: " + contadorPares + "\n" + "Impares: " + contadorImpares + "\n" + "Soma: " + somaTodosNumeros);
}

function exercicio40RelatorioCompletoTurmaSemVetor(){
    let somaAlunosCadastrados = 0;
    let somaAlunosAprovados = 0;
    let somaAlunosReprovados = 0;
    let maiorMediaTurma = 0;
    let menorMediaTurma = 0;
    let nomeAlunoComMaiorMedia = 0;

    for(let index = 0; index < 5; index = index + 1){
        let nome = prompt("Digite o nome");
        let nota1 = parseInt(prompt("Digite a nota"));
        let nota2 = parseInt(prompt("Digite a nota"));

        somaAlunosCadastrados = somaAlunosCadastrados + 1;

        let media = (nota1 + nota2) / 2;

        if(media >= 7){
            somaAlunosAprovados = somaAlunosAprovados + 1;
        }else if(media < 7){
            somaAlunosReprovados = somaAlunosReprovados + 1;
        }

        if(media > maiorMediaTurma){
            maiorMediaTurma = media;
            nomeAlunoComMaiorMedia = nome;
        }

        if(media < menorMediaTurma){
            menorMediaTurma = media;
        }
    }
}

function exercicio41ForTabuadaIntervalo(){
    let inicio = parseInt(prompt("Digite o inicio"));
    let final = parseInt(prompt("Digite o final"));

    for(let indice = inicio; indice < final; indice = indice + 1){
        for(let indice2 = 1; indice2 <= 10; indice2 = index2 + 1){
            console.log(indice * indice2);
        }
    }
}

function exercicio42ForContarDivisores(){
    let numero = parseInt(prompt("Digite o numero"));

    for(let indice = 1; indice <= numero; indice = indice + 1){
        if(numero % indice === 0){
            console.log(indice);
        }
    }
}

function exercicio43ForVerificarPrimo(){
    let numero = parseInt(prompt("Digite o numero"));
    let contadorPrimo = 0;

    for(let indice = 1; indice <= numero; indice = indice + 1){
        if(numero % indice === 0){
            contadorPrimo = contadorPrimo + 1;
        }
    }

    if(contadorPrimo > 2){
        console.log("Número é primo");
    }else{
        console.log("Número não é primo")
    }
}

function exercicio44ForSomarFatoriais(){
    let numero = parseInt(prompt("Digite o numero"));
    let resultado = 1;

    for(let indice = 1; indice <= numero; indice = indice + 1){
        resultado = resultado * indice;
    }
}

function exercicio45ForMediaIdadesComFaixas(){
    let pessoas012 = 0;
    let pessoas1317 = 0;
    let pessoas1859 = 0;
    let pessoas60Mais = 0;
    let somaIdade = 0;

    for(let index = 0; index < 10; index = index + 1){
        let idade = parseInt(prompt("Digite a sua idade"));
        
        somaIdade = somaIdade + idade;


        if(idade > 0 && idade <= 12){  
            pessoas012 = pessoas012 + 1;
        }
        else if(idade > 12 && idade <= 17){
            pessoas1317 = pessoas1317 + 1;
        }
        else if(idade > 17 && idade <= 59){
            pessoas1859 = pessoas1859 + 1;
        }
        else if(idade >= 60){
            pessoas60Mais = pessoas60Mais + 1;
        }
    }
    let mediaIdades = somaIdade / 10;

    console.log(
        "Pessoas entre 0 e 12 anos: " + pessoas012 + "\n" +
        "Pessoas entre 13 e 17 anos: " + pessoas1317 + "\n" +
        "Pessoas entre 18 e 59 anos: " + pessoas1859 + "\n" +
        "Pessoas com mais de 60 anos: " + pessoas60Mais
    );

}

function exercicio46ForMaiorMenorComValidacao(){
    let maiorNumero = 0;
    let menorNumero = 999999999999;
    for(let indice = 0; indice < 8; indice = indice + 1){
        let numero = parseInt(prompt("Digite o numero"));

        while(numero < 0){
            numero = parseInt(prompt("Numero invalido, valor não pode ser negativo, digite o numero novamente"));
        }

        if(numero > maiorNumero){
            maiorNumero = numero
        }
        if(numero < menorNumero){
            menorNumero = numero
        }
    }
    let diferençaMaiorMenor = maiorNumero - menorNumero;
    console.log("Maior numero: " + maiorNumero + "\n" +
        "Menor numero: " + menorNumero + "\n" +
        "Diferença entre o maior e o menor numero: " + diferençaMaiorMenor
    );
}

function exercicio47ForMediaNotasTurmas(){
    let somaA = 0;
    let somaB = 0;
    let maiorMedia = 0;
    let nomeMaiorMedia;
    for(let index = 0; index < 5; index = index + 1){
        let notaAluno = prompt("Digite a nota do aluno")

        somaA = somaA + notaAluno;
    }
    let mediaA = somaA / 5;

    for(let index = 0; index < 5; index = index + 1){
        let notaAluno = prompt("Digite a nota do aluno")

        somaB = somaB + notaAluno;
    }
    let mediaB = somaB / 5;

    if(mediaA > mediaB){
        maiorMedia = mediaA
        nomeMaiorMedia = "Turma A"
    }else if(mediaB > mediaA){
        maiorMedia = mediaB
        nomeMaiorMedia = "Turma B"
    }else if(mediaA === mediaB){
        nomeMaiorMedia = "Empate de medias"
    }

    alert(
        "Media turma A: " + mediaA + "\n" +
        "Media turma B: " + mediaB + "\n" +
        "Turma com maior media: " + nomeMaiorMedia
    )
}

function exercicio48ForRelatorioEleicao(){
    let voto1 = 0;
    let voto2 = 0;
    let voto3 = 0;
    let voto4 = 0;
    for(let index = 0; index < 12; index = index + 1){
        let voto = parseInt(prompt("Vote em uma das opções: " + "\n" +
            "1 - Candidato A" + "\n" + 
            "2 - Candidato B" + "\n" +
            "3 - Branco" + "\n" +
            "4 - Nulo"
        ));

        if(voto !== "1" || voto !== "2" || voto !== "3" || voto !== "4"){
            voto = parseInt(prompt("Opção invalida, vote em uma das opções: " + "\n" +
                "1 - Candidato A" + "\n" + 
                "2 - Candidato B" + "\n" +
                "3 - Branco" + "\n" +
                "4 - Nulo"
            ));
        }

        if(voto === "1"){
            voto1 = voto1 + 1;
        }
        if(voto === "2"){
            voto2 = voto2 + 1;
        }
        if(voto === "3"){
            voto3 = voto3 + 1;
        }
        if(voto === "4"){
            voto4 = voto4 + 1;
        }
    }
    alert(
        "Votos Candidato A: " + voto1 + "\n" +
        "Votos candidato B: " + voto2 + "\n" +
        "Votos Brancos: " + voto3 + "\n" +
        "Votos nulos: " + voto4
    )
}

function exercicio49ForCalcularPotencia(){
    let base = parseInt(prompt("Digite a base"))
    let expoente = parseInt(prompt("Digite o expoente"))
    let resultado = 1;

    for(let index = 0; index < Math.abs(expoente); index = index + 1){
        resultado = resultado * base;
    }

    if(expoente < 0){
        resultado = 1 / resultado;
    }
    console.log(resultado);
}

function exercicio50ForSequenciaCrescenteEDecrescente(){
    let numero = parseInt(prompt("Digite o numero"));

    for(let indice = 1; indice <= numero; indice = indice + 1){
        console.log(indice);
    }

    for(let indice = numero; indice > 1; indice = indice - 1){
        console.log(indice);
    }
    console.log("Sequência finalizada");
}


function exercicio51ForContarMultiplosEmIntervalo(){
    let numeroInicial = parseInt(prompt("Digite o numero inicial"));
    let numeroFinal = parseInt(prompt("Digite o numero final"));
    let numeroDivisor = parseInt(prompt("Digite o numero divisor"));
    let contadorMultiplos = 0;

    for(let index = numeroInicial; index <= numeroFinal; index = index + 1){
        if(numeroDivisor % index === 0){
            contadorMultiplos = contadorMultiplos + 1;
        }
    }
    console.log(contadorMultiplos);
}

function exercicio52ForRelatorioPagamentoFuncionarios(){
    let contadorFuncionarios = 0;
    let somaTotalFolha = 0;
    let maiorSalario = 0;
    let nomeMaiorSalario = 0;

    for(let index = 0; index < 6; index = index + 1){
        let nome = prompt("Digite o seu nome");
        let horasTrabalhadas = parseInt(prompt("Digite as horas trabalhadas"));
        let valorHoras = parseInt(prompt("Digite o valor por hora"));

        contadorFuncionarios = contadorFuncionarios + 1;

        let salario = horasTrabalhadas * valorHoras;

        somaTotalFolha = somaTotalFolha + salario;

        if(salario > maiorSalario){
            maiorSalario = salario;
            nomeMaiorSalario = nome;
        }
    }
    console.log(
        "Quantidade de funcionarios cadastrados: " + contadorFuncionarios + "\n" +
        "Soma total da folha: " + somaTotalFolha + "\n" +
        "Maior salario: " + maiorSalario + "\n" +
        "Nome do funcionario com maior salario: " + nomeMaiorSalario
    );
}

function exercicio53ForValidarSenhaTentativas(){

    for(let index = 0; index < 4; index = index + 1){
        let senha = prompt("Digite a senha");

        if(senha === "0107"){
            alert("Acesso permitido");
            break;
        }
        if(index === 3){
            alert("Acesso bloqueado");
        }
    }
}