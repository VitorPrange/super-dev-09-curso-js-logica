function exercicio01(){
    let nomePersonagem = "Ciel";
    let anoNascimento = 2011;
    let idade = 2026 - anoNascimento;
    let altura = 1.20;
    let peso = 20;
    let IMC = peso / (altura * altura);
    let categoria = "Manas"
    let jobs = 9;
    let valorPorJob = 100;
    let salario = jobs * valorPorJob;

    alert("Nome do personagem: " + nomePersonagem + "\n" +
        "Ano de nascimento: " + anoNascimento + "\n" +
        "Idade: " + idade + "\n" +
        "Altura: " + altura + "m" + "\n" +
        "Peso: " + peso + " Kg" + "\n" +
        "IMC: " + IMC + "\n" + 
        "Categoria: " + categoria + "\n" + 
        "Jobs: " + jobs + "\n" + 
        "Valor por job: " + valorPorJob + "\n" + 
        "Salario: " + salario + "\n"

    )
}