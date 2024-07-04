let totalfinal = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$ 0";

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById("quantidade").value);

    if(!produto || produto.trim() === "") {
        alert("Produto inválido. Selecione novamente.");
        return;
    }

    if(isNaN(quantidade) || quantidade <= 0) {
        alert("Valor não aceito. Digite uma quantidade válida.");
        return;
    }

    let preco = quantidade * precoProduto;

    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

    totalfinal = totalfinal + preco;

    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$ ${totalfinal}`;

    document.getElementById("quantidade").value = "0";
}

function limpar() {
    document.getElementById("produto").value = "";
    document.getElementById("quantidade").value = "0";
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0";
}