function perguntaPraCris(){
    var userName = "Ricardo ";
    var dataHoje = new Date();
    var dia = dataHoje.getDate();
    var mes = dataHoje.getMonth();
    var ano = dataHoje.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;
    var soHoraAgora = dataHoje.getHours();
    var soMinutosAgora = dataHoje.getMinutes();
    var horaEMinutosAtual = dataHoje.getHours() + ":" + dataHoje.getMinutes();
    var input = document.getElementById("input").value;

    //transforma todo o input para letras minúsculas.
    var inputMinusculo = input.toLowerCase();

    var resposta;

    var i = 0;
    var speed = 30;

//maneiras de dizer oi
    var x;
    var x = input;

//maneiras de dizer oi
    switch (true) {
      case inputMinusculo.includes("oi"):
        oi();
        break;

      case inputMinusculo.includes("ol"):
        oi();
        break;

      case inputMinusculo === "/":
        comandosAviso();
        break;

      case inputMinusculo === "/ls-comandos":
        listaComandos();
        break;

      case inputMinusculo.includes("comando"):
        listaComandos();
        break;

      case inputMinusculo.includes("kill"):
        killApp();
        break;

      case inputMinusculo.includes("tudo b"):
        tudoBem();
        break;

      case inputMinusculo === "":
        limpaResposta();
        resposta = "Por favor, digite algo";
        typeWriter();
        break;

      case inputMinusculo.includes("vendas"):
        acompanharVendas()
        break;

      case inputMinusculo.includes("adqui"):
        adquirirMaquinaTecpay();
        break;

      case inputMinusculo.includes("conta digital"):
        abrirContaDigital();
        break;

      case inputMinusculo.includes("digo de cancelamento"):
        limpaResposta();
        codigoCancelamento();
        typeWriter();
        break;

      case inputMinusculo.includes("data de hoje"):
        limpaResposta();
        resposta = "A data de hoje é: " + dataAtual;
        typeWriter();
        break;

      case inputMinusculo.includes("suporte"):
        limpaResposta();
        resposta =
          "Para falar com alguém da nossa equipe de suporte: " +
          "Ligue para (11) 3863-2332 ou pelo Whatsapp: +55 11 95305-3981";
        typeWriter();
        break;

      case inputMinusculo.includes("horas"):
        limpaResposta();
        resposta = "Hora atual: " + horaEMinutosAtual;
        typeWriter();
        break;

      // configurar maquininha para o Wi-Fi
      case inputMinusculo.includes("wifi"):
        wifi();
        break;

      case inputMinusculo.includes("wi fi"):
        wifi();
        break;

      case inputMinusculo.includes("wi-fi"):
        wifi();
        break;
      // fim - configurar maquininha para o Wi-Fi

      case inputMinusculo.includes("senha"):
        resgatarSenha();
        break;

      case inputMinusculo.includes("taxas para adquir"):
        taxasParaAdquirirMaquininhaTecpay();
        break;

    default:
      respostaDefault();
  }

    function comandosAviso(){
      limpaResposta();
      resposta = "Para realizar algum comando, digite "
      + "/ seguido do comando que deseja realizar.";
      typeWriter();
    }

    function listaComandos(){
      limpaResposta();
      var lista = "Lista de comandos:";
      resposta = lista;
      typeWriter();
    }

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

    function oi(){
      limpaResposta();
      resposta = "Olá " + userName + ", como posso te ajudar?";
      typeWriter();
    }

    function wifi(){
      limpaResposta();
      var resposta1 = "Para configurar a maquininha para o modo Wi-Fi:";
      var resposta2 = "Menu -> Administrativo ->  Wifi -> Redes Wifi -> Selecionar Wifi desejado -> Conectar -> Inserir a senha -> Conferir se aparece o sinal do Wifi."
      resposta = resposta1 + resposta2;
      typeWriter();
    }

    function  acompanharVendas(){
      limpaResposta();
      resposta = "Para acompanhar suas vendas: "
      + "Acesse o portal Tecpay (http://portal.tecpay.com.br), clicar em ‘Transações e Repasses’ -> ‘Detalhes’ -> Filtrar a data desejada. ";
      typeWriter();
    }

    function adquirirMaquinaTecpay(){
      limpaResposta();
      resposta = "Para adquirir sua máquina Tecpay: "
      + "Entre em contato conosco através dos telefones (11) 3862-2332/0800-580-0009/(11) 953053981 . Deste modo, vamos auxiliá-lo para que você tenha sua máquina TecPay em mãos o quanto antes. Você também pode solicitar pelo nosso site ou através do e-mail contato@tecpay.com.br.";
      typeWriter();
    }

    function abrirContaDigital(){
      limpaResposta();
      resposta = "Para abrir uma conta digital: "
      + "Entre em contato conosco através dos telefones "
      + "(11)3862-2332 / 0800-580-0009/ (11)953053981."
      + "Deste modo, vamos auxiliá-lo para que você tenha sua "
      + "conta digital TecPay o quanto antes. Você também pode solicitar "
      + "pelo nosso site ou através do e-mail contato@tecpay.com.br."
      + "Não é preciso ter uma maquininha para abrir uma conta digital.";
      typeWriter();
    }

    function resgatarSenha(){
      limpaResposta();
      resposta = "Para resgatar sua senha do portal Tecpay: "
      +"Acessar o portal Tecpay http://portal.tecpay.com.br -> inserir seu login -> clicar em esqueci minha senha -> Será enviado um link em seu e-mail para cadastrar uma nova senha.";
      typeWriter();
    }

    function killApp(){
      limpaResposta();
      alert("Fico triste que nossa relação teve que acabar desse jeito...");
      alert("Se deseja fechar a janela e me matar assim, sem nenhuma explicação, vai ter que fazer isso você mesmo 😭");
      document.body.style.backgroundColor = "red";
      document.getElementById("container").style.display = "none";
    }

    function taxasParaAdquirirMaquininhaTecpay(){
      limpaResposta();
      resposta = "Suas taxas serão definidas de acordo com "
      + "o seu faturamento, entre em contato conosco através "
      + "dos telefones (11)3862-2332 / 0800-580-0009 / (11)953053981. "
      + "Deste modo, iremos esclarecer todas as suas dúvidas em relação as taxas";
      typeWriter();
    }

// seção JQuery
// limpa campo de texto (a.k.a input)
    $('button').click(function(){
    $('input[type="text"]').val("");
    });
}
