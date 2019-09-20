

document.getElementById("btnLoginSubmit").addEventListener("click", direcionaPraCris, false);


  function direcionaPraCris() {
    var inputLogin = document.getElementById("usr").value;
    var inputSenha = document.getElementById("pwd").value;

    var userName = "ricardo";
    var password = "ricardo";

    function autenticacao(){
      if (inputLogin == userName && inputSenha == password) {
        window.location.href='html/conversaCris.html';
      }
      else {

      }
    }

    switch (true) {
      case inputLogin==="ricardo":
        autenticacao();
        break;

      default:
      var mensagemErro = document.getElementById("msgErro");
      mensagemErro.innerHTML = "ERRO!".fontcolor("red");
      alert("Não foi possível autorizar entrada!");
    }


  }
