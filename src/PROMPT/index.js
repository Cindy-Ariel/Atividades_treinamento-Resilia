var resultado;
function ValidaEmail() {
  var email = prompt("Qual o seu email?", "nome@gmail.com");
  if (email.indexOf("@") > 1) {
    alert("Email validado");
    resultado = true;
  } else {
    alert("Email invalido");
    resultado = false;
  }
  return resultado;
}

function ExibeResultadoValidacao() {
  if (resultado == true) {
    document.write("<h1>Email valido</h1>");
  } else if (resultado == false) {
    document.write("<h1>Email invalido</h1>");
  }
  console.log(resultado);
  return resultado;
}
ValidaEmail();
ExibeResultadoValidacao();
