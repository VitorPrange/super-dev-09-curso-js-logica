function exemplo01(){
    // mostrar uma mensagem 4 vezes
    debugger

    let indice = 0;

    while(indice < 4){
        console.log("Oie");
        indice = indice + 1;
    }
}

function exemploSolicitarNumeros(){
    debugger
    
    let indice = 0;

    while(indice <= 2){
        let numero = parseInt(prompt("Digite o numero"));
        indice = indice + 1;
    }

    alert("Muito obrigado");
}

function solicitarDadosPaciente(){
    let indice = 0;

    while(indice <= 2){
        let nome = prompt("Digite seu nome").trim();
        let idade = parseInt(prompt("Digite sua idade"));

        anoNascimento = 2026 - idade;

        alert(nome + " nasceu em " + anoNascimento);

        indice = indice + 1;
    }
}

function contagemRegressiva(){
    let indice = 10;

    while(indice >= 0){
        alert(indice);
        indice = indice - 1;
    }
}

function calcularPrecoDosJogos(){
    let indice = 0;

    let total = 0;

    while(indice <= 2){
        let nome = prompt("Digite o nome do jogo");
        let preco = parseInt(prompt("Digite o valor do jogo"));

        total = total + preco;
        indice =  indice + 1;
    }
    alert("Total: " + total);
}

function descobrirQuantidade(){
    let indice = 0;

    let quantidadeMenoresIdade = 0;

    while(indice < 3){

        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if(idade <= 17){
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }
        

        indice = indice + 1;
    }
    alert("Quantidade de pessoas com menos de 18 anos: " + quantidadeMenoresIdade);
}

function descobrirMaiorAltura(){
    let indice = 0;

    let maiorAltura = 0;

    while(indice < 4){
        let altura = parseFloat(prompt("Digite a altura: "))

        if(altura > maiorAltura){
            maiorAltura = altura;
        }

        indice = indice + 1;
    }
    alert("Maior altura: " + maiorAltura.toFixed(2));
}

function descobrirMenorVitorias(){
    let indice = 0;

    let menorQuantidadeDeVitorias = 9999999;

    while(indice < 5){
        let personagem = prompt("Digite a quantidade de vitorias: ")
        let vitorias = parseFloat(prompt("Digite a quantidade de vitorias: "))

        if(vitorias < menorQuantidadeDeVitorias){
            menorQuantidadeDeVitorias = vitorias;
        }

        indice = indice + 1;
    }
    alert("Menor quantidade de vitorias: " + menorQuantidadeDeVitorias);
}

function descobrirColaboradorComMaiorBonificacaoSalario(){
    let index = 0;

    let maiorBonificacao = 0;

    let nomeMaiorBonificacao = "";

    while(indice < 3){
        let nome = prompt("Digite seu nome");
        let bonificacao = parseFloat(prompt("Digite o vzlor da bonificação: "))

        if(bonificacao > maiorBonificacao){
            maiorBonificacao = bonificacao;
            nomeMaiorBonificacao = nome;
        }

        indice = indice + 1;
    }
    alert(nome + " tem a amior bonificação: " + maiorBonificacao);
}

function descobrirMenorNome(){
    let indice = 0;
    let menorNome = "yuipretuytyuiwreuyityuiteryolytuoweyrowtuieroitweoiytiurwyeotuiywrgtegfurgtoiuwterouitwriuwteoiueuiweiouwruiwruiowruiowiowutiuoriwert";

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de nomes"));

    while(indice < quantidadeDesejada){

        let nome = prompt("Digite o nome").trim();

        if(nome.length < menorNome.length){
            menorNome =  nome;
        }
        indice = indice + 1;
    }
    alert("Menor nome: " + menorNome + "\n" + 
    "Quantidade de caracteres: " + menorNome.length
    );
}

function repetirEnquantoUsuarioDesejaContinuar(){
    let desejaContinuar = "";

    alert("Bem vindo ao sistema de cadastro de fila do SUS")

    while(desejaContinuar != "não"){
        let nomePaciente = prompt("Digite o nome do paciente");

        desejaContinuar = prompt("Deseja continuar? [sim/não]").toLowerCase();
    }
}

function repetirEnquantoUsuarioDesejaContinuarComConfirm(){
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("Bem vindo ao sistema de cadastro de fila do SUS")

    while(desejaContinuar != false){
        let nomePaciente = prompt("Digite o nome do paciente");

        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;

        desejaContinuar = confirm("Deseja continuar?");
    }
    alert("Quantidade de pacientes cadastrados: " + quantidadePacientesCadastrados);
}

