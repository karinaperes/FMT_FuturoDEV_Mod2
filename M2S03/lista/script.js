
const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 },
    { nome: "Vestido", valor: 20.99 }
];

function renderProdutos(produtos) {
    const listaProdutos = document.getElementById('lista-produtos')
    produtos.forEach(produto => {
        const itemProduto = document.createElement('div')
        itemProduto.className = 'item-produto'

        const nomeProduto = document.createElement('div')
        nomeProduto.className = 'nome-produto'
        nomeProduto.textContent = produto.nome

        const precoProduto = document.createElement('div')
        precoProduto.className = 'preco-produto'
        precoProduto.textContent = `R$ ${produto.valor.toFixed(2)}`

        itemProduto.appendChild(nomeProduto)
        itemProduto.appendChild(precoProduto)
        listaProdutos.appendChild(itemProduto)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProdutos(produtos)
})