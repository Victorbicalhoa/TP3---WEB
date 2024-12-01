
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
  

  const caixinhas = document.querySelectorAll(".caixinha");
  caixinhas.forEach(caixinha => {
    caixinha.addEventListener("dragstart", dragStart);
  });
  

  const containers = document.querySelectorAll(".container");
  containers.forEach(container => {
    container.addEventListener("dragover", allowDrop);
    container.addEventListener("drop", drop);
  });
  