function exemploValidacao(){
    let indice = 0;

    while(indice < 3){
        let nome = prompt("Digite o nome").trim();

        while((nome.length < 2) || (nome.length)){
            nome = prompt("Nome invalido, deve conter no minimo 2 e no maximo 20 caracteres \ndigite o nome novamente").trim();
        }

        let idade = parseInt(prompt("Digite a idade"));

        while((idade < 16) || (idade > 100)){
            idade = parseInt(prompt("Idade invalida, deve ser no minimo 16 e no maximo 100. \nDigite a idade novamente"));

        }

        indice = indice + 1;
    }
}

function exercicio01SolicitarDadosMedico(){
    let indice = 0;

    while(indice < 5){
        let nome = prompt("Digite o seu nome");
        let CRM = prompt("Digite o seu CRM");

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema Hospitalar");
}

function exercicio02SolicitarDadosPaciente(){
    let indice = 0;
    let contagemPaciente = 0;

    while(indice < 4){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
        contagemPaciente = contagemPaciente + 1;

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nNumero de pacientes cadastrados: " + contagemPaciente);
}

function exercicio03SomarIdadesPacientes(){
    let indice = 0;
    let somaIdades = 0;

    while(indice < 6){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
        somaIdades = somaIdades + idade;

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nSoma total da idade dos pacientes: " + somaIdades);
}

function exercicio04CalcularMediaIdades(){
    let indice = 0;
    let somaIdades = 0;

    while(indice < 5){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));

        somaIdades = somaIdades + idade;

        indice = indice + 1;
    }

    let mediaIdades = somaIdades / indice;

    alert("Obrigado por utilizar nosso sistema de cadastro \nMedia da soma total da idade dos pacientes: " + mediaIdades);
}

function exercicio05ContarMaioresIdade(){
    let indice = 0;
    let maioresIdade = 0;

    while(indice < 7){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));

        if(idade > 17){
            maioresIdade = maioresIdade + 1;
        }
        indice = indice + 1;
    }

    alert("Obrigado por utilizar nosso sistema de cadastro \nPacientes maiores de 18 anos: " + maioresIdade);
}

