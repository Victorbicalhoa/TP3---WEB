function darkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("toggleDarkMode").addEventListener("click", darkMode);

const imagemDestaque = document.createElement("img");
imagemDestaque.src = "img.jpg";
imagemDestaque.alt = "Imagem de destaque";
imagemDestaque.title = "Imagem carregada com sucesso";
imagemDestaque.classList.add("imagem-destaque");

document.querySelector("nav").insertAdjacentElement("afterend", imagemDestaque);

const menuItems = document.querySelectorAll("#menu li");
const footer = document.querySelector("footer");
const listaFooter = document.createElement("ul");

menuItems.forEach((menuItem, index) => {
  const footerItem = document.createElement("li");
  footerItem.textContent = menuItem.textContent;
  footerItem.id = `footer-item-${index + 1}`;
  listaFooter.appendChild(footerItem);
});

footer.appendChild(listaFooter);


const usuario = {
  nome: prompt("Por favor, informe seu nome:")
};


const section = document.querySelector("main section");
const mensagemBoasVindas = document.createElement("p");
mensagemBoasVindas.textContent = `Olá, ${usuario.nome}! Seja bem-vindo ao nosso site!`;


section.insertAdjacentElement("afterbegin", mensagemBoasVindas);


const tabela = document.createElement("table");

tabela.innerHTML = `
  <tr>
    <td>Item 1</td>
    <td>Item 2</td>
    <td>Item 3</td>
    <td>Item 4</td>
  </tr>
  <tr>
    <td>Item 5</td>
    <td>Item 6</td>
    <td>Item 7</td>
    <td>Item 8</td>
  </tr>
`;


section.appendChild(tabela);
