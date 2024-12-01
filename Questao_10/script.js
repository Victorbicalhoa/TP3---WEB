function adicionarLinha() {
    const tabela = document.getElementById("minhaTabela").getElementsByTagName("tbody")[0];
    
    const novaLinha = tabela.insertRow(); 
    

    const celula1 = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);
    const celula3 = novaLinha.insertCell(2);
    const celula4 = novaLinha.insertCell(3);
    

    celula1.textContent = "Novo Nome";
    celula2.textContent = "Nova Idade";
    celula3.textContent = "Nova Profissão";
    celula4.textContent = "Novo País";
  }
  
  document.getElementById("adicionarLinha").addEventListener("click", adicionarLinha);
  