function exercicio06ValidarCRM(){
    let indice = 0;

    while(indice < 5){
        let nome = prompt("Digite o seu nome");
        let CRM = prompt("Digite o seu CRM").trim();

        while(CRM === ""){
            CRM = prompt("CRM Invalido, não pode ser vazio. \nDigite o seu CRM novamente").trim();
        }

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nCadastro dos medicos finalizado");
}

function exercicio07SolicitarPressaoArterial(){
    let indice = 0;
    let altaPressaoArterial = 0;

    while(indice < 6){
        let nome = prompt("Digite o seu nome");
        let pressaoArterial = parseInt(prompt("Digite a sua pressão arterial"));

        if(pressaoArterial > 14){
            altaPressaoArterial = altaPressaoArterial + 1;
        }
        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nPacientes com pressão arterial acima de 14: " + altaPressaoArterial);
}

function exercicio08MenuContinuarCadastro(){
    let indice = 0;
    let confirmacao = true;

    while(confirmacao !== false){
        let nome = prompt("Digite o seu nome");

        confirmacao = confirm("Deseja continuar?");

        indice = indice + 1;
    }
    alert("Numero de pacientes cadastrados: " + indice);
}

function exercicio09SomarFrequenciaCardiaca(){
    let indice = 0;
    let continuarConfirma = 1;
    let somaFrequenciaCardiaca = 0;

    while(continuarConfirma !== 0){
        let frequenciaCardiaca = parseInt(prompt("Digite a frequencia cardiaca do paciente"))

        if(frequenciaCardiaca !== 0){
            somaFrequenciaCardiaca = somaFrequenciaCardiaca + frequenciaCardiaca;
        }else{
            continuarConfirma = 0;
        }
        indice = indice + 1;
    }
    alert("Soma das frequencias cardiacas: " + somaFrequenciaCardiaca);
}

function exercicio10MaiorTemperatura(){
    let indice = 0;
    let maiorTemperatura = 0;

    while(indice < 5){
        let temperatura = parseFloat(prompt("Digite a tempratura do paciente"));

        if(temperatura > maiorTemperatura){
            maiorTemperatura = temperatura;
        }

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nPaciente com maior temperatura: " + maiorTemperatura);
}

function exercicio11MenorTemperatura(){
    let indice = 0;
    let menorTemperatura = 9999999999;

    while(indice < 5){
        let temperatura = parseFloat(prompt("Digite a tempratura do paciente"));

        if(temperatura < menorTemperatura){
            menorTemperatura = temperatura;
        }

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nPaciente com menor temperatura: " + menorTemperatura);
}

function exercicio12ContarSintomas(){
    let indice = 0;
    let somaSintomas = 0;

    while(indice < 5){

        let nome = prompt("Digite o seu nome");
        let febre = prompt("Digite se você esta com febre. [sim/não]");

        if(febre === "sim"){
            somaSintomas = somaSintomas + 1
        }


        indice = indice + 1;
    }
    alert("Quantidade paciente com febre: " + somaSintomas);
}

function exercicio13SepararPacientesPorIdade(){
    let indice = 0;

    let criancas = 0;
    let adolescentes = 0;
    let adultos = 0;

    while(indice < 8){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));

        if(idade < 12){
            criancas = criancas + 1;
        }
        else if((idade >= 12) && (idade <= 17)){
            adolescentes = adolescentes + 1;
        }
        else if(idade >= 18){
            adultos = adultos + 1;
        }
        indice = indice + 1;
    }
    alert("Quantidade de crianças: " + criancas + "\n" + 
    "Quantidade de adolescentes: " + adolescentes + "\n" + 
    "Quantidade de adultos: " + adultos + "\n"
    );
}

function exercicio14ValidarOpcaoMenu(){
    let indice = 0;
    let opcaoSelecionada = 0;

    while(opcaoSelecionada !== 3){
        opcaoSelecionada = parseInt(prompt(
            "Escolha uma opção: 1,2 ou 3" +
            "\n1 - Cadastrar paciente" + 
            "\n2 - Cadastrar médico" + 
            "\n3 - Sair"
        ));

        if(opcaoSelecionada === 1){
            alert("selecionou 1");
        }else if(opcaoSelecionada === 2){
            alert("selecionou 2");
        }else if(opcaoSelecionada === 3){
            alert("selecionou 3");
        }else{
            alert("Opção invalida");
        }
    }
    alert("Sistema encerrado");
}

function exercicio15RelatorioPacientes(){
    let indice = 0;
    let somaIdades = 0;
    let maiorTemperatura = 0;
    let menorTemperatura = 999999999999;
    let numeroPessoasCom60OuMais = 0;

    while(indice < 5){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
        let temperatura = parseInt(prompt("Digite a sua temperatura"));

        somaIdades = somaIdades + idade;

        if(temperatura > maiorTemperatura){
            maiorTemperatura = temperatura;
        }

        if(temperatura < menorTemperatura){
            menorTemperatura = temperatura;
        }

        if(idade >= 60){
            numeroPessoasCom60OuMais = numeroPessoasCom60OuMais + 1;
        }

        indice = indice + 1;
    }
    let mediaIdades = somaIdades / indice;  
    alert(
        "Quantidade de pacientes cadastrados; " + indice + "\n" +
        "Media das idades: " + mediaIdades + "\n" +
        "Maior temperatura: " + maiorTemperatura + "\n" +
        "Menor temperatura: " + menorTemperatura + "\n" +
        "Numero de pessoas com 60 anos ou mais: " + numeroPessoasCom60OuMais
    );

}

function exercicio16SenhaAcessoSistema(){
    let senha = "";

    while(senha !== "hospital123"){
        senha = prompt("Senha incorreta, digite novamente");
    }
    alert("Acesso liberado ao sistema hospitalar");
}

function exercicio17CadastroComValidacaoCompleta(){
    let indice = 0;

    while(indice < 5){
        let nome = prompt("Digite o seu nome");
        let CRM = prompt("Digite o seu CRM").trim();

        while(CRM === ""){
            CRM = prompt("CRM Invalido, não pode ser vazio. \nDigite o seu CRM novamente").trim();
        }
        while(nome === ""){
            nome = prompt("Nome invalido, não pode ser vazio. \nDigite o seu nome novamente").trim();
        }

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema de cadastro \nCadastros dos medicos finalizado com sucesso: " + indice);
}

function exercicio18RelatorioFinalInternacoes(){
    let indice = 0;
    let somaDiasInternados = 0;

    let pacienteMaisTempoInternadoDias = 0;
    let nomePacienteMaisDiasInernados = "";

    while(indice < 6){

        let nome = prompt("Digite o seu nome");
        let diasInternado = parseInt(prompt("Digite a quantidade de dias internado"));

        somaDiasInternados = somaDiasInternados + diasInternado;

        if(pacienteMaisTempoInternadoDias < diasInternado){
            pacienteMaisTempoInternadoDias = diasInternado;
            nomePacienteMaisDiasInernados = nome;
        }
        indice = indice + 1;
    }
    let mediaDiasInternados = somaDiasInternados / indice;
    alert(
        "Total de dias de internação: " + somaDiasInternados + "\n" + 
        "Media de dias inernados: " + mediaDiasInternados + "\n" + 
        "Nome do paciente que ficou mais dias inernados: " + nomePacienteMaisDiasInernados
    );
}