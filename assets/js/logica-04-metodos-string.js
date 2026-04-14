function exemploToLowerCase(){
    let nome = "John Doe"
    let nomeMinusculo = nome.toLowerCase;

    alert("To lowercase: " + nomeMinusculo)
}

function exemploToUpperCase(){
    let nome = "John Doe"
    let nomeMaiusculo = nome.toUpperCase;

    alert("To uppercase: " + nomeMaiusculo)
}

function exemploToUpperCase(){
    let nome = "John Doe"
    let quantidadeCaracteres = nome.length;

    alert("Texto: " + nome + "\n")
    alert("quantidade de caracteres: " + quantidadeCaracteres + "\n")
}

function exemploSubstituicao(){
    let texto = "Abacate, Uva, Maca, Pera";
    let textoCorrigido = texto.replace("Maca", "Maçã");

    alert("Texto: " + texto);
    alert("Texto corrigido: " + textoCorrigido);
}

function exemploSubstituicaoNaPropriaVariavel(){
    let texto = prompt("Digite o preço");

    texto = texto.replace(",", ".");
    texto = texto.replace("R$", "");
    texto = texto.replaceAll(" ", "");

    alert("Texto sanitizado: " + texto);
}

function removerEspacosDoFim(){
    let texto = "     O batman vive a noite, de dia ele morre       ";

    alert("Texto original: " + texto);

    texto = texto.trimEnd();

    alert("Texto sem espaços no fim: " + texto);
}

function removerEspacosDoComeco(){
    let texto = "     O batman vive a noite, de dia ele morre       ";

    alert("Texto original: " + texto);

    texto = texto.trimStart();

    alert("Texto sem espaços no comeco: " + texto);
}

function removerEspacosDoComecoFinal(){
    let texto = "     O batman vive a noite, de dia ele morre       ";

    alert("Texto original: " + texto);

    texto = texto.trim();

    alert("Texto sem espaços no comeco e no final: " + texto);
}

function agregarCaracteresFim(){
    let nome = "Pauco C";

    alert("Nome do cartão: " + nome.padEnd(20, "*"));
}

function agregarCaracteresComeco(){
    let finalartaoCredito = "8462";

    alert("Nome do cartão: " + nome.padStart(12, "*"));
}

function verificarSeComecaCom(){
    let texto = prompt("Digite um nome");

    if(texto.toUpperCase().startsWith("P") === true){
        alert("Começa com a letra P");
    }else{
        alert("Vaza daq seu rato");
    }
}

function verificarSeContem(){
    let nomeEpisodio = prompt("Digite o nome do episodio");

    if(nomeEpisodio.includes("S01") === true){
        alert("Primeira temporada");
    }
    else if(nomeEpisodio.includes("S02") === true){
        alert("Segunda temporada");
    }else{
        "Ao infinito e alem"
    }
}

function verificarSeTerminaCom(){
    let bolo = prompt("Digite o nome do bolo");

    if(bolo.endsWith("chocolate") === true){
        alert("Boa escolha");
    }else{
        alert("não como outro bolo");
    }
}

function pegarPosicao(){
    let fruta =  "Abacate";
    let primeiroCaracter = fruta[0];

    alert("Fruta: " + fruta + "\nPrimeira posição: " + primeiroCaracter);
}

function quebrarString(){
    let horaMinuto = "20:30";

    let partes = horaMinuto.split(":");

    //split => ["20", "30"]

    alert(partes);

    let hora = partes[0];
    let minuto = partes[1];

    alert("Hora: ") + hora;
    alert("Minuto: ") + minuto;
}

function exemploPegarPartesDaString(){
    let nomeCompleto = "Ruan Costa";

    let nome = nomeCompleto.slice(0, 4);
    let sobrenome = nomeCompleto.slice(5,10);
}

function pegarIndiceDoCaracter(){
    let texto = "Abacate Uva Pera";

    let unlitmoIndiceEspaco = texto.lastIndexOf(" ");

    let ultimaPalavra = texto.slice(unlitmoIndiceEspaco + 1, texto.length)

    alert("Texto: " + texto);
    alert("Ultima palavra: " + ultimaPalavra);
}

function descobrirIndiceDoCaracter(){
    let numeroCartao = "3010 2039 2019 2030"

    let indicePrimeiroEspaco = numeroCartao.indexOf(" ");

    let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaco);

    alert("Cartão: " + numeroCartao);
    alert("Primeira parte do cartão: " + primeiraParteCartao);
}