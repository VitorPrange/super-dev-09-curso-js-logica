function exercicio07(){
    let nomeFuncionario = "João";
    let salarioBase = 1900;
    let horaExtra = 20;
    let valorExtra = 100;
    let ValorTotalExtra = horaExtra * valorExtra;
    let salarioFinal = salarioBase + ValorTotalExtra;

    alert("Nome do Funcionario: " + nomeFuncionario + "\n" + 
        "Salario base: R$" + salarioBase + "\n" +
        "Valor de horas extras: R$" + ValorTotalExtra + "\n" +
        "Salario Final: R$" + salarioFinal
    );

}