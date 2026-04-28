function exercicio01(){
    let perfumes = [];

    perfumes.push("Perfume1");
    perfumes.push("Perfume2");
    perfumes.push("Perfume3");
    perfumes.push("Perfume4");

    alert(perfumes);

    perfumes[1] = "OutroPerfume";

    perfumes.push("MaisUmPerfume");

    perfumes.splice(0, 1);

    alert(perfumes);

}

function exercicio02(){
    let materias = [];
    let cargaHoraria = [];
    let valoresHora = [];

    materias.push("Matematica");
    cargaHoraria.push(89663896346689);
    valoresHora.push(99999.99);

    materias.push("Geografia");
    cargaHoraria.push(11);
    valoresHora.push(90.9);

    materias.push("Portugues");
    cargaHoraria.push(1);
    valoresHora.push(1.1);

    alert("Materia 1: " + materias[0] + 
        "\nCarga horaria: " + cargaHoraria[0] +
        "\nValor Hora: " + valoresHora[0] +

        "\n\nMateria 2: " + materias[1] + 
        "\nCarga horaria: " + cargaHoraria[1] +
        "\nValor Hora: " + valoresHora[1] +

        "\n\nMateria 3: " + materias[2] + 
        "\nCarga horaria: " + cargaHoraria[2] +
        "\nValor Hora: " + valoresHora[2] 
    );
    

    materias[1] = "Biologia";
    cargaHoraria[0] = 999999999999999;

    alert("\n\nMateria 1: " + materias[0] + 
        "\nCarga horaria: " + cargaHoraria[0] +
        "\nValor Hora: " + valoresHora[0] +

        "\n\nMateria 2: " + materias[1] + 
        "\nCarga horaria: " + cargaHoraria[1] +
        "\nValor Hora: " + valoresHora[1] +

        "\n\nMateria 3: " + materias[2] + 
        "\nCarga horaria: " + cargaHoraria[2] +
        "\nValor Hora: " + valoresHora[2] 
    );
}

function exercicio03(){
    let destinosTuristicos = [];

    destinosTuristicos.push(prompt("Digite o destino turistico"));
    destinosTuristicos.push(prompt("Digite o destino turistico"));
    destinosTuristicos.push(prompt("Digite o destino turistico"));
    destinosTuristicos.push(prompt("Digite o destino turistico"));

    alert(destinosTuristicos);

    destinosTuristicos[1] = prompt("Digite um novo destino turistico");
    destinosTuristicos.push(prompt("Digite o destino turistico"));

    destinosTuristicos.splice(0, 1);

    alert(destinosTuristicos);
}

function exercicio04(){
    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];

    restaurantes.push(prompt("Digite o nome do restaurante"));
    cidades.push(prompt("Digite a cidade onde ele esta localizado"));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio gasto por pessoa")));

    restaurantes.push(prompt("Digite o nome do restaurante"));
    cidades.push(prompt("Digite a cidade onde ele esta localizado"));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio gasto por pessoa")));

    restaurantes.push(prompt("Digite o nome do restaurante"));
    cidades.push(prompt("Digite a cidade onde ele esta localizado"));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio gasto por pessoa")));

    alert(
        "\n\nNome do restaurante 1: " + restaurantes[0] + 
        "\nCidade onde ele esta localizado: " + cidades[0] +
        "\nValor medio gasto por pessoa: " + valoresMedios[0] +

        "\n\nNome do restaurante 2: " + restaurantes[1] + 
        "\nCidade onde ele esta localizado: " + cidades[1] +
        "\nValor medio gasto por pessoa: " + valoresMedios[1] +

        "\n\nNome do restaurante 3: " + restaurantes[2] + 
        "\nCidade onde ele esta localizado: " + cidades[2] +
        "\nValor medio gasto por pessoa: " + valoresMedios[2]
    )

    restaurantes[0] = prompt("Digite um novo nome pro restaurante 1");

    valoresMedios[2] = parseFloat(prompt("Digite um novo valor medio pro terceiro restaurante"));

    alert(
        "\n\nNome do restaurante 1: " + restaurantes[0] + 
        "\nCidade onde ele esta localizado: " + cidades[0] +
        "\nValor medio gasto por pessoa: " + valoresMedios[0] +

        "\n\nNome do restaurante 2: " + restaurantes[1] + 
        "\nCidade onde ele esta localizado: " + cidades[1] +
        "\nValor medio gasto por pessoa: " + valoresMedios[1] +

        "\n\nNome do restaurante 3: " + restaurantes[2] + 
        "\nCidade onde ele esta localizado: " + cidades[2] +
        "\nValor medio gasto por pessoa: " + valoresMedios[2]
    )

}

