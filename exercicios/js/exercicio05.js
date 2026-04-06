function exercicio05(){
    let nomeCidade = "Santa Catarina";
    let populacao = 8187029;
    let areaCidade = 95736;
    let densidade = populacao / areaCidade;

    alert("Nome da cidade: " + nomeCidade + "\n" +
        "População: " + populacao + "\n" + 
        "Area da cidade: " + areaCidade + "Km²" + "\n" + 
        "Densidade demografica: " + densidade.toFixed(2)
    )
}