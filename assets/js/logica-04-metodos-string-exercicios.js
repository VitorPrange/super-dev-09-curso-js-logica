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
    let frase = prompt("Digite a frase");

    alert("A primeira letra: " + frase[0]);
}

function mostrarUltimaLetra(){
    let frase = prompt("Digite a frase");

    alert("A ultima letra: " + frase[frase.length - 1]);
}
