document.getElementById('btn-add-item').addEventListener('click', addItem)
document.getElementById('btn-clear-list').addEventListener('click', clearList)
document.getElementById('item-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem()
    }
})
document.addEventListener('DOMContentLoaded', loadLista) 
    
function addItem() {
    const itemInput = document.getElementById('item-input')
    const item = itemInput.value

    if (item !== '') {
        addItemLista(item)
        saveItem(item)
        itemInput.value = ''
    } else {
        alert('Insira uma tarefa')
    }
}

function addItemLista(item) {
    const lista = document.getElementById('lista')
    const novoItem = document.createElement('li')
    const checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            novoItem.classList.add('riscado');
        } else {
            novoItem.classList.remove('riscado');
        }
    })

    const itemText = document.createElement('span')

    itemText.textContent = item

    novoItem.appendChild(checkbox)
    novoItem.appendChild(itemText)
    lista.appendChild(novoItem)
}

function saveItem(item) {
    let itens = localStorage.getItem('itens') ? JSON.parse(localStorage.getItem('itens')) : []
    itens.push(item)
    localStorage.setItem('itens', JSON.stringify(itens))
}

function loadLista() {
    let itens = localStorage.getItem('itens') ? JSON.parse(localStorage.getItem('itens')) : []
    itens.forEach(item => {
        addItemLista(item)
    })
}

function clearList() {
    localStorage.removeItem('itens')
    document.getElementById('lista').innerHTML = ''
}
