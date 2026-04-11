function exercicio01(){
    let nome = prompt("Informe o seu nome");
    let idade = parseInt(prompt("Informe sua idade"));

    if(idade > 18){
        alert(nome + " tem mais de 18 anos");
    }else{
        alert(nome + " tem menos ou tem 18 anos");
    }
}

function exercicio02(){
    let numero = parseInt(prompt("Informe um numero"));

    if(numero > 10){
        alert("Numero é maior que 10");
    }else{
        alert("Numero é menor ou igual a 10");
    }
}

function exercicio03(){
    let numero = parseInt(prompt("Informe um numero"));

    if(numero === 0){
        alert("Numero é 0");
    }else{
        alert("Numero não é 0");
    }
}

function exercicio04(){
    let numero = parseInt(prompt("Informe um numero"));

    if(numero === 8001){
        alert("Numero é 8001");
    }else{
        alert("Numero não é 8001");
    }
}

function exercicio05(){
    let numero1 = parseInt(prompt("Informe um numero"));
    let numero2 = parseInt(prompt("Informe outro numero"));

    let soma = numero1 + numero2;

    if(soma >= 0){
        alert("Resultado é positivo");
    }else{
        alert("Resultado não é positivo");
    }
}

function exercicio06(){
    let valor1 = parseInt(prompt("Informe o primeiro valor"));
    let valor2 = parseInt(prompt("Informe o segundo valor"));
    let valor3 = parseInt(prompt("Informe o terceiro valor"));

    let soma = valor1 + valor2 + valor3;

    if(soma > 100){
        alert("Usuário não pode realizar a compra");
    }else{
        alert("Usuário pode realizar a compra");
    }
}

function exercicio07(){
    let idade = parseInt(prompt("Informe o primeiro valor"));

    if(idade < 16){
        alert("Usuário não pode votar");
    }else if((idade >= 16) && (idade <=17)){
        alert("Usuário pode optar por votar ou não");
    }else if(idade >= 18){
        alert("Usuário é obrigado a votar");
    }
}

function exercicio08(){
    let numero = parseInt(prompt("Informe um numero"));
    
    if(numero > 0){
        alert("O numero é positivo");
    }else if(numero < 0){
        alert("O numero é negativo");
    }else if(numero === 0){
        alert("O numero é 0");
    }
}

function exercicio09(){
    let numero = parseInt(prompt("Informe um numero"));
    let numero2 = parseInt(prompt("Informe o segundo numero"));
    
    if(numero > numero2){
        alert("O numero "+ numero +" é o maior");
    }else if(numero < numero2){
        alert("O numero "+ numero2 +" é o maior");
    }else if(numero === numero2){
        alert("Os numeros são iguais "+ numero + " e " + numero2);
    }
}

function exercicio10(){
    let numero = parseInt(prompt("Informe um numero"));
    
    if((numero >= 10) && (numero <= 20)){
        alert("O numero esta entre 10 e 20");
    }else{
        alert("O numero não esta entre 10 e 20");
    }
}

function exercicio11(){
    let valor1 = parseInt(prompt("Informe o primeiro numero"));
    let valor2 = parseInt(prompt("Informe o segundo numero"));
    let valor3 = parseInt(prompt("Informe o terceiro numero"));

    let soma = valor1 + valor2 + valor3;

    if((valor1 > 0) && (valor2 > 0) && (valor3 > 0)){
        alert("Todos os numeros são positivos");
    }else{
        alert("Algum numero não é positivo");
    }
}

function exercicio12(){
    let usuario = prompt("Informe o nome de usuario")
    let senha = parseInt(prompt("Informe a senha"));
    
    if((usuario === "admin") && (senha === 1234)){
        alert("Login correto");
    }else{
        alert("Login invalido");
    }
}

function exercicio13(){
    let numero = parseInt(prompt("Informe o numero"));

    if(numero % 2 === 0){
        alert("Número é par");
    }else{
        alert("Número é impar");
    }
}

function exercicio14(){
    let valor1 = parseInt(prompt("Informe o primeiro valor"));
    let valor2 = parseInt(prompt("Informe o segundo valor"));
    let valor3 = parseInt(prompt("Informe o terceiro valor"));

    let soma = valor1 + valor2 + valor3;

    if(soma < 2000){
        alert("Baixo");
    }else if((soma >= 2000) && (soma <= 5000)){
        alert("Médio");
    }else if(soma > 5000){
        alert("Alto");
    }
}

function exercicio15(){
    let temp = parseInt(prompt("Informe a temperatura"));

    if(temp < 15){
        alert("Frio");
    }else if((temp >= 15) && (temp <= 25)){
        alert("Agradavel");
    }else if(temp > 25){
        alert("Quente");
    }
}

function exercicio16(){
    let numero1 = parseInt(prompt("Informe o primeiro numero"));
    let numero2 = parseInt(prompt("Informe o segundo numero"));

    if((numero1 % numero2 === 0) || (numero2 % numero1 === 0)){
        alert("Numeros são multiplos");
    }else {
        alert("Numeros não são multiplos");
    }
}

