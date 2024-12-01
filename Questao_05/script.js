function darkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  document.getElementById("toggleDarkMode").addEventListener("click", darkMode);
  
  const imagemDestaque = document.createElement("img");
  imagemDestaque.src = "img.jpeg";
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
  