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

function removerLinha() {
  const tabela = document.getElementById("minhaTabela").getElementsByTagName("tbody")[0];
  const mensagem = document.getElementById("mensagem");

  if (tabela.rows.length > 0) {
    tabela.deleteRow(0);
    mensagem.textContent = "";
  } else {
    mensagem.textContent = "Não há mais linhas para retirar.";
  }
}

document.getElementById("adicionarLinha").addEventListener("click", adicionarLinha);

document.getElementById("removerLinha").addEventListener("click", removerLinha);