function exercicio17(){
    let nota1 = parseInt(prompt("Informe a primeira nota"));
    let nota2 = parseInt(prompt("Informe a segunda nota"));
    let nota3 = parseInt(prompt("Informe a terceira nota"));

    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        alert("Aprovado");
    }else if((media >= 5) && (media < 7)){
        alert("Recuperação");
    }else if(media < 5){
        alert("Reprovado");
    }
}

function exercicio18(){
    let idade = parseInt(prompt("Informe a idade"));
    let renda = parseInt(prompt("Informe a renda"));

    if((idade >= 18) && (renda >= 2000)){
        alert("Aprovado pra credito");
    }else {
        alert("Não aprovado");
    }
}

function exercicio19(){
    let hora = parseInt(prompt("Informe a hora"));

    if((hora >= 0) && (hora <= 11)){
        alert("Bom dia");
    }else if((hora >= 12) && (hora <= 17)){
        alert("Boa tarde");
    }else if((hora >= 18) && (hora <= 23)){
        alert("Boa noite");
    }else{
        alert("Hora invalida");
    }
}

function exercicio20(){
    let numero1 = parseInt(prompt("Informe o primeiro numero"));
    let numero2 = parseInt(prompt("Informe o segundo numero"));

    let resultado = 0

    let operacao = parseInt(prompt("Escolha a operação e digite o numero: " + "\n" +
    "1 → Soma" + "\n" +
    "2 → Subtração" + "\n" +
    "3 → Multiplicação" + "\n" +
    "4 → Divisão" + "\n"
    ));

    if(operacao === 1){
        resultado = numero1 + numero2;
        alert("Soma: " + resultado);
    }else if(operacao === 2){
        resultado = numero1 - numero2;
        alert("Subtração: " + resultado);
    }else if(operacao === 3){
        resultado = numero1 * numero2;
        alert("Multiplicação: " + resultado);
    }else if((operacao === 4) && (numero2 != 0)){

        resultado = numero1 / numero2;
        alert("Divisão: " + resultado);
    }else{
        alert("Operação selecionada não foi encontrada, operação selecionada: " + operacao);
    }
}

function exercicio21(){
    let x = parseInt(prompt("Informe o primeiro numero"));
    let y = parseInt(prompt("Informe o segundo numero"));
    let z = parseInt(prompt("Informe o terceiro numero"));

    if((x < y) && (y < z)){

        alert(x + " " + y + " " + z);
    }
    else if((x < y) && (y > z) && (x < z)){
        
        alert(x + " " + z + " " + y);
    }
    else if((y < z) && (z < x)){

        alert(y + " " + z + " " + x);
    }
    else if((y < z) && (z > x) && (y < x)){

        alert(y + " " + x + " " + z);
    }
    else if((z < x) && (x < y)){

        alert(z + " " + x + " " + y);
    }
    else if((z < x) && (x > y) && (z < y)){

        alert(z + " " + y + " " + x);
    }
    else if((x === y) && (y === z)){
        alert(x + " " + y + " " + z);
    }
    else if((x === y) && (z > x)){
        alert(x + " " + y + " " + z);
    }
    else if((x === y) && (z < x)){
        alert(z + " " + x + " " + y);
    }
    else if((x === z) && (y < x)){
        alert(y + " " + z + " " + x);
    }
    else if((x === z) && (y > x)){
        alert(x + " " + z + " " + y);
    }
    else if((y === z) && (x < z)){
        alert(x + " " + y + " " + z);
    }
    else if((y === z) && (x > z)){
        alert(z + " " + y + " " + x);
    }
}

function exercicio22(){
    let x = parseInt(prompt("Informe o primeiro numero"));
    let y = parseInt(prompt("Informe o segundo numero"));
    let z = parseInt(prompt("Informe o terceiro numero"));

    if((x > y) && (x > z)){

        alert(x);
    }
    else if((y > x) && (y > z)){
        alert(y);
    }
    else if((z > x) && (z > y)){
        alert(z);
    }
    else if((z === x) && (z === y)){
        alert(z);
    }
    else if((z === x) && (z > y)){
        alert(z);
    }
    else if((z === x) && (z < y)){
        alert(y);
    }
    else if((z === y) && (z < x)){
        alert(x);
    }
    else if((z === y) && (z > x)){
        alert(z);
    }
    else if((x === y) && (x > z)){
        alert(x);
    }
    else if((x === y) && (x < z)){
        alert(z);
    }
    
}

function exercicio23(){
    let x = parseInt(prompt("Informe o primeiro numero"));
    let y = parseInt(prompt("Informe o segundo numero"));
    let z = parseInt(prompt("Informe o terceiro numero"));

    if((x < y) && (x < z)){

        alert(x);
    }
    else if((y < x) && (y < z)){
        alert(y);
    }
    else if((z < x) && (z < y)){
        alert(z);
    }
    else if((z === x) && (z === y)){
        alert(z);
    }
    else if((z === x) && (z > y)){
        alert(y);
    }
    else if((z === x) && (z < y)){
        alert(z);
    }
    else if((z === y) && (z < x)){
        alert(z);
    }
    else if((z === y) && (z > x)){
        alert(x);
    }
    else if((x === y) && (x > z)){
        alert(z);
    }
    
}

