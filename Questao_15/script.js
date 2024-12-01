const container = document.getElementById("container");

function handleClick() {
  const span = container.querySelector("span");
  span.textContent = "teste";
}
container.addEventListener("click", handleClick);
