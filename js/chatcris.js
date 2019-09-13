function perguntaPraCris(){
    var input = document.getElementById("input").value;
    var check = input.includes("ajuda");
    var resposta;
    var i = 0;
    var speed = 45;

    switch (input) {
      case "":
        limpaResposta();
        resposta = "Por favor, digite algo."
        typeWriter();
        break;

      case "oi":
        limpaResposta();
        resposta = "Olá, como você está?";
        typeWriter();
        limpaInput();
        break;

      // codigo de cancelamento
      case "Onde que verifico o código de cancelamento em minha maquininha?":
        limpaResposta();
        codigoCancelamento();
        break;

      case "código de cancelamento":
        limpaResposta();
        codigoCancelamento();
        break;

      case "codigo de cancelamento":
          limpaResposta();
          codigoCancelamento();
          break;
      // codigo de cancelamento

      case "tudo bem":
        limpaResposta();
        tudoBem();
        break;

      case "tudo bem?":
        limpaResposta();
        tudoBem();
        break;

      case "tudo bom":
        limpaResposta();
        tudoBem();
        break;

      case "tudo bom?":
        limpaResposta();
        tudoBem();
        break;

      case "kill":
        limpaResposta();
        killApp();
        break;


      default:
      respostaDefault();
    }

// document.getElementById("demo").innerHTML = resposta;

    // if (input == "kill") {
    //   alert("saindo da aplicação em 3...2...1...");
    //   window.close();
    // }
    //
    // if (input == "/help") {
    //   var resposta = document.getElementById("demo").innerHTML =
    //     "Esses são os comandos da aplicação:";
    // }
    //
    // if (input == "oi"
    //     ||
    //     input == "olá") {
    //   var resposta = document.getElementById("demo").innerHTML = "Olá!";
    // }
    // else if (input.includes("tudo bem")) {
    //   var resposta = document.getElementById("demo").innerHTML = "tudo ótimo e você?";
    // }
    //
    //
    //
    // else {
    //   var resposta = document.getElementById("demo").innerHTML = "não entendi, pode perguntar de outra forma, por favor?";
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
      resposta = "tudo bem e você?";
      typeWriter();
    }
    // var i = 0;
    // var txt = 'Lorem ipsum dummy text blabla.';
    // var speed = 50;
    //
    // function typeWriter() {
    //   if (i < txt.length) {
    //     document.getElementById("demo").innerHTML += txt.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //   }
    // }

    function killApp(){
      alert("Saindo da aplicação em 3...2...1...");
      window.open('','_self').close();
    }

// limpa campo de texto (a.k.a input)
  function limpaInput(){
      $('button').click(function(){
      $('input[type="text"]').val("");
      });
  }




}
