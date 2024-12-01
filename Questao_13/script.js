const cores = ["corVerde", "corRoxa", "corLaranja", "corVermelha"];

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text/plain");
  const element = document.getElementById(id);
  const dropzone = event.target;

  if (dropzone.classList.contains("container")) {
    dropzone.appendChild(element);
  }
}

function criarCaixinha() {
  const novoContainer = document.getElementById("novo");
  const novaCaixinha = document.createElement("div");
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  
  novaCaixinha.classList.add("caixinha", corAleatoria);
  novaCaixinha.draggable = true;
  novaCaixinha.id = `caixinha${Date.now()}`;


  novaCaixinha.addEventListener("dragstart", dragStart);

  novoContainer.appendChild(novaCaixinha);
}

// Adiciona o evento de clique ao botão criar
document.getElementById("criar").addEventListener("click", criarCaixinha);

// Adiciona eventos de drag e drop às caixinhas
const caixinhas = document.querySelectorAll(".caixinha");
caixinhas.forEach(caixinha => {
  caixinha.addEventListener("dragstart", dragStart);
});

// Adiciona eventos de drag e drop às áreas de container
const containers = document.querySelectorAll(".container");
containers.forEach(container => {
  container.addEventListener("dragover", allowDrop);
  container.addEventListener("drop", drop);
});
