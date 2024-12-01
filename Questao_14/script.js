const inputTexto = document.getElementById("texto");
const spanNome = document.getElementById("nome");

function handleKeyDown(event) {

  if (event.key === "Enter") {
    spanNome.textContent = inputTexto.value;
    inputTexto.value = "";
  }
}

inputTexto.addEventListener("keydown", handleKeyDown);
