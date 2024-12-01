const lista = document.getElementById("lista");
const botaoAdicionar = document.getElementById("lista-item");
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
