function perguntaPraCris(){


    var input = document.getElementById("input").value;
    var check = input.includes("ajuda");
    var resposta;

    switch (input) {
      case "oi":
        resposta = "Olá! Tudo bem com você?";
        break;

      case "tudo bem":
        resposta = "tudo bem e você?";
        break;

      case "tudo bem?":
        resposta = "tudo bem e você?";
        break;

      case "tudo bom":
        resposta = "tudo bem e você?";
        break;

      case "tudo bom?":
        resposta = "tudo bem e você?";
        break;


      default:
      resposta = "não entendi, pode perguntar de outra forma, por favor?";
    }

document.getElementById("demo").innerHTML = resposta;

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



}
