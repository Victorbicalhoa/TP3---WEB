const botao = document.getElementById("toggleDarkMode");
const body = document.body;

function darkMode() {
  body.classList.toggle("dark-mode");
}

botao.addEventListener("click", darkMode);