function exercicio24(){
    let x = parseInt(prompt("Informe o primeiro numero"));
    let y = parseInt(prompt("Informe o segundo numero"));
    let z = parseInt(prompt("Informe o terceiro numero"));

    if((x < y) && (y < z)){

        alert("Crescente");
    }
    else if((x > y) && (y > z)){
        alert("Decrescente");
    }else{
        alert("Sem ordem definida");
    }
}

function exercicio25(){
    let idade = parseInt(prompt("Informe a sua idade"));

    if(idade <= 10){
        alert("criança");
    }else if((idade > 10) && (idade < 18)){
        alert("Adolescente");
    }else if((idade >= 18) && (idade <= 65)){
        alert("Adulto");
    }else if(idade > 65){
        alert("Idoso");
    }
}

function exercicio26(){
    let valor = parseInt(prompt("Informe o valor da compra"));
    let formaPagamento = parseInt(prompt("Escolha a operação e digite o numero: " + "\n" +
    "1 → Dinheiro" + "\n" +
    "2 → Débito" + "\n" +
    "3 → Credito" + "\n"
    ));

    let resultado = 0;

    if(formaPagamento === 1){
        resultado = valor * 0.70;
        alert(resultado);
    }
    else if(formaPagamento === 2){
        resultado = valor;
        alert(resultado);
    }
    else if(formaPagamento === 3){
        resultado = valor * 1.30;
        alert(resultado);
    }else{
        alert("Fiado so quando pagar a compra");
    }
    
}

function exercicio27(){
    let numero1 = parseInt(prompt("Informe o primeiro numero"));
    let numero2 = parseInt(prompt("Informe o segundo numero"));

    if((numero1 >= 0) && (numero2 >= 0)){

        alert("Ambos positivos");
    }
    else if((numero1 < 0) && (numero2 < 0)){

        alert("Ambos negativos");
    }
    else if((numero1 >= 0) && (numero2 < 0)){

        alert("Um positivo e um negativo");
    }
    else if((numero1 < 0) && (numero2 >= 0)){

        alert("Um positivo e um negativo");
    }
}

function exercicio28(){
    let nota1 = parseInt(prompt("Informe a primaira nota"));
    let nota2 = parseInt(prompt("Informe a segunda nota"));
    let nota3 = parseInt(prompt("Informe a terceira nota"));
    let faltas = parseInt(prompt("Informe o numero de faltas"));

    let media = (nota1 + nota2 + nota3) / 3;

    let limitefaltas = 28

    if((faltas < limitefaltas) && (media >= 7)){

        alert("Aprovado");
    }
    else if((faltas < limitefaltas) && (media < 7)){

        alert("recuperação");
    }
    else if((faltas > limitefaltas) && (media < 7)){

        alert("Reprovado");
    }
    else if((faltas >= limitefaltas) && (media >= 7)){

        alert("Aprovado");
    }
    else if((faltas > limitefaltas) && (media >= 7)){

        alert("Reprovado");
    }
}

function exercicio29(){
    let numero1 = parseInt(prompt("Informe um numero"));

    if((numero1 % 2 === 0) && (numero1 % 3 !== 0)){

        alert("Divisivel apenas por 2");
    }
    else if((numero1 % 3 === 0) && (numero1 % 2 !== 0)){

        alert("Divisivel apenas por 3");
    }
    else if((numero1 % 3 === 0) && (numero1 % 2 === 0)){
        
        alert("Divisivel por ambos");
    }
    else if((numero1 % 3 !== 0) && (numero1 % 2 !== 0)){
        
        alert("Não e divisivel por nenhum");
    }
}

function exercicio30(){
    let numero1 = parseInt(prompt("Informe o ano"));

    if((numero1 % 4 === 0 && numero1 % 100 !== 0) || (numero1 % 400 === 0)){

        alert("Bissexto2");
    }
    else {

        alert("Não bissexto");
    }
}

function exercicio31(){
    let numero1 = parseInt(prompt("Informe o primeiro numero"));
    let numero2 = parseInt(prompt("Informe o segundo numero"));
    let numero3 = parseInt(prompt("Informe o segundo numero"));

    if((numero1 + numero2 > numero3) && (numero1 + numero3 > numero2) && (numero3 + numero2 > numero1)){
        if((numero1 === numero2) && (numero2 === numero3)){
            alert("Equilatero");
        }
        else if((numero1 === numero2) && (numero2 !== numero3)){
            alert("Isóceles");
        }
        else if((numero1 === numero3) && (numero3 !== numero2)){
            alert("Isóceles");
        }
        else if((numero2 === numero3) && (numero3 !== numero1)){
            alert("Isóceles");
        }
        else{
            alert("Escaleno");
        }
    }
}