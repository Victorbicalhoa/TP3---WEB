
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
  
    if (dropzone.id === "destino" || dropzone.id === "origem") {
      dropzone.appendChild(element);
    }
  }
  
  const draggableElements = document.querySelectorAll("#origem [draggable='true']");
  draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
  });
  
  const dropzones = document.querySelectorAll("#origem, #destino");
  dropzones.forEach(zone => {
    zone.addEventListener("dragover", allowDrop);
    zone.addEventListener("drop", drop);
  });
  