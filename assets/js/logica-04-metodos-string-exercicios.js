function contarLetrasNome() {
    let nome = prompt("Digite o seu nome");

    alert("O nome tem " + nome.length + " caracteres");
}

function converterParaMaiusculas(){
    let frase = prompt("Digite a frase");

    alert("A frase: " + frase.toUpperCase());
}

function converterParaMinusculas(){
    let frase = prompt("Digite a frase");

    alert("A frase: " + frase.toLowerCase());
}

function mostrarPrimeiraLetra(){
    let palavra = prompt("Digite a palavra");

    alert("A primeira letra: " + palavra[0]);
}

function mostrarUltimaLetra(){
    let palavra = prompt("Digite a palavra");

    alert("A ultima letra: " + palavra[palavra.length - 1]);
}

function verificarPalavraNaFrase(){
    let frase = prompt("Digite a frase");
    let palavra = prompt("Digite a palavra");

    if(frase.includes(palavra) === true){
        alert("A palavra " + palavra + " aparece na frase: " + frase);
    }else{
        alert("A palavra " + palavra + " não aparece na frase: " + frase);
    }
}

function substituirCorNaFrase(){
    let frase = prompt("Digite a frase");

    frase = frase.toLowerCase().replace("azul", "vermelho");

    alert(frase);
}

function trocarEstacao(){
    let frase = "Eu gosto de verão"

    frase = frase.toLowerCase().replace("verão", "inverno");

    alert(frase);
}

function mostrarQuatroPrimeirosCaracteres(){
    let palavra = prompt("Digite a palavra");

    let quatroletras = palavra.slice(0, 4);

    alert(quatroletras);
}

function separarNomeCompleto(){
    let nomeCompleto = prompt("Digite o nome completo");

    let separados = nomeCompleto.split(" ");

    alert(separados.join(" "));
}

function removerEspacosExtras(){
    let frase = prompt("Digite a frase");

    alert(frase.trim());
}


function repetirPalavraTresVezes(){
    let palavra = prompt("Digite a palavra");

    alert(palavra.repeat(3));

}


function encontrarPosicaoPalavra(){
    let frase = "Eu estudo JavaScript todos os dias";

    let posicao = frase.indexOf("JavaScript");

    alert("Posição: " + posicao);
}

function verificarInicioEFim(){
    let palavra = prompt("Digite a palavra");

    if((palavra.startsWith("a") === true) && (palavra.endsWith("o") === false)){
        alert("Começa com a letra 'a' ");
    }
    else if((palavra.startsWith("a") === false) && (palavra.endsWith("o") === true)){
        alert("Termina com a letra 'o'");
    }
    else if((palavra.startsWith("a") === true) && (palavra.endsWith("o") === true)){
        alert("Começa com 'a' e termina com 'o'");
    }
    else{
        alert("não começa com 'a' nem termina com 'o'");
    }
    
}

function trocarDominioEmail(){
    let email = prompt("Digite o Email");

    email = email.replace("@gmail.com", "@hotmail.com");

    alert(email);
}