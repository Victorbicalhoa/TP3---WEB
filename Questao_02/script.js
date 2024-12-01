const imagem = document.getElementById("minhaImagem");
const mensagem = document.getElementById("mensagem");

imagem.addEventListener("load", () => {
  imagem.classList.add("imagem-carregada");

  mensagem.textContent = "A imagem foi carregada com sucesso!";
});

imagem.addEventListener("error", () => {
  mensagem.textContent = "Erro ao carregar a imagem.";
});
