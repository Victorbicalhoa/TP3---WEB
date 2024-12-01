const lista = document.getElementById("lista");
const botaoAdicionar = document.getElementById("adicionarItem");

let contador = 0;

function adicionarItem() {
  contador++;

  const novoItem = document.createElement("li");
  novoItem.textContent = `Novo Item ${contador}`;
  novoItem.id = `novoitem${contador}`;

  lista.appendChild(novoItem);

  if (contador === 10) {
    alert("Novo Item 10 foi criado!");
  }
}

botaoAdicionar.addEventListener("click", adicionarItem);

const botaoDarkMode = document.getElementById("toggleDarkMode");
const body = document.body;

function darkMode() {
  body.classList.toggle("dark-mode");
}


botaoDarkMode.addEventListener("click", darkMode);


const imagemDestaque = document.createElement("img");
imagemDestaque.src = "img.jpeg";
imagemDestaque.alt = "Imagem de destaque";
imagemDestaque.title = "Imagem carregada com sucesso";
imagemDestaque.classList.add("imagem-destaque");

const nav = document.querySelector("nav");
nav.insertAdjacentElement("afterend", imagemDestaque);
