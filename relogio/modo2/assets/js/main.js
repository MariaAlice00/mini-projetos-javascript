const p = document.querySelector('.container p')
const data = new Date()

p.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })
