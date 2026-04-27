function exemplo01(){
    let carros = [];

    carros.push("BMW M3");
    carros.push("BYD seal");
    carros.push("Mobi");
    carros.push("Chevet");

    carros[3] = "Chevette"

    carros.splice(2, 1);

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[0] +
        "\nSegundo: " + carros[1] +
        "\nTerceiro: " + carros[2]
    )

}

function exemplo02(){
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(prompt("Digite o percentual de frequencia"));

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(prompt("Digite o percentual de frequencia"));

    if(frequencias[0] >= 70){
        status.push("Aprovado");
    }else {
        status.push("Reprovado");
    }

    if(frequencias[1] >= 70){
        status.push("Aprovado");
    }else{
        status.push("Reprovado");
    }

    alert("Alunos: " + "\n" + 
        "Nome: " + alunos[0] + "\n" +
        "Frequencias: " + frequencias[0] + "\n" +
        "Status: " + status[0] +

        "Nome: " + alunos[1] + "\n" +
        "Frequencias: " + frequencias[1] + "\n" +
        "Status: " + status[1] +
    )

}

