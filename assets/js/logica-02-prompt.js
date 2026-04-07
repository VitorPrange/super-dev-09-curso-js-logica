function exemplo01(){
    let nome = prompt("Digite o seu nome: ");
    let sobrenome = prompt("Digite o seu sobrenome: ");
    let nomeCompleto = nome + " " + sobrenome;



    alert("Nome completo: " + nomeCompleto);
}

function convercaoStringParaInt(){
    let numero1 = parseInt("8");
    let numero2 = parseInt("12");
    let soma = numero1 + numero2;

    alert("Soma: " + soma);
}

function convercaoStringParaIntAlternativo(){
    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numero"));
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function convercaoStringParaFloat(){
    let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas trabalhadas"))
    let valorHoras = parseFloat(prompt("Digite o valor da hora"))

    let salarioBruto = quantidadeHoras * valorHoras;

    alert(
        "Quantidade de horas: " + quantidadeHoras + "\n" +
        "Valor da hora: " + valorHoras + "\n" + 
        "Salário bruto: " + salarioBruto
    );
}

function exemplo02(){
    let nome = prompt("Digite o nome do atleta");
    let altura = parseFloat(prompt("Digite a altura do atleta"));
    let peso = parseFloat(prompt("Digite o peso do atleta"));
    let IMC = peso / (altura * altura);
    alert(
        "Atleta: " + nome +" tem IMC: " + IMC
    );
}

function exemplo03(){
    let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento"));
    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - anoNascimento;

    alert("A Idade é: " + idade);
}

function exemplo04(){
    let nomeCarro = prompt("Digite o nome do carro")
    let anoCarro = parseInt(prompt("Digite o ano do carro"))
    let veloMaxima = parseInt(prompt("Digite a velocidade maxima"))
    let tempoViagem = parseInt(prompt("Digite o tempo de viagem"))

    let distancia = veloMaxima * tempoViagem;

    alert("Nome do carro: " + nomeCarro + "\n" + 
        "Ano do carro: " + anoCarro + "\n" + 
        "Distancia: " + distancia + " Quilometros"
    );
}