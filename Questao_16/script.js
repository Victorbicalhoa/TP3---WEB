const lista = document.getElementById("lista");

function handleClick() {
  const li = Array.from(lista.getElementsByTagName("li")).find(item => item.innerText === "Acre");

  if (li) {
    li.innerText = "Amapá";
    li.style.backgroundColor = "blue";
  }
}
lista.addEventListener("click", handleClick);
