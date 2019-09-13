function perguntaPraCris(){
    var userName = "Ricardo";
    var dataHoje = new Date();
    var dia = dataHoje.getDate();
    var mes = dataHoje.getMonth();
    var ano = dataHoje.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;
    var soHoraAgora = dataHoje.getHours();
    var soMinutosAgora = dataHoje.getMinutes();
    var horaEMinutosAtual = dataHoje.getHours() + ":" + dataHoje.getMinutes();

    var input = document.getElementById("input").value;
    var resposta;
    var i = 0;
    var speed = 30;

//maneiras de dizer oi
    var x;
    var x = input;

//maneiras de dizer oi
    switch (true) {
      case input.includes("oi"):
        limpaResposta();
        resposta = "Olá " + userName + ", como posso te ajudar?";
        typeWriter();
        break;

      case input==="":
        limpaResposta();
        resposta = "por favor, digite algo";
        typeWriter();
        break;

        case input.includes("conta digital"):
          limpaResposta();
          resposta = "para saber mais sobre conta digital...";
          typeWriter();
          break;

          case input.includes("digo de cancelamento"):
            limpaResposta();
            codigoCancelamento();
            typeWriter();
            break;

        case input.includes("data de hoje"):
          limpaResposta();
          resposta = "A data de hoje é: " + dataAtual;
          typeWriter();
          break;

        case input.includes("horas"):
          limpaResposta();
          resposta = "Hora atual: " + horaEMinutosAtual;
          typeWriter();
          break;

      default:
        limpaResposta();
        resposta = "Desculpa, não entendi";
        typeWriter();
    }


      // if (input == "") {
      //   limpaResposta();
      //   resposta = "Digite algo para falar comigo!";
      //   typeWriter();
      // }
      // else {
      //
      // }

    function codigoCancelamento(){
      resposta = "O código de cancelamento aparece como código EC em todos os comprovantes " +
      "de venda. Caso não consiga encontrar, entre em contato com a central Tecpay no telefone " +
      "(11)3862-2332.";
      typeWriter();

    }
    function typeWriter() {
      if (i < resposta.length) {
        document.getElementById("demo").innerHTML += resposta.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    function limpaResposta(){
      document.getElementById("demo").innerHTML = "";
    }
    function respostaDefault(){
      limpaResposta();
      resposta = "Desculpe, não entendi, pode perguntar de outra forma, por favor?";
      typeWriter();
    }

    function tudoBem(){
      limpaResposta();
      resposta = "Tudo ótimo por aqui! Como posso ser útil?"
      typeWriter();
    }



    function respostaFormasDeDizerOi(){
        resposta = "Olá, " + userName + ", como você está?";
        typeWriter();
    }

    function killApp(){
      alert("Saindo da aplicação em 3...2...1...");
      window.open('','_self').close();
    }

// limpa campo de texto (a.k.a input)
    $('button').click(function(){
    $('input[type="text"]').val("");
    });

}
