function fazerLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Login fixo
  if (usuario === "admin" && senha === "Mm102030") {
    localStorage.setItem("logado", "sim");
    window.location.href = "admin.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
