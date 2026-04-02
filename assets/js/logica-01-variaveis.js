function exemploMensagem(){
    alert("Hello world minha primeira mensagem Vitor")
}

function exemploString(){

    let nome = "elias";
    let sobrenome = "Otto com dois T";

    sobrenome = "Otto";

    alert(nome);
    alert(sobrenome);
}

function exemploStringConcatenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    // Concatenação: juntar um string(texto) com alguma coutra coisa
    // "Sabão em pó" + " " => "Sabão em pó "
    // "Sabão em pó " + "Omo" => "Sabão em pó Omo"

    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro(){
    let produto = "PC Gamer Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;

    //"\n" serve para quebrar a linha

    alert("Produto: " + produto + "\nQuantidade de pcs: " + quantidadePcs + "\nMemória RAM por PC: " + quantidadeMemoriaPorPc + "GB" + "\nTotal de GB dos PCs: " + totalGb + "GB");
}

function exemploFloat(){
    let endereco = "Rua XV de Novembro"; //string
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("M² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
    // Qaundo entra na empresa
    let tenhoFeriasVencidas = false;

    //completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias vencidas? " + tenhoFeriasVencidas)
}