function exercicio05(){
    let filmes = [];
    let generos = [];
    let duracoes = []
    let duracoesHoras = [];

    filmes.push(prompt("Digite o nome de um filme"));
    generos.push(prompt("Digite o genero do filme"));
    duracoes.push(parseInt(prompt("Digite a duração do filme em minutos")));

    duracoesHoras.push(duracoes[0] / 60);

    filmes.push(prompt("Digite o nome de um filme"));
    generos.push(prompt("Digite o genero do filme"));
    duracoes.push(parseInt(prompt("Digite a duração do filme em minutos")));

    duracoesHoras.push(duracoes[1] / 60);

    filmes.push(prompt("Digite o nome de um filme"));
    generos.push(prompt("Digite o genero do filme"));
    duracoes.push(parseInt(prompt("Digite a duração do filme em minutos")));

    duracoesHoras.push(duracoes[2] / 60);

    filmes.push(prompt("Digite o nome de um filme"));
    generos.push(prompt("Digite o genero do filme"));
    duracoes.push(parseInt(prompt("Digite a duração do filme em minutos")));

    duracoesHoras.push(duracoes[3] / 60);

    alert("\nNome do filme: " + filmes[0] + 
        "\nGenero do filme: " + generos[0] +
        "\nDuração do filme em minutos: " + duracoes[0] +
        "\nDuração do filme em horas: " + duracoesHoras[0] +

        "\n\nNome do filme: " + filmes[1] + 
        "\nGenero do filme: " + generos[1] +
        "\nDuração do filme em minutos: " + duracoes[1] +
        "\nDuração do filme em horas: " + duracoesHoras[1] +

        "\n\nNome do filme: " + filmes[2] + 
        "\nGenero do filme: " + generos[2] +
        "\nDuração do filme em minutos: " + duracoes[2] +
        "\nDuração do filme em horas: " + duracoesHoras[2] +

        "\n\nNome do filme: " + filmes[3] + 
        "\nGenero do filme: " + generos[3] +
        "\nDuração do filme em minutos: " + duracoes[3] +
        "\nDuração do filme em horas: " + duracoesHoras[3]
    )

    generos[1] = prompt("Digite um novo genero pro segundo filme");
    duracoes[0] = parseInt(prompt("Digite a duração do filme em minutos"));
    
    duracoesHoras[0] = (duracoes[0] / 60);
    
    filmes.splice(3, 1);
    generos.splice(3, 1);
    duracoes.splice(3, 1);
    duracoesHoras.splice(3, 1);

    alert("\nNome do filme: " + filmes[0] + 
        "\nGenero do filme: " + generos[0] +
        "\nDuração do filme em minutos: " + duracoes[0] +
        "\nDuração do filme em horas: " + duracoesHoras[0] +

        "\n\nNome do filme: " + filmes[1] + 
        "\nGenero do filme: " + generos[1] +
        "\nDuração do filme em minutos: " + duracoes[1] +
        "\nDuração do filme em horas: " + duracoesHoras[1] +

        "\n\nNome do filme: " + filmes[2] + 
        "\nGenero do filme: " + generos[2] +
        "\nDuração do filme em minutos: " + duracoes[2] +
        "\nDuração do filme em horas: " + duracoesHoras[2]
    )
}

function exercicio06(){
    let produtos = [];
    let quantidades = [];
    let precos = [];
    let valoresTotais = [];

    produtos.push(prompt("Digite o nome do produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade a ser comprada")));
    precos.push(parseFloat(prompt("Digite o valor por unidade do produto")));

    valoresTotais.push(precos[0] * quantidades[0]);

    produtos.push(prompt("Digite o nome do produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade a ser comprada")));
    precos.push(parseFloat(prompt("Digite o valor por unidade do produto")));

    valoresTotais.push(precos[1] * quantidades[1]);

    produtos.push(prompt("Digite o nome do produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade a ser comprada")));
    precos.push(parseFloat(prompt("Digite o valor por unidade do produto")));

    valoresTotais.push(precos[2] * quantidades[2]);

    alert(
        "\n\nNome do produto: " + produtos[0] +
        "\nQuantidade comprada: " + quantidades[0] +
        "\nValor unitario: " + precos[0] +
        "\nValor total: " + valoresTotais[0] +

        "\n\nNome do produto: " + produtos[1] +
        "\nQuantidade comprada: " + quantidades[1] +
        "\nValor unitario: " + precos[1] +
        "\nValor total: " + valoresTotais[1] +
        
        "\n\nNome do produto: " + produtos[2] +
        "\nQuantidade comprada: " + quantidades[2] +
        "\nValor unitario: " + precos[2] +
        "\nValor total: " + valoresTotais[2]
    )

    produtos.push(prompt("Digite o nome do produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade a ser comprada")));
    precos.push(parseFloat(prompt("Digite o valor por unidade do produto")));

    valoresTotais.push(precos[3] * quantidades[3]);

    precos[1] = parseFloat(prompt("Digite novamente o preço do produto 2"));

    valoresTotais[1] = (precos[1] * quantidades[1]);


    produtos.splice(0, 1);
    quantidades.splice(0, 1);
    precos.splice(0, 1);
    valoresTotais.splice(0, 1);

    alert(
        "\n\nNome do produto: " + produtos[0] +
        "\nQuantidade comprada: " + quantidades[0] +
        "\nValor unitario: " + precos[0] +
        "\nValor total: " + valoresTotais[0] +

        "\n\nNome do produto: " + produtos[1] +
        "\nQuantidade comprada: " + quantidades[1] +
        "\nValor unitario: " + precos[1] +
        "\nValor total: " + valoresTotais[1] +
        
        "\n\nNome do produto: " + produtos[2] +
        "\nQuantidade comprada: " + quantidades[2] +
        "\nValor unitario: " + precos[2] +
        "\nValor total: " + valoresTotais[2]
    )
